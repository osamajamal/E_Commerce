import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Container, Header, Tab, Tabs, TabHeading, Icon } from "native-base";
import Home from "./Home";
import Login from "./Login";

export default class TabComponent extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <Tabs tabBarPosition="bottom">
          <Tab
            heading={
              <View style={{ flexDirection: "column" }}>
                <Icon name="camera" />
                <Text>Camera</Text>
              </View>
            }
          >
            <Home />
          </Tab>

          <Tab
            heading={
              <View style={{ flexDirection: "column" }}>
                <Icon name="camera" />
                <Text>Camera</Text>
              </View>
            }
          >
            <Login />
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Text>No Icon</Text>
              </TabHeading>
            }
          >
            <View style={{ flex: 1, backgroundColor: "red" }}>
              <Text>Camera Page2</Text>
            </View>
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Icon name="apps" />
              </TabHeading>
            }
          >
            <View style={{ flex: 1 }}>
              <Text>Camera Page3</Text>
            </View>
          </Tab>
        </Tabs>
      </SafeAreaView>
    );
  }
}
