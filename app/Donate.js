import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { height, width } from "../utils/Color";

const Donate = () => {
  const [text, setText] = useState("do you want to join");
  return (
    <View>
      <Image
        source={require("../assets/blood.jpg")}
        style={{ width: width, height: height / 2 }}
      />
      <View style={{ marginTop: 20, padding: 10 }}>
        <Text style={{ textAlign: "justify" }}>
          Blood donation is of paramount importance for several compelling
          reasons. Firstly, it is a lifesaving act that provides an
          indispensable resource for medical emergencies, surgeries, and
          treatments. Patients suffering from various conditions such as
          accidents, cancer, anemia, and surgeries often require blood
          transfusions to stay alive and recover. Without an adequate and
          readily available blood supply, countless lives would be at risk.
          Secondly, donating blood not only helps patients in need but also
          promotes the well-being of the donors themselves. Regular blood
          donation can help reduce the risk of certain health problems, such as
          the accumulation of excess iron in the body, which is associated with
          various health issues. It can also provide donors with a sense of
          fulfillment and satisfaction in knowing they've contributed to the
          greater good of society.
        </Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "red",
          padding: 10,
          margin: 20,
          borderRadius: 10,
        }}
        onPress={() => setText("you have successfully joined")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Donate;

const styles = StyleSheet.create({});
