import React, { Component } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";

export default class Sample extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <View style={{ flex: 1, width: "100%", backgroundColor: "blue" }}>
          <Text>Your App page</Text>
        </View>
        <View
          style={{ width: "100%", height: 100, backgroundColor: "red" }}
        ></View>
      </SafeAreaView>
    );
  }
}
