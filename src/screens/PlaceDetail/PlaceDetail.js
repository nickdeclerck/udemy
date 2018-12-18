import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { deletePlace } from "../../store/actions/index";

class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.placeImage}
            source={this.props.selectedPlace.image}
          />
          <Text style={styles.placeName}>
            {this.props.selectedPlace.placeName}
          </Text>
        </View>
        <View>
          <Button
            title="Delete"
            color="red"
            onPress={this.placeDeletedHandler}
          />
        </View>
      </View>
    );
  }
}

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

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetail);
