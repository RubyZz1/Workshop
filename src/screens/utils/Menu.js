import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import { Button } from "react-native-rapi-ui";

const Menu = () => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const auth = getAuth();

  const handleCategoryClick = (category) => {
    switch (category) {
      case "Accueil":
        // Redirection vers la page d'accueil
        navigation.navigate("Home");
        break;
      case "Annonces":
        // Redirection vers la page 'test'
        navigation.navigate("Annonces");
        break;
      case "Profil":
        navigation.navigate("Profil");
        break;
      case "Mes Rendez-vous":
        navigation.navigate("MesRDV");
        break;
      case "Deconnexion":
        navigation.navigate("MesRDV");
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <Menu navigation={navigation} />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.menuTitle}>Workshop</Text>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
            <Icon name={menuOpen ? "times" : "bars"} size={30} color="#333" />
          </TouchableOpacity>
        </View>

        {menuOpen && (
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
              <Icon name="bars" size={30} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCategoryClick("Accueil")}
              style={styles.menuItemButton}
            >
              <Text style={styles.menuItem}>Accueil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCategoryClick("Annonces")}
              style={styles.menuItemButton}
            >
              <Text style={styles.menuItem}>Annonces</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCategoryClick("Profil")}
              style={styles.menuItemButton}
            >
              <Text style={styles.menuItem}>Profil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCategoryClick("Mes Rendez-vous")}
              style={styles.menuItemButton}
            >
              <Text style={styles.menuItem}>Mes Rendez-vous</Text>
            </TouchableOpacity>
            <Button
              status="danger"
              text="Logout"
              onPress={() => {
                signOut(auth);
              }}
              style={{
                marginTop: 10,
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffff",
    zIndex: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuButton: {
    zIndex: 1,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  menuContainer: {
    backgroundColor: "#fff", // Fond blanc
    position: "absolute", // Position absolue pour que le menu soit en haut de la page
    top: 0, // Alignement en haut de la page
    left: 0,
    right: 0,
    padding: 10,
    zIndex: 2,
  },
  closeButton: {
    alignItems: "flex-end",
    marginRight: 10,
  },
  closeButtonIcon: {
    transform: [{ rotate: "90deg" }],
  },
  menuItemButton: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Menu;
