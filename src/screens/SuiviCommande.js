import { View, TouchableOpacity, Linking, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

export default function ({ route }){
  const { idCommande } = route.params;
  const [step, setStep] = useState(0);
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  const [step1 , setStep1] = useState();


  console.log(idCommande)
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/historique_commandes/'+ idCommande)
      .then(response => {
        setStep1(response.data.status)
      })
  }, []);

  return (
    <Layout>
    <TopNav
      middleContent="Suivi Commande"
      leftContent={
        <Ionicons
          name="chevron-back"
          size={20}
          color={isDarkmode ? themeColor.white100 : themeColor.dark}
        />
      }
      leftAction={() => navigation.navigate("Commande")}
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
      <Text style={styles.title}>Statut de la commande</Text>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressStep,
            { backgroundColor: step1 >= 1 ? '#2ecc71' : '#bdc3c7' },
          ]}
        >
          <Text style={styles.progressText}>Commande validée</Text>
        </View>
        <View
          style={[
            styles.progressStep,
            { backgroundColor: step1 >= 2 ? '#2ecc71' : '#bdc3c7' },
          ]}
        >
          <Text style={styles.progressText}>Commande expédiée</Text>
        </View>
        <View
          style={[
            styles.progressStep,
            { backgroundColor: step1 >= 3 ? '#2ecc71' : '#bdc3c7' },
          ]}
        >
          <Text style={styles.progressText}>En cours de livraison</Text>
        </View>
        <View
          style={[
            styles.progressStep,
            { backgroundColor: step1 >= 4 ? '#2ecc71' : '#bdc3c7' },
          ]}
        >
          <Text style={styles.progressText}>Commande livrée</Text>
        </View>
      </View>
    </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    },
    progressContainer: {
    width: '100%',
    marginTop: 30,
    marginBottom: 30,
    },
    progressStep: {
    flex: 1,
    alignItems: 'center',
    },
    stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#d9d9d9',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
    },
    stepTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    },
    line: {
    flex: 1,
    height: 2,
    backgroundColor: '#d9d9d9',
    marginTop: 14,
    },
    'line.active': {
    backgroundColor: '#007aff',
    },
    button: {
    padding: 10,
    marginTop: 30,
    backgroundColor: '#007aff',
    borderRadius: 5,
    },
    buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    },
});