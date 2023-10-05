import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Menu from "../screens/utils/Menu";

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Menu navigation={navigation} />

      <View style={styles.content}>
        <Text style={styles.heading}>
          <Text style={styles.largeText}>Bienvenue sur notre Application de{" "}</Text>
          <Text style={{ color: "lightgreen" }}>Formation</Text>
        </Text>
        <Text style={styles.paragraph}>
          C'est une plateforme qui vise à rapprocher les gens, à créer des amitiés durables et à encourager l'exploration de nouveaux intérêts.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonCreate}>
            <Text style={styles.buttonText}>Créer une annonce</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonProfile}>
            <Text style={styles.buttonTextProfile}>Voir le profil</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../img/Home_img.png")} // Chemin de l'image "Home_img.png"
          style={styles.image}
        />
        <Image
          source={require("../img/rectangle.png")} // Chemin de l'image "rectangle.png"
          style={styles.secondImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 36, // Agrandir la taille du titre
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  largeText: {
    fontSize: 36, // Agrandir la taille du texte "Bienvenue sur notre Application de"
  },
  paragraph: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    zIndex: 2,
    width: 300, // Ajustez la largeur de l'image selon vos besoins
    height: 300, // Ajustez la hauteur de l'image selon vos besoins
    borderRadius: 20, // Coins biseautés pour la première image
    marginTop: 20, // Marge supérieure pour l'image
  },
  secondImage: {
    position: "relative",
    bottom: 275,
    right: 20,
    width: 300, // Ajustez la largeur de la deuxième image selon vos besoins
    height: 300, // Ajustez la hauteur de la deuxième image selon vos besoins
    marginTop: 10, // Léger décalage par rapport à l'image précédente
    borderRadius: 20, // Coins biseautés pour la deuxième image
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30, // Ajoutez un léger espace entre les boutons et l'image
    marginBottom: 30,
  },
  buttonCreate: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    marginRight: 10, // Marge à droite pour séparer les boutons
  },
  buttonProfile: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  buttonTextProfile: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});

export default App;