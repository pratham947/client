import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size={"large"} color={"black"} />
      <Text style={{ fontSize: 14, marginTop: 10 }}>Loading...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
