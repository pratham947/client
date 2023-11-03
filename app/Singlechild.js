import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import adoptiondata from "../utils/adoptiondata";
import { Color, height, width } from "../utils/Color";
import { makeStyle } from "../utils/classes";

const Singlechild = () => {
  const [status, setStatus] = useState("schedule a meeting");
  const { id } = useLocalSearchParams();
  const child = adoptiondata[id - 1];
  const meeting = () => {
    setStatus("please wait...");
    setTimeout(() => {
      setStatus("metting is schudeled");
    }, 3000);
  };
  return (
    <View>
      <View>
        <Image
          source={require("../assets/childphoto.jpg")}
          style={{ width: width, height: height / 2 }}
        />
      </View>
      <View>
        <Text style={styles.sameFont}>Name : {child.name} </Text>
        <Text style={styles.sameFont}>Age : {child.age}</Text>
        <Text style={[styles.sameFont, { lineHeight: 20 }]}>
          Desc : {child.description}
        </Text>
        <Text style={styles.sameFont}>Father name : {child?.father_name}</Text>
        <Text style={styles.sameFont}>Mother name : {child?.mother_name}</Text>
      </View>
      <Pressable style={styles.meeting} onPress={meeting}>
        <Text style={[makeStyle.textCenter, makeStyle.textColor]}>
          {status}
        </Text>
      </Pressable>
    </View>
  );
};

export default Singlechild;

const styles = StyleSheet.create({
  sameFont: {
    padding: 10,
    fontSize: 15,
  },
  meeting: {
    backgroundColor: Color,
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
});
