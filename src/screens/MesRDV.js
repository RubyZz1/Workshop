import React from "react";
import Menu from "../screens/utils/Menu";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const AppointmentsPage = ({ navigation }) => {
  const appointments = [
    {
      id: 1,
      date: "2023-10-10",
      time: "14:00",
      isVirtual: false,
      location: "Salle de réunion A",
      participants: "John Doe, Jane Smith",
    },
    {
      id: 2,
      date: "2023-10-12",
      time: "10:30",
      isVirtual: true,
      location: "Visioconférence",
      participants: "Alice Johnson, Bob Brown",
    },
    // Ajoutez d'autres rendez-vous ici
  ];

  const handleCancelAppointment = (appointmentId) => {
    // Logique pour annuler le rendez-vous avec l'ID donné
  };

  const handleModifyAppointment = (appointmentId) => {
    // Logique pour modifier le rendez-vous avec l'ID donné
  };

  return (
    <View>
      <Menu navigation={navigation} />
      <Text style={styles.title}>Mes Rendez-vous</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {appointments.map((appointment) => (
          <View key={appointment.id} style={styles.card}>
            <View style={styles.dateContainer}>
              <View style={styles.dateBox}>
                <Text style={styles.dateText}>{appointment.date}</Text>
              </View>
              <Text style={styles.timeText}>{appointment.time}</Text>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.locationText}>
                {appointment.isVirtual ? "Visio" : "Présentiel"} -{" "}
                {appointment.location}
              </Text>
              <TouchableOpacity
                onPress={() => handleCancelAppointment(appointment.id)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleModifyAppointment(appointment.id)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Modifier</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.participantsContainer}>
              <Text style={styles.participantsText}>
                {appointment.participants}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    elevation: 3,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateBox: {
    backgroundColor: "#C4EBCA",
    borderRadius: 5,
    padding: 5,
  },
  dateText: {
    fontSize: 16,
  },
  timeText: {
    marginLeft: 10,
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 10,
  },
  locationText: {
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#90EE90", // Couleur verte claire
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  participantsContainer: {},
  participantsText: {
    fontSize: 14,
  },
});

export default AppointmentsPage;