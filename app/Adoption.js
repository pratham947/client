import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import adoptiondata from "../utils/adoptiondata";
import { Link } from "expo-router";

const Adoption = () => {
  return (
    <ScrollView>
      <Text></Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {adoptiondata.map((data) => (
          <View
            style={{
              width: "45%",
              marginTop: 20,
              borderColor: "#add8e6",
              borderWidth: 0.3,
              marginHorizontal: 8,
              borderRadius: 10,
              overflow: "hidden",
            }}
            key={data.id}
          >
            <View>
              <Image
                source={require("../assets/childphoto.jpg")}
                style={{
                  width: "100%",
                  height: 200,
                  resizeMode: "cover",
                }}
              />
            </View>
            <Link
              href={{ pathname: "/Singlechild", params: { id: data.id } }}
              style={{ padding: 10 }}
            >
              <View>
                <Text style={{ marginVertical: 10 }}>Name: Aisha</Text>
                <Text>Age : 2 years</Text>
              </View>
            </Link>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Adoption;

const styles = StyleSheet.create({});
