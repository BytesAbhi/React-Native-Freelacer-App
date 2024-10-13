import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Signup({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  const handleSignup = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    const userData = {
      fullName,
      username,
      email,
      password,
    };

    setUserDetails(userData);
  };

  return (
    <LinearGradient
      colors={["#4AD0C9", "#7E58C7", "#7E58C7"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.title}>Create an Account</Text>

      {!userDetails ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />

          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            secureTextEntry
            onChangeText={setConfirmPassword}
          />

          <Button title="Sign Up" onPress={handleSignup} />
        </>
      ) : (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>User Details</Text>
          <Text style={styles.detail}>Full Name: {userDetails.fullName}</Text>
          <Text style={styles.detail}>Username: {userDetails.username}</Text>
          <Text style={styles.detail}>Email: {userDetails.email}</Text>
          <Text style={styles.detail}>Password: {userDetails.password}</Text>

          <Button
            title="Go to Login"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      )}

      <Text style={styles.footerText}>
        Already have an Account?{" "}
        <Button
          title="Login Now"
          onPress={() => navigation.navigate("login")}
        />
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  suggestButton: {
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#007BFF",
    borderRadius: 8,
  },
  suggestText: {
    color: "#fff",
    fontWeight: "bold",
  },
  detailsContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginVertical: 5,
  },
});
