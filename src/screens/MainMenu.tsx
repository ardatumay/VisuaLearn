/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Button } from "../components/Button";

type IMainMenuProps = {};

export default class MainMenu extends Component<IMainMenuProps> {
  constructor(props: IMainMenuProps) {
    super(props);
    this.state = {};
  }

  onGuidedLearnPressed = () => {};

  onFreeLearnPressed = () => {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.buttonStyles}
            text="Guided Learn"
            onPress={this.onGuidedLearnPressed}
          />
          <Button
            buttonStyle={styles.buttonStyles}
            text="Free Learn"
            onPress={this.onFreeLearnPressed}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  buttonStyles: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: "rgba(23, 93, 255, 0.3)",
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
  }
});
