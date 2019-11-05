/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing
} from "react-native";
import LottieView from "lottie-react-native";
import Image from "react-native-scalable-image";
import { createStackNavigator } from "react-navigation";
import MainMenu from "./src/screens/MainMenu";
import { tsMethodSignature } from "@babel/types";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }
  state = {
    progress: new Animated.Value(0),
    AnimFinish: false
  };
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear
    }).start(() => {
      this.setState({ AnimFinish: true });
    });
  }
  welcomeAnim = () => {
    return (
      <View style={{ justifyContent: "flex-start" }}>
        <Image
          style={{ marginBottom: 100 }}
          width={Dimensions.get("window").width / 2} // height will be calculated automatically
          source={require("./src/img/logo.png")}
        />
        <LottieView
          source={require("./src/animations/WelcomeAnim.json")}
          progress={this.state.progress}
        />
      </View>
    );
  };

  render() {
    return this.state.AnimFinish ? (
      <RootStack />
    ) : (
      <View style={styles.container}>{this.welcomeAnim()}</View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    MAINMENURouter: MainMenu
  },
  {
    // headerMode: "none",
    initialRouteName: "MAINMENURouter"
    // initialRouteParams: { showAlert: true },
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
