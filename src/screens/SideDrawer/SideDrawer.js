import React, { Component } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

class SideDrawer extends Component {
  render() {
    return <View style={[styles.container, { width: Dimensions.get("window").width * 0.8 }]}>
        <Text>SideDrawer</Text>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: { paddingTop: 22, backgroundColor: "#fff", flex: 1 }
});

export default SideDrawer;
