import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image
        style={styles.placeImage}
        source={props.placeImage}
        resizeMode="contain"
      />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    margin: 8,
    height: 30,
    width: 30
  }
});

export default ListItem;
