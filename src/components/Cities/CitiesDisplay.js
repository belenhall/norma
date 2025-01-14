import React from "react";
import { Component } from "react";
/* import { Fragment } from "react"; */
import ImageButton from "./ImageButton";
import { View, Text, FlatList, Item, ScrollView } from "react-native";

class CitiesDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "fail"
    };
  }

  render() {
    const data = this.props.data;
    let ciudades;
    console.log(data);
    if (data != undefined) {
      ciudades = data;
      ciudades = ciudades.map(item => (
        <ImageButton width={200} height={200} ciudad={item} />
      ));
    } else {
      ciudades = "Loading...";
    }

    return <View>
        <ScrollView>{ciudades}</ScrollView>
      </View>;
  }
}

export default CitiesDisplay;
