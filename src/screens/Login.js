import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import Logo from "../assets/logo.png";

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          width: "100%"
        }}
      >
        <Image source={Logo} style={{ width: 200, height: 80 }} />

        <View style={{ width: "100%", marginTop: 50, alignItems: "center" }}>
          <TextInput
            style={{
              width: "80%",
              padding: 20,
              borderRadius: 10,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "gainsboro",
              fontSize: 22
            }}
            placeholderTextColor="gray"
            placeholder="Username"
          />
          <TextInput
            style={{
              width: "80%",
              padding: 20,
              borderRadius: 10,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "gainsboro",
              marginTop: 20,
              fontSize: 22
            }}
            placeholderTextColor="gray"
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={{
              width: 120,
              height: 50,
              backgroundColor: "#FA9501",
              borderRadius: 10,
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
