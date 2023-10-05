import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import Menu from "../screens/utils/Menu";

const ProfilePage = ({ navigation }) => {
  // Supposons que vous avez déjà ces données du profil
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    associationName: 'Association XYZ',
    // Vous pouvez également stocker l'image de profil ici
    // profileImage: 'URL_de_l_image'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = () => {
    // Code pour mettre à jour le profil ici
    // Vous pouvez envoyer une requête API pour mettre à jour les données du profil
    // ou utiliser le stockage local pour les mettre à jour
    // Assurez-vous d'ajouter la logique de validation des données
    // et de gérer les erreurs si nécessaire
    // Une fois la mise à jour terminée, vous pouvez désactiver le mode d'édition setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Menu navigation={navigation} />
      {/* Image de profil */}
      <Image
        source={{ uri: profileData.profileImage }}
        style={styles.profileImage}
      />

      {/* Nom et Prénom */}
      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        value={profileData.firstName}
        editable={isEditing}
      />

      <Text style={styles.label}>Prénom :</Text>
      <TextInput
        style={styles.input}
        value={profileData.lastName}
        editable={isEditing}
      />

      {/* E-mail */}
      <Text style={styles.label}>E-mail :</Text>
      <TextInput
        style={styles.input}
        value={profileData.email}
        editable={isEditing}
      />

      {/* Téléphone */}
      <Text style={styles.label}>Téléphone :</Text>
      <TextInput
        style={styles.input}
        value={profileData.phoneNumber}
        editable={isEditing}
      />

      {/* Nom de l'association */}
      <Text style={styles.label}>Nom de l'association :</Text>
      <TextInput
        style={styles.input}
        value={profileData.associationName}
        editable={isEditing}
      />

      {/* Bouton Mettre à jour */}
      {isEditing ? (
        <Button title="Mettre à jour" onPress={handleUpdateProfile} />
      ) : (
        <Button title="Modifier le profil" onPress={() => setIsEditing(true)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    width: '100%',
  },
});

export default ProfilePage;