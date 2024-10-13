import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ChoiceScreen() {
  return (
    <LinearGradient
      colors={["#4AD0C9", "#7E58C7", "#7E58C7"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.title}>What would you like to do?</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Continue as Freelancer"
          onPress={() => navigation.navigate("login")}
        />
        <Button
          title="Hire Freelancer"
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
      <Link
        style={styles.homebutton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.homebuttonText}>Back to Home</Text>
      </Link>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "space-evenly",
    height: 100,
  },
});
