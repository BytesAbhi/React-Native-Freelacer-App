import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Platform,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";
import user from "../../assets/images/user.png";
import { LinearGradient } from "expo-linear-gradient";
export default function HomeScreen() {
  const setJobsData = [
    {
      id: 1,
      name: "UX/UI designer",
      avialavle: "590 Freelancers available",
    },
  ];

  return (
    <LinearGradient colors={["#4AD0C9", "#7E58C7"]} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerRow}>
          <View style={styles.containMain}>
            <Image source={user} style={styles.userImage} />
            <Text style={styles.userName}>Kate Norman</Text>
          </View>

          <View style={styles.containMain}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3239/3239958.png",
              }} // Replace with your notifications icon URL
              style={styles.notificationsIcon}
            />
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2311/2311531.png",
              }}
              style={styles.menuIcon}
            />
          </View>
        </View>

        <View style={styles.setShowProfileBox}>
          <View style={styles.inputContainer}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/54/54481.png",
              }} // Icon for input field
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Search for a freelancer, job"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.manageContainer}>
            <Text style={styles.fBold}>Services for you</Text>
            <Text style={styles.cCol}>View all</Text>
          </View>
          <View style={styles.jobCounter}>

            <View style={styles.card}>
             <View>
             <Text style={styles.fBold}>
                UX/UI designer
              </Text>
              <Text style={styles.cCol}>
              590 Freelancers available
              </Text>
             </View>

             <View>
             <Image
              source={{
                uri: "https://w7.pngwing.com/pngs/639/26/png-transparent-arrow-computer-icons-drop-down-list-arrow-angle-black-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-thumbnail.png",
              }} // Replace with your notifications icon URL
              style={styles.notificationsIcon}
            />
             </View>
             
            </View>
       
        </View>
        </View>
       
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  containMain: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  notificationsIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },

  setShowProfileBox: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 35,

    alignItems: "center",
    marginTop: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 12,
    paddingHorizontal: 10,
    width: "90%",
    height: 50,
    marginTop: 15,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  manageContainer: {
    width: "100%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    borderRadius: 12,
 
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  fBold: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  cCol: {
    color: "#109DD2",
    fontSize: 16,
  },
  jobCounter: {
    width: "100%",
    backgroundColor: "#eee",
    marginTop: 10,
    padding: 10,
  },
  card:{
    width:'100%',

    padding:15,
    backgroundColor:'red',
    flexDirection: 'row',
    borderRadius:10,

  }
});
