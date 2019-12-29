import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";
import { JSXElement } from "@babel/types";

interface IButtonProps {
  text: string;
  textStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  onPress: () => void;
}

export function Button(props: IButtonProps): JSX.Element {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
      <Text style={props.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
}
