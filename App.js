import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import GetStarted from "./src/screens/GetStarted";
import Main from "./src/screens/Main";
import Interested from "./src/screens/Interested";
import Upload from "./src/screens/Upload";
import RegisterSuccesfull from "./src/screens/RegisterSuccesfull";
import Slide from "./src/screens/Slide";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Getstarted" component={GetStarted} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Interested" component={Interested} />
        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen name="RegisterSuccess" component={RegisterSuccesfull} />
        <Stack.Screen name="Slide" component={Slide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
