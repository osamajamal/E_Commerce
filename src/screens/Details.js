import React, { Component } from "react";
import { Text, View, SafeAreaView, StatusBar, Image } from "react-native";
import { Icon } from "native-base";
import Logo from "../assets/logo.png";

export default class Details extends Component {
  componentDidMount() {
    console.log(this.props.navigation.getParam("data"));
  }

  render() {
    return (
      <SafeAreaView
        style={{ width: "100%", flex: 1, marginTop: StatusBar.currentHeight }}
      >
        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row"
          }}
        >
          <View
            style={{
              width: "20%",
              height: 50,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Icon
              onPress={() => this.props.navigation.goBack()}
              type="AntDesign"
              name="arrowleft"
            />
          </View>
          <View
            style={{
              width: "80%",
              height: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={Logo}
              style={{ width: 150, height: 40, marginRight: 70 }}
            />
          </View>
        </View>
        <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
          <Image
            source={{
              uri: this.props.navigation.getParam("data").Image
            }}
            style={{ width: "100%", height: 300 }}
          />
          <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
            <View style={{ width: "90%" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {this.props.navigation.getParam("data").Name}
              </Text>
              <Text style={{ marginTop: 10 }}>
                {this.props.navigation.getParam("data").Description}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
                Rs. {this.props.navigation.getParam("data").Price}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
