import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Mock credentials for login validation
  const validUsername = "admin";
  const validPassword = "password123";

  const handleLogin = () => {
    if (username === validUsername && password === validPassword) {
      Alert.alert("Login Successful", "Welcome!", [
        { text: "OK", onPress: () => navigation.navigate("Home") },
      ]);
    } else {
      Alert.alert("Invalid Credentials", "Please try again.");
    }
  };

  return (
    <LinearGradient
    colors={["#4AD0C9", "#7E58C7", "#7E58C7"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />

      <Text style={styles.footerText}>
        Don't have an account?{" "}
        <Button title="Sign Up" onPress={() => navigation.navigate("Signup")} />
      </Text>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  footerText: {
    marginTop: 20,
    color: "Black",
    textDecorationLine: "None",
  },
});
