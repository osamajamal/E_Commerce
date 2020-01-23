import React, { Component } from "react";
import { Text, View } from "react-native";
import Splashscreen from "./src/screens/Splashscreen";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import "./Config";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import Admin from "./src/screens/Admin";
import Sample from "./src/screens/ViewAlignment";
import Tabs from "./src/screens/Tabs";

const stack = createStackNavigator(
  {
    Splash: {
      screen: Splashscreen
    },
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    },
    Details: {
      screen: Details
    },
    Home: {
      screen: Home
    },
    Admin: {
      screen: Admin
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Admin"
  }
);

const MainNav = createAppContainer(stack);

export default class App extends Component {
  render() {
    return <Tabs />;
  }
}
