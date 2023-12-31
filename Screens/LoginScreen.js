import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import backgroundImage from "../Images/backgroundImage.png";

export default LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onLogon = () => {
    // console.log("email>>", `${email}`);
    // console.log("password>>", `${password}`);
    // navigation.navigate("CreatePostsScreen");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={{ width: 375, height: 812 }}
      >
        <View style={styles.body}>
          <Text style={[styles.title, { marginTop: 32, marginBottom: 32 }]}>
            Увійти
          </Text>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={[styles.textInput, { textAlign: "left" }]}
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  style={[styles.textInput, { textAlign: "right" }]}
                  placeholder="Показати"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={onLogon}>
                  <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
          <Text
            style={[styles.text, { marginTop: 16 }]}
            onPress={() => navigation.navigate("Register")}
          >
            Немає акаунту? Зареєструватися
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    padding: 16,
    paddingBottom: 100,
    marginTop: 300,
    borderRadius: 25,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "#2023a0",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "normal",
  },
  textInput: {
    height: 50,
    backgroundColor: "#E8E8E8",
    marginBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 5,
    fontFamily: "Roboto",
    fontSize: 16,
  },
  button: {
    height: 51,
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 30,
    marginTop: 27,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto",
  },
});
