import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import backgroundImage from "../Images/backgroundImage.png";
import userImage from "../Images/young-bearded-man-with-striped-shirt.jpg";

export default RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onLogon = () => {
    // console.log("login:>>", `${login}`);
    // console.log("email>>", `${email}`);
    // console.log("password>>", `${password}`);
     navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={{ width: 375, height: 812 }}
      >
        <View style={styles.body}>
          <View style={styles.flexbox}>
            <Image source={userImage} style={styles.userImage} />
          </View>
          <Text style={[styles.title, { marginTop: 92, marginBottom: 32 }]}>
            Реєстрація
          </Text>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={[styles.textInput, { textAlign: "left" }]}
                  placeholder="Логін"
                  value={login}
                  onChangeText={setLogin}
                />
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
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText} onPress={onLogon}>
                    Зареєстуватися
                  </Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
          <Text
            style={[styles.text, { marginTop: 16 }]}
            onPress={() => navigation.navigate("Login")}
          >
            Вже є акаунт? Увійти
          </Text>
        </View>
      </ImageBackground>
      <Text style={styles.title}>Реєстрація</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FFFFFF",
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
  flexbox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userImage: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    resizeMode: "contain",
    borderRadius: 16,
  },
});
