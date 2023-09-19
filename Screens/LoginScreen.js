import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import backgroundImage from "../Images/backgroundImage.png";

export default LoginScreen = () => (
  <View style={styles.container}>
    <ImageBackground
      source={backgroundImage}
      style={{ width: 375, height: 812 }}
    >
      <View style={styles.body}>
        <Text style={[styles.title, { marginTop: 32, marginBottom: 32 }]}>
          Увійти
        </Text>
        <TextInput
          style={[styles.textInput, { textAlign: "left" }]}
          placeholder="Адреса електронної пошти"
          // onChangeText={(newText) => setText(newText)}
          // defaultValue={text}
        />
        <TextInput
          style={[styles.textInput, { textAlign: "right" }]}
          placeholder="Показати"
          secureTextEntry={true}
          // onChangeText={handlePasswordChange}
          // value={password}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <Text style={[styles.text, { marginTop: 16 }]}>
          Немає акаунту? Зареєструватися
        </Text>
      </View>
    </ImageBackground>
  </View>
);

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
