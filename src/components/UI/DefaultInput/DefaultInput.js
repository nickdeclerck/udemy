import React from "react";
import { StyleSheet, TextInput } from "react-native";

const defaultInput = props => (
  <TextInput
    style={[styles.input, props.style]}
    underlineColorAndroid="transparent"
    {...props}
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    margin: 8
  }
});

export default defaultInput;
