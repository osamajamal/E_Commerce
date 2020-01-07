import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Icon } from "native-base";
import Logo from "../assets/logo.png";
import * as f from "firebase";

export default class Home extends Component {
  state = {
    isLoading: true,
    data: []
  };

  componentDidMount() {
    f.database()
      .ref("products")
      .once("value")
      .then(data => {
        console.log(data);
      });
  }

  render() {
    return (
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1
        }}
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
            <Icon name="menu" />
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

        {/* Body */}

        <ScrollView style={{ width: "100%", flex: 1 }}>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={{ width: "90%", marginTop: 20 }}>
              <Image
                source={{
                  uri:
                    "https://cdn.pixabay.com/photo/2016/11/29/09/41/bag-1868758_960_720.jpg"
                }}
                style={{ width: "100%", height: 300, borderRadius: 10 }}
              />
              <View style={{ width: "100%", marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Leather Bag
                </Text>
                <Text style={{ marginTop: 10 }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed
                </Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "orange",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                  >
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
