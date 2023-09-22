import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import union from "../Images/Union.png";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";

export default StyledButtons = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  const navigateToCreatePosts = () => {
    navigation.navigate("CreatePostsScreen");
  };
  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.tabBar}>
      <Ionicons
        name="grid-outline"
        size={24}
        color="black"
        onPress={navigateToHome}
      />
      <TouchableOpacity
        style={styles.buttonUnion}
        onPress={navigateToCreatePosts}
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
        onPress={navigateToProfile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
