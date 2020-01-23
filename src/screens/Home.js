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
import AnimatedEllipsis from "react-native-animated-ellipsis";

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
        data.forEach(item => {
          this.setState({
            data: [...this.state.data, { ...item.val(), id: item.key }]
          });
        });
      })
      .then(() => {
        this.setState({
          isLoading: false
        });
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
        {this.state.isLoading ? (
          // <View
          //   style={{
          //     width: "100%",
          //     flex: 1,
          //     alignItems: "center",
          //     justifyContent: "center"
          //   }}
          // >
          //   <Text>Loading</Text>
          // </View>
          <View
            style={{
              width: "100%",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <AnimatedEllipsis
              numberOfDots={3}
              minOpacity={0.4}
              animationDelay={200}
              style={{
                color: "orange",
                fontSize: 80,
                width: 30,
                letterSpacing: -15
              }}
            />
          </View>
        ) : (
          <View style={{ width: "100%", flex: 1 }}>
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
                {this.state.data.map(item => (
                  <View key={item.id} style={{ width: "90%", marginTop: 20 }}>
                    {console.log(item.Image)}
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("Details", {
                          data: item
                        })
                      }
                    >
                      <Image
                        source={{
                          uri: item.Image
                        }}
                        style={{ width: "100%", height: 300, borderRadius: 10 }}
                      />
                    </TouchableOpacity>

                    <View style={{ width: "100%", marginTop: 10 }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {item.Name}
                      </Text>
                      <Text style={{ marginTop: 10 }}>{item.Description}</Text>
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
                          style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "bold"
                          }}
                        >
                          Buy Now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
