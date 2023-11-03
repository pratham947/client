import { StyleSheet, View } from "react-native";
import React from "react";
import Homescreen from "./Homescreen.js";
import Main from "./Main.js";

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <Homescreen />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
