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

export default class Admin extends Component {
  state = {
    Name: "",
    Description: "",
    Image: "",
    Price: ""
  };

  Send = () => {
    f.database()
      .ref("products")
      .push(this.state)
      .then(() => {
        alert("product added successfully");
        this.props.navigation.navigate("Home");
      })
      .catch(e => {
        alert("some error occoured");
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
            style={{
              width: "80%",
              padding: 20,
              borderRadius: 10,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "gainsboro",
              fontSize: 22
            }}
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="Name"
            onChangeText={val => this.setState({ Name: val })}
            value={this.state.Name}
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
            placeholder="Description"
            onChangeText={val => this.setState({ Description: val })}
            value={this.state.Description}
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
            placeholder="Link"
            onChangeText={val => this.setState({ Image: val })}
            value={this.state.Image}
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
            placeholder="Price"
            onChangeText={val => this.setState({ Price: val })}
            value={this.state.Price}
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
            onPress={() => this.Send()}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
