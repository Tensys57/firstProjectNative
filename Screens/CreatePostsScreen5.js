import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

import cameraIcon from "../Images/camera_alt-black.png";
import union from "../Images/Union.png";

const CombiTextInput = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={[styles.inputContainer, { marginBottom: 32 }]}>
      <Feather name="map-pin" size={24} color="#BDBDBD" style={styles.icon} />
      <TextInput
        style={[styles.textInput]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const CreatePostsScreen = () => {
  const [titlePhoto, setTitlePhoto] = useState("0");
  const [locality, setlocality] = useState("0");
  const [photoUri, setPhotoUri] = useState(null);
  const [location, setLocation] = useState("0");

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handlePublish = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      navigation.navigate("PostsScreen", {
        postData: {
          titlePhoto: titlePhoto,
          locality: locality,
          photoUri: photoUri,
          coords: coords,
        },
      });
    } catch (error) {
      console.error("Error while fetching location:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <AntDesign name="arrowleft" size={24} color={"#212121"} />
        </View>
        <View style={styles.HeaderTitle}>
          <Text style={[styles.subTitle, { marginTop: 11, marginBottom: 11 }]}>
            Створити публікацію
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.cameraBox}>
          <Camera style={styles.camera} type={type} ref={setCameraRef}>
            <View style={styles.photoView}>
              <TouchableOpacity
                style={styles.button1}
                onPress={async () => {
                  if (cameraRef) {
                    const { uri } = await cameraRef.takePictureAsync();
                    await MediaLibrary.createAssetAsync(uri);
                    setPhotoUri(uri);
                  }
                }}
              >
                <View style={styles.takePhotoInner}>
                  <AntDesign name="camera" size={24} color={"#212121"} />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
          {photoUri && (
            <Image
              source={{ uri: photoUri }}
              style={{ height: 200, width: 342 }}
            />
          )}
          <Text style={[styles.text, { marginBottom: 32 }]}>
            Завантажте фото
          </Text>
        </View>
        <View>
          <TextInput
            style={[
              styles.textInput,
              {
                borderBottomWidth: 1,
                borderBottomColor: "#BDBDBD",
                marginBottom: 16,
              },
            ]}
            placeholder="Назва..."
            value={titlePhoto}
            onChangeText={setTitlePhoto}
          />
          <CombiTextInput
            placeholder={"Місцевість..."}
            value={locality}
            onChangeText={setlocality}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 128 }]}
            onPress={handlePublish}
          >
            <Text style={styles.buttonText}>Опубліковати</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.buttonUnion}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="trash-2"
                  size={24}
                  color="#BDBDBD"
                  // style={styles.icon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
    width: 375,
  },
  body: {
    height: "100%",
    width: 375,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  cameraBox: { height: 240, width: 342 },
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  header: {
    height: 88,
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    marginBottom: 32,
    paddingLeft: 16,
  },
  HeaderTitle: {
    width: 175,
    height: 44,
    marginLeft: 58,
  },
  subTitle: {
    color: "#212121",
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 500,
    fontFamily: "Roboto",
  },

  button1: { alignSelf: "center" },

  takePhotoInner: {
    height: 60,
    width: 60,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 50,
    fontFamily: "Roboto",
    fontSize: 16,
  },
  button: {
    height: 51,
    backgroundColor: "#F6F6F6",
    padding: 16,
    borderRadius: 30,
    marginTop: 27,
  },
  buttonText: {
    color: "#BDBDBD",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  buttonUnion: {
    height: 40,
    width: 70,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: "#2023a0",
    fontSize: 16,
    fontWeight: "normal",
  },

  cameraIcon: {
    width: 24,
    height: 24,
  },
});

export default CreatePostsScreen;
