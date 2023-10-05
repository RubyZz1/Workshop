import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Button } from "react-native-rapi-ui";
import Menu from "../screens/utils/Menu";

const UserProfileCard = ({ navigation }) => {
  // États
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  // Fonction pour mettre à jour la note lorsque l'utilisateur appuie sur une étoile
  const handleRating = (value) => {
    setRating(value);
  };

  // Fonction pour mettre à jour le commentaire lorsque l'utilisateur tape
  const handleCommentChange = (text) => {
    setComment(text);
  };

  // Fonction pour soumettre un avis
  const handleSubmitReview = () => {
    const review = {
      rating,
      comment,
    };

    setReviews([...reviews, review]);
    setRating(0);
    setComment("");
  };

  // Fonction à exécuter lorsque le bouton "Rendez-vous" est pressé
  const handleRendezVousPress = () => {
    // Mettez ici la logique pour gérer le rendez-vous
  };

  // Fonction pour gérer le survol de l'étoile
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <View>
      <Menu navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>Annonces</Text>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Jhon Doe</Text>
          <Text style={styles.userDescription}>Charpentier</Text>
          <Text style={styles.userDescription}>Artisan depuis 5 ans</Text>
          <Text style={styles.userDescription}>Lille</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleRendezVousPress}
          >
            <Text style={styles.buttonText}>Rendez-vous</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Donnez une note :</Text>
          <Text style={styles.selectedRating}>
            Vous avez donné une note de {rating} étoiles.
          </Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((value) => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.star,
                  isHovered ? styles.hovered : null,
                  value <= rating ? styles.selectedStar : null,
                ]}
                onPress={() => handleRating(value)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Text style={styles.starText}>★</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.label}>Commentaire :</Text>
          <TextInput
            style={styles.commentInput}
            value={comment}
            onChangeText={handleCommentChange}
            placeholder="Ajouter un commentaire"
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmitReview}
          >
            <Text style={styles.submitButtonText}>Soumettre</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Avis précédents :</Text>
          {reviews.map((review, index) => (
            <View key={index} style={styles.review}>
              <Text>★ {review.rating}</Text>
              <Text>{review.comment}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2ac49b",
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  selectedStar: {
    backgroundColor: "white",
  },
  selectedRating: {
    marginTop: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: "row",
  },
  starText: {
    fontSize: 24,
    color: "gold",
  },
  star: {
    width: 40,
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderColor: "gold",
    justifyContent: "center",
    alignItems: "center",
  },
  hovered: {
    backgroundColor: "#ffcc00",
  },
  userInfo: {
    marginLeft: 20,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  userDescription: {
    fontSize: 14,
    color: "#000",
  },
  commentInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  review: {
    marginBottom: 10,
  },
});

export default UserProfileCard;