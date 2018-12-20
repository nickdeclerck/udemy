import React, { Component } from "react";
import DefaultInput from "../UI/DefaultInput/DefaultInput";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({ placeName: val });
  };

  render() {
    return (
      <DefaultInput
        placeholder="An awesome place"
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
      />
    );
  }
}

export default PlaceInput;
