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

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const [commandes, setCommandes] = useState([]);
  const [emailUser, setEmailUser] = useState();

  const handleSuivreCommande = (idCommande) => {
    navigation.navigate('SuiviCommande', { idCommande });
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/historique_commandes").then((res) => {
      setCommandes(res.data["hydra:member"]);
    });
  }, []);

  console.log(commandes)

  return (
    <Layout>
      <TopNav
        middleContent="Commandes"
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

      <View style={styles.container}>
        <Text style={styles.title}>Historique des Commandes</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.header}>#</Text>
            <Text style={styles.header}>Référence</Text>
            <Text style={styles.header}>Article</Text>
            <Text style={styles.header}>Prix Total</Text>
            <Text style={styles.header}>Date Achat</Text>
            <Text style={styles.header}>Suivie</Text>
          </View>
          {commandes.map((commande) => (
  <View style={styles.row} key={commande.id}>
    <Text style={styles.cell}>{commande.id}</Text>
    <Text style={styles.cell}>{commande.reference}</Text>
    <Text style={styles.cell}>{commande.qteProduit}</Text>
    <Text style={styles.cell}>{commande.prixTotal}€</Text>
    <Text style={styles.cell}>
      {new Date(commande.dateAchat).toLocaleDateString("fr-FR")}
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => handleSuivreCommande(commande.id)}>
      <Text style={styles.buttonText}>Suivre commande</Text>
    </TouchableOpacity>
  </View>
))}


        </View>
      </View>
    </Layout>
  );
}


const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 16,
  backgroundColor: "#fff",
  },
  title: {
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 16,
  },
  table: {
  flex: 1,
  borderColor: "#ccc",
  borderWidth: 1,
  borderRadius: 8,
  overflow: "hidden",
  marginTop: 16,
  },
  row: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fafafa",
  borderBottomWidth: 1,
  borderBottomColor: "#ccc",
  paddingVertical: 12,
  paddingHorizontal: 16,
  },
  header: {
  fontWeight: "bold",
  flex: 1,
  textAlign: "center",
  },
  cell: {
  flex: 1,
  textAlign: "center",
  },


  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#428bca",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  });