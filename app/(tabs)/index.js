import React from "react";
import {
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
const Index = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#4AD0C9", "#7E58C7", "#7E58C7"]}

      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.LogoContainer}>
        <Image
          source={require("../../assets/images/mallamlogo.png")}
          style={styles.logo}
        />
      </View>
      
      <Link
        style={styles.homebutton}
        href='/Select'
      >
        <Text style={styles.homebuttonText}>Get Started</Text>
      </Link>
    </LinearGradient>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    // gap:125,
    paddingBottom:25,
    paddingTop:200,
  },
  LogoContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 200,
    width: 125 * 2.25,
    height: 125 * 2.25,
  },
  logo: {
    width: 125 * 1.5,
    height: 61 * 1.5,
    aspectRatio: 125 / 61,
    marginBottom: 20,
  },
  homebutton: {
    backgroundColor:'white',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius:15
  },
  homebuttonText: {
    color:'black',
    fontSize:20,
    fontWeight:'600',
  },
});
