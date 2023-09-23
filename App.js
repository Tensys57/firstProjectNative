import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Styles,
} from "react-native";

import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import union from "./Images/Union.png";

const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();

const CustomTabBarButton = ({ onPress }) => (
  <TouchableOpacity style={styles.buttonUnion} onPress={onPress}>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image style={{ width: 13, height: 13 }} source={union} />
    </View>
  </TouchableOpacity>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  // const navigation = useNavigation();
  // const handleCustomTabPress = () => {
  // navigation.navigate("CreatePosts");
  // console.log("navigation :>> ", "CreatePosts");
  // };

  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let customButton = null;

          if (route.name === "PostsScreen") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "CreatePosts") {
            customButton = (
              <CustomTabBarButton onPress={handleCustomTabPress} />
            );
          } else if (route.name === "Profile") {
            customButton = <AntDesign name="user" size={size} color={color} />;
          }

          return (
            customButton || (
              <Ionicons name={iconName} size={size} color={color} />
            )
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

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
    alignItems: "center",
  },

  buttonUnion: {
    height: 40,
    width: 70,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});
