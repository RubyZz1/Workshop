import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
  TextInput,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { TouchableOpacity } from "react-native-web";
import { useRoute } from "@react-navigation/native";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const route = useRoute();
  const { productId } = route.params;

  const [products, setProducts] = useState({ quantite: 0 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/produits/" + productId).then((res) => {
      setProducts(res.data);
      setCount(res.data.quantite);
    });
  }, []);

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const plus = () => {
    setCount(count + 1);
  };

  const updateStock = () => {
    axios
      .put("http://127.0.0.1:8000/api/produits/" + productId, {
        quantite: count,
      })
      .then((res) => {
        console.log(res);
        navigation.navigate("Stocks");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <TopNav
        middleContent="Gestion du Stock"
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
      <View style={styles.formulaire}>
        <View>
          <Image source={{ uri: products.photo }} style={styles.image} />
          <Text style={styles.nom}>{products.nom}</Text>
        </View>

        <View>
          <Text style={styles.EnStock}>En Stock :</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={minus} disabled={count == 0}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.qtyInput}
              keyboardType="numeric"
              name="qty"
              value={isNaN(count) ? "" : count.toString()}
              maxLength={3}
              onChangeText={(value) => {
                if (/^\d*$/.test(value)) {
                  setCount(parseInt(value));
                } else if (value === "") {
                  setCount("");
                }
              }}
            />
            <TouchableOpacity onPress={plus}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Enregistrer}>
            <TouchableOpacity style={styles.btn} onPress={updateStock}>
              <Text style={styles.btnText}>Enregistrer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  formulaire: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Enregistrer: {
    marginTop: 10,
    textAlign: "center",
  },
  nom: {
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 20,
    borderRadius: 10,
  },
  EnStock: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  qtyInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    textAlign: "center",
  },
  btn: {
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
});
