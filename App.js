import React, { Component } from "react";
import { Text, View } from "react-native";
import Splashscreen from "./src/screens/Splashscreen";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import "./Config";

export default class App extends Component {
  render() {
    return <Signup />;
  }
}
