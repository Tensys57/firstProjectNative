import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import userImage from "../Images/young-bearded-man-with-striped-shirt.jpg";
import logOut from "../Images/log-out.png";
import union from "../Images/Union.png";
import grid from "../Images/grid.png";
import user from "../Images/user.png";

export default PostsScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.HeaderTitle}>
        <Text style={[styles.subTitle, { marginTop: 11, marginBottom: 11 }]}>
          Публікації
        </Text>
      </View>
      <View>
        <Image style={{ width: 24, height: 24 }} source={logOut} />
      </View>
    </View>
    <View style={styles.userCard}>
      <Image source={userImage} style={styles.userImage} />
      <View style={styles.flexbox}>
        <Text style={styles.userName}>Rubi Jackson</Text>
        <Text style={styles.userEmail}>email@example.com</Text>
      </View>
    </View>
    <View style={styles.tabBar}>
      <Image style={{ width: 40, height: 40, marginLeft: 82 }} source={grid} />
      <TouchableOpacity style={styles.buttonUnion}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image style={{ width: 13, height: 13 }} source={union} />
        </View>
      </TouchableOpacity>
      <Image style={{ width: 40, height: 40, marginRight: 81 }} source={user} />
    </View>
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
    height: 44,
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
