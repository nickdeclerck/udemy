import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import validate from "../../utility/validation";

class AuthScreen extends Component {
  state = {
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: { isEmail: true },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: { minLength: 6 },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: { equalTo: "password" },
        touched: false
      }
    }
  };

  loginHandler = () => {
    startMainTabs();
  };

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      };
    });
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
            onChangeTextHandler={val => this.updateInputState("password", val)}
            valid={this.state.controls.email.valid}
            touched={this.state.controls.email.touched}
          />
          <DefaultInput
            style={styles.input}
            placeholder="Password"
            onChangeTextHandler={val => this.updateInputState("password", val)}
            valid={this.state.controls.password.valid}
            touched={this.state.controls.password.touched}
          />
          <DefaultInput
            style={styles.input}
            placeholder="Confirm password"
            onChangeTextHandler={val =>
              this.updateInputState("confirmPassword", val)
            }
            valid={this.state.controls.confirmPassword.valid}
            touched={this.state.controls.confirmPassword.touched}
          />
        </View>
        <ButtonWithBackground
          color="#29aaf4"
          onPress={this.loginHandler}
          disable={
            !this.state.controls.confirmPassword.valid ||
            !this.state.controls.email.valid ||
            !this.state.controls.password.valid
          }
        >
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
