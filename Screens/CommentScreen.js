import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const CommentScreen = () => {
  const route = useRoute();
  const postData = route.params ? route.params.postData : null;
  

  return (
    <View style={styles.container}>
      <Text>CommentScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CommentScreen;
