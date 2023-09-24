import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import userImage from "../Images/young-bearded-man-with-striped-shirt.jpg";
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

export default PostsScreen = () => {
  const [postsGallery, setPostsGallery] = useState([]);
  const route = useRoute();
  const postData = route.params ? route.params.postData : null;

  const navigation = useNavigation();

  const commentsQwauntity = 5;

  useEffect(() => {
    if (postData) {
      setPostsGallery((prevGallery) => [...prevGallery, postData]);
    }
  }, [postData]);

  const navigateToComment = async () => {
    try {
      navigation.navigate("CommentScreen", {
        postData,
      });
    } catch (error) {
      console.error("Error while switch to map:", error);
    }
  };

  const navigateToMap = async () => {
    try {
      navigation.navigate("MapScreen", {
        postData,
      });
    } catch (error) {
      console.error("Error while switch to comment:", error);
    }
  };

  return (
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
      <SafeAreaView style={styles.body}>
        <ScrollView style={styles.postsList}>
          {postsGallery.map((item, index) => (
            <View key={index}>
              <Image style={styles.imageItem} source={{ uri: item.photoUri }} />
              <Text style={styles.titleItem}>{item.titlePhoto}</Text>
              <View style={styles.boxItem}>
                <View style={styles.comments}>
                  <Feather
                    name="message-circle"
                    size={24}
                    color={"#BDBDBD"}
                    marginRight={6}
                  />
                  <Text
                    style={[styles.textItem, { color: "#BDBDBD" }]}
                    onPress={navigateToComment}
                  >
                    {commentsQwauntity}
                  </Text>
                </View>
                <View style={styles.comments}>
                  <Feather
                    name="map-pin"
                    size={24}
                    color="#BDBDBD"
                    marginRight={4}
                    style={styles.icon}
                    onPress={navigateToMap}
                  />
                  <Text style={styles.textItem}>{item.locality}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
  imageItem: {
    height: 240,
    width: 343,
    borderRadius: 8,
    marginBottom: 8,
  },
  titleItem: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "medium",
    marginBottom: 8,
  },
  textItem: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "regular",
    marginBottom: 16,
  },
  boxItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  comments: { flexDirection: "row" },
  postsList: {
    marginTop: 90,
  },
});
