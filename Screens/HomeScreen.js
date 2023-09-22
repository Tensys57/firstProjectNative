import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default  Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("PostsScreen");
    }, 1000);
  }, [navigation]);

  return (
    <View >
      <Text></Text>
    </View>
  );
};


