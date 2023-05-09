import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();

  const [products, setProducts] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      axios.get("http://127.0.0.1:8000/api/produits").then((res) => {
        setProducts(res.data["hydra:member"]);
      });
    }, [])
  );

  return (
    <Layout>
      <TopNav
        middleContent="Stocks"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      {products.map((product) => (
        <View style={styles.card} key={product.id}>
          <Image source={{ uri: product.photo }} style={styles.image} />
          <Text style={styles.name}>{product.nom}</Text>
          <Text style={styles.price}>{product.prix}€</Text>
          <Text style={styles.quantity}>En Stocks : {product.quantite}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("ProductStock", { productId: product.id })
            }
          >
            <Text style={styles.buttonText}>Gérer le Stock</Text>
          </TouchableOpacity>
        </View>
      ))}
    </Layout>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  createProductButton: {
    marginTop: 20,
    backgroundColor: "#00A6FB",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  createProductButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#00A6FB",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "green",
    marginBottom: 5,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
