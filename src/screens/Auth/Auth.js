import React, { Component } from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Please Log In</Text>
        <ButtonWithBackground color="#29aaf4" onPress={() => alert("Switch")}>
          Switch to login
        </ButtonWithBackground>
        <View style={styles.inputContainer}>
          <DefaultInput
            style={styles.input}
            placeholder="Your e-mail address"
          />
          <DefaultInput style={styles.input} placeholder="Password" />
          <DefaultInput style={styles.input} placeholder="Confirm password" />
        </View>
        <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
          Submit
        </ButtonWithBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: { width: "80%" },
  input: { backgroundColor: "#eee", borderColor: "#f00" }
});

export default AuthScreen;
