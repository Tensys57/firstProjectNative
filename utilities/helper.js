// Tab Navigator ScreenOptions

// const TabNavigator = () => (
// <Tab.Navigator
// screenOptions={({ route }) => ({
//   tabBarIcon: ({ focused, color, size }) => {
//     let iconName;

//     if (route.name === "PostsScreen") {
//       iconName = focused ? "grid-outline" : "grid-outline";
//     } else if (route.name === "CreatePosts") {
//       iconName = focused ? "grid-outline" : "grid-outline";
//     } else if (route.name === "Profile") {
//       iconName = focused ? "user" : "user";
//     }
//       return <Ionicons name={iconName} size={size} color={color} />;
//     },
//   })
// }
// tabBarOptions={
//   {
//     activeTintColor: "tomato",
//     inactiveTintColor: "gray",
//   }
// <Ionicons name="grid-outline" size={24} color="black" />
//  <AntDesign name="user" size={24} color="black" />
// }
// >
//   <Tab.Screen
//     name="PostsScreen"
//     component={PostsScreen}
//     options={{
//       headerShown: false,
//       tabBarShowLabel: false,
//     }}
//   />
//   <Tab.Screen
//     name="CreatePosts"
//     component={CreatePostsScreen}
//     options={{ headerShown: false }}
//   />
//   <Tab.Screen
//     name=" Profile"
//     component={ProfileScreen}
//     options={{ headerShown: false }}
//   />
// </Tab.Navigator>
// );





// App.js v.20/09/2023

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import "react-native-gesture-handler";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import HomeScreen from "./Screens/HomeScreen";
// import LoginScreen from "./Screens/LoginScreen";
// import RegistrationScreen from "./Screens/RegistrationScreen";
// import PostsScreen from "./Screens/PostsScreen";

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet } from "react-native";
// import { useFonts } from "expo-font";

// const MainStack = createStackNavigator();


// export default function App() {
//   const [fontsLoaded] = useFonts({
//     "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
//   });
//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <NavigationContainer>
//       <StatusBar style="auto" />
//       <MainStack.Navigator initialRouteName="Login">
//       <MainStack.Screen
//         name="PostsScreen"
//         component={PostsScreen}
//         options={{ headerShown: false }}
//       />
//         <MainStack.Screen
//           name="Register"
//           component={RegistrationScreen}
//           options={{ headerShown: false }}
//         />
//         <MainStack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <MainStack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ headerShown: false }}
//         />
//       </MainStack.Navigator>
//     </NavigationContainer>
//   );
// }



// PostsScreen v.19.09.2023

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import CreatePostsScreen from "./CreatePostsScreen";
// import ProfileScreen from "./ProfileScreen";

import userImage from "../Images/young-bearded-man-with-striped-shirt.jpg";
// import union from "../Images/Union.png";
// import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

// const Tab = createBottomTabNavigator();

// const StyledButtons = () => {
//   const navigation = useNavigation();

//   const navigateToHome = () => {
//     navigation.navigate("Home");
//   };

//   const navigateToCreatePosts = () => {
//     navigation.navigate("CreatePosts");
//   };
//   const navigateToProfile = () => {
//     navigation.navigate("Profile");
//   };

  // return (
  //   <View style={styles.tabBar}>
  //     <Ionicons
  //       name="grid-outline"
  //       size={24}
  //       color="black"
  //       onPress={navigateToHome}
  //     />
  //     <TouchableOpacity
  //       style={styles.buttonUnion}
  //       onPress={navigateToCreatePosts}
  //     >
  //       <View
  //         style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
  //       >
  //         <Image style={{ width: 13, height: 13 }} source={union} />
  //       </View>
  //     </TouchableOpacity>
  //     <AntDesign
  //       name="user"
  //       size={24}
  //       color="black"
  //       onPress={navigateToProfile}
  //     />
  //   </View>
  // );
// };

// const PostsTabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen
//       name="PostsScreen"
//       component={PostsScreen}
//       options={{ headerShown: false }}
//     />
//     <Tab.Screen
//       name="CreatePosts"
//       component={CreatePostsScreen}
//       options={{ headerShown: false }}
//     />
//     <Tab.Screen
//       name="Profile"
//       component={ProfileScreen}
//       options={{ headerShown: false }}
//     />
//   </Tab.Navigator>
// );

export default PostsScreen = () => (
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
    {/* <View style={styles.tabBar}>
      <Ionicons
        name="grid-outline"
        size={24}
        color="black"
        onPress={navigateToHome}
      />
      <TouchableOpacity style={styles.buttonUnion}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image style={{ width: 13, height: 13 }} source={union} />
        </View>
      </TouchableOpacity>
      <AntDesign name="user" size={24} color="black" />
    </View> */}
    <View>
      <StyledButtons />
      <PostsTabNavigator />
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
  // tabBar: {
  //   height: 83,
  //   width: 375,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-around",
  //   borderTopColor: "#212121",
  //   borderTopWidth: 1,
  //   borderTopStyle: "solid",
  // },
  // buttonUnion: {
  //   height: 40,
  //   width: 70,
  //   backgroundColor: "#FF6C00",
  //   borderRadius: 20,
  // },
});


// PostsScreen v.20.09.2023

// import React from "react";
// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import CreatePostsScreen from "./CreatePostsScreen";
// import ProfileScreen from "./ProfileScreen";
// import HomeScreen from "./HomeScreen";

// import userImage from "../Images/young-bearded-man-with-striped-shirt.jpg";

// import { useNavigation } from "@react-navigation/native";
// import union from "../Images/Union.png";
// import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

// const Tab = createBottomTabNavigator();

// // const PostsTabNavigator = () => (
// //   <Tab.Navigator>
// //     <Tab.Screen
// //       name="PostsScreen"
// //       component={PostsScreen}
// //       options={{ headerShown: false }}
// //     />
// //     <Tab.Screen
// //       name="CreatePostsScreen"
// //       component={CreatePostsScreen}
// //       options={{ headerShown: false }}
// //     />
// //     <Tab.Screen
// //       name="ProfileScreen"
// //       component={ProfileScreen}
// //       options={{ headerShown: false }}
// //     />
// //   </Tab.Navigator>
// // );

// const PostsScreenContent = () => {
//   const navigation = useNavigation();
//   const navigateToHome = () => {
//     navigation.navigate("PostsScreen");
//   };

//   const navigateToCreatePosts = () => {
//     navigation.navigate("CreatePostsScreen");
//   };

//   const navigateToProfile = () => {
//     navigation.navigate("Profile");
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.HeaderTitle}>
//           <Text style={[styles.subTitle, { marginTop: 11, marginBottom: 11 }]}>
//             Публікації
//           </Text>
//         </View>
//         <View>
//           <MaterialIcons name="logout" size={24} color="black" />
//         </View>
//       </View>
//       <View style={styles.userCard}>
//         <Image source={userImage} style={styles.userImage} />
//         <View style={styles.flexbox}>
//           <Text style={styles.userName}>Rubi Jackson</Text>
//           <Text style={styles.userEmail}>email@example.com</Text>
//         </View>
//       </View>
//       <View style={styles.tabBar}>
//         <Ionicons
//           name="grid-outline"
//           size={24}
//           color="black"
//           onPress={navigateToHome}
//         />
//         <TouchableOpacity
//           style={styles.buttonUnion}
//           onPress={navigateToCreatePosts}
//         >
//           <View
//             style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
//           >
//             <Image style={{ width: 13, height: 13 }} source={union} />
//           </View>
//         </TouchableOpacity>
//         <AntDesign
//           name="user"
//           size={24}
//           color="black"
//           onPress={navigateToProfile}
//         />
//       </View>
//     </View>
//   );
// };

// export default PostsScreen = () => {
//   return (
//     // const PostsTabNavigator = () => (
//     // <Tab.Navigator>
//     //   <Tab.Screen
//     //     name="Home"
//     //     component={HomeScreen}
//     //     options={{ headerShown: false }}
//     //   />
//     //   <Tab.Screen
//     //     name="CreatePostsScreen"
//     //     component={CreatePostsScreen}
//     //     options={{ headerShown: false }}
//     //   />
//     //   <Tab.Screen
//     //     name="ProfileScreen"
//     //     component={ProfileScreen}
//     //     options={{ headerShown: false }}
//     //   />
//     // </Tab.Navigator>

//     <View style={styles.container}>
//       <PostsScreenContent />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   header: {
//     height: 88,
//     width: 375,
//     flexDirection: "row",
//     alignItems: "center",
//     borderBottomColor: "#212121",
//     borderBottomWidth: 1,
//     borderBottomStyle: "solid",
//     marginBottom: 32,
//   },
//   HeaderTitle: {
//     width: 175,
//     height: 44,
//     marginLeft: 100,
//     marginRight: 60,
//   },
//   subTitle: {
//     color: "#212121",
//     textAlign: "center",
//     fontSize: 17,
//     lineHeight: 22,
//     fontWeight: 500,
//     fontFamily: "Roboto",
//   },
//   userCard: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "left",
//     alignItems: "left",
//   },
//   userImage: {
//     width: 60,
//     height: 60,
//     marginLeft: 16,
//     marginRight: 8,
//     borderRadius: 16,
//   },
//   userName: {
//     color: "#212121",
//     textAlign: "left",
//     fontSize: 13,
//     lineHeight: 15.23,
//     fontWeight: "700",
//     fontFamily: "Roboto",
//   },
//   userEmail: {
//     color: "#212121",
//     textAlign: "left",
//     fontSize: 11,
//     lineHeight: 12.89,
//     fontWeight: "400",
//     fontFamily: "Roboto",
//   },
//   flexbox: {
//     height: 60,
//     flex: 2,
//     justifyContent: "center",
//   },
//   tabBar: {
//     height: 83,
//     width: 375,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//     borderTopColor: "#212121",
//     borderTopWidth: 1,
//     borderTopStyle: "solid",
//   },
//   buttonUnion: {
//     height: 40,
//     width: 70,
//     backgroundColor: "#FF6C00",
//     borderRadius: 20,
//   },
// });
