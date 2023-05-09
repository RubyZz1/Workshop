import React, { useContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../provider/AuthProvider";

// Main
import Home from "../screens/Home";

// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";

import Loading from "../screens/utils/Loading";
import Stocks from "../screens/Stocks";
import ProductStock from "../screens/ProductStock";
import Commande from "../screens/Commande";

// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyCnm3H6-zg816j2H5-ZpIS3cXlSpF3XqH4",
  authDomain: "acmenative.firebaseapp.com",
  projectId: "acmenative",
  storageBucket: "acmenative.appspot.com",
  messagingSenderId: "986956371948",
  appId: "1:986956371948:web:5042e65327ce439a05d2c9",
  measurementId: "G-PXLNKHNLNE"
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
      <MainStack.Screen name="Stocks" component={Stocks} />
      <MainStack.Screen name="ProductStock" component={ProductStock} />
      <MainStack.Screen name="Commande" component={Commande} />
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
