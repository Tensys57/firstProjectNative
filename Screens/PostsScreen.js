import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


import userImage from "../Images/young-bearded-man-with-striped-shirt.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import union from "../Images/Union.png";


export default PostsScreen = () => (
  
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.HeaderTitle}>
        <Text style={[styles.subTitle, { marginTop: 11, marginBottom: 11 }]}>
          Публікації
        </Text>
      </View>
      <View>
        <MaterialIcons name="logout" size={24} color="black" />
      </View>
    </View>
    <View style={styles.userCard}>
      <Image source={userImage} style={styles.userImage} />
      <View style={styles.flexbox}>
        <Text style={styles.userName}>Rubi Jackson</Text>
        <Text style={styles.userEmail}>email@example.com</Text>
      </View>
    </View>
     {/* <View style={styles.tabBar}>
   <Ionicons
        name="grid-outline"
        size={24}
        color="black"
        // onPress={navigateToHome}
      />
      <TouchableOpacity
        style={styles.buttonUnion}
        // onPress={navigateToCreatePosts}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image style={{ width: 13, height: 13 }} source={union} />
        </View>
      </TouchableOpacity>
      <AntDesign
        name="user"
        size={24}
        color="black"
        // onPress={navigateToProfile}
      />
    </View> */}
    
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 88,
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#212121",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    marginBottom: 32,
  },
  HeaderTitle: {
    width: 175,
    height: 44,
    marginLeft: 100,
    marginRight: 60,
  },
  subTitle: {
    color: "#212121",
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 500,
    fontFamily: "Roboto",
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "left",
  },
  userImage: {
    width: 60,
    height: 60,
    marginLeft: 16,
    marginRight: 8,
    borderRadius: 16,
  },
  userName: {
    color: "#212121",
    textAlign: "left",
    fontSize: 13,
    lineHeight: 15.23,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  userEmail: {
    color: "#212121",
    textAlign: "left",
    fontSize: 11,
    lineHeight: 12.89,
    fontWeight: "400",
    fontFamily: "Roboto",
  },
  flexbox: {
    height: 60,
    flex: 2,
    justifyContent: "center",
  },
  tabBar: {
    height: 83,
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopColor: "#212121",
    borderTopWidth: 1,
    borderTopStyle: "solid",
  },
  buttonUnion: {
    height: 40,
    width: 70,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});
