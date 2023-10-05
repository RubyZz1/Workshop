import React, { useContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../provider/AuthProvider";

// Main
import Home from "../screens/Home";
import MesRDV from "../screens/MesRDV";
import Profil from "../screens/Profil";
import Annonces from "../screens/Annonces";

// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";
import Loading from "../screens/utils/Loading";


const firebaseConfig = {
  apiKey: "AIzaSyBhu6YmGqvF7EtmKf-a54BPwNaeY8MvLi4",
  authDomain: "acme-native-887f6.firebaseapp.com",
  projectId: "acme-native-887f6",
  storageBucket: "acme-native-887f6.appspot.com",
  messagingSenderId: "808789592708",
  appId: "1:808789592708:web:591505ee9fa8ed3d53d0d1",
  measurementId: "G-4VPLNKGPC5"
};
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const AuthStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="MesRDV" component={MesRDV} />
      <MainStack.Screen name="Profil" component={Profil} />
      <MainStack.Screen name="Annonces" component={Annonces} />
    </MainStack.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};