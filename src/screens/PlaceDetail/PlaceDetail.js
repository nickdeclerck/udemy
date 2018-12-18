import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const PlaceDetail = props => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.placeImage} source={props.selectedPlace.image} />
        <Text style={styles.placeName}>{props.selectedPlace.placeName}</Text>
      </View>
      <View>
        <Button title="Delete" color="red" onPress={props.onItemDeleted} />
        <Button title="Close" onPress={props.onModalClosed} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  placeImage: {
    width: "100%",
    height: 200
  }
});

export default PlaceDetail;
