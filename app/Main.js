import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { Link } from "expo-router";
import { Color, height } from "../utils/Color";
import { makeStyle } from "../utils/classes";

const Main = () => {
  const arr = [
    {
      content: "Adoption",
      path: "/Adoption",
      id: 1,
    },
    {
      content: "Donate-blood",
      path: "/Donate",
      id: 2,
    },
    {
      content: "Dontation",
      path: "/Donation",
      id: 3,
    },
    {
      content: "Profile",
      path: "/Profile",
      id: 4,
    },
  ];
  return (
    <ScrollView>
      <View>
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>
      <View style={{ padding: 10, marginTop: 20 }}>
        <Text style={{ fontSize: 15 }}>Choose your way to help...</Text>
      </View>
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        {arr.map(({ content, path, id }) => (
          <View style={styles.btnContainer} key={id}>
            <Link href={path} style={makeStyle.textCenter}>
              <Text style={makeStyle.textColor}>{content}</Text>
            </Link>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Color,
    padding: 20,
    marginBottom: 30,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: height / 2,
    resizeMode: "cover",
  },
});
