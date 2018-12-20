import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Image preview</Text>
        </View>
        <View style={styles.button}>
          <Button title="Pick image" onPress={() => alert("Pick image")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: { margin: 8 }
});

export default PickImage;
