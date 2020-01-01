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
import * as f from "firebase";

export default class Signup extends Component {
  state = {
    Name: "",
    Email: "",
    Mobile: "",
    Password: "",
    ConfirmPassword: ""
  };

  Register = () => {
    f.auth()
      .createUserWithEmailAndPassword(this.state.Email, this.state.Password)
      .then(() => {
        f.database()
          .ref("users")
          .push(this.state);
      });
  };

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
            autoCapitalize="none"
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
            placeholder="Name"
            value={this.state.Name}
            onChangeText={val => this.setState({ Name: val })}
          />
          <TextInput
            autoCapitalize="none"
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
            placeholder="Email"
            value={this.state.Email}
            onChangeText={val => this.setState({ Email: val })}
          />
          <TextInput
            autoCapitalize="none"
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
            placeholder="Mobile"
            value={this.state.Mobile}
            onChangeText={val => this.setState({ Mobile: val })}
          />
          <TextInput
            autoCapitalize="none"
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
            value={this.state.Password}
            onChangeText={val => this.setState({ Password: val })}
          />
          <TextInput
            autoCapitalize="none"
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
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={this.state.ConfirmPassword}
            onChangeText={val => this.setState({ ConfirmPassword: val })}
          />
          <TouchableOpacity
            autoCapitalize="none"
            style={{
              width: 120,
              height: 50,
              backgroundColor: "#FA9501",
              borderRadius: 10,
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={() => this.Register()}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Signup</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
