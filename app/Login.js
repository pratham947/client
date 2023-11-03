import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Color, height, width } from "../utils/Color";
import { makeStyle } from "../utils/classes";
import { Link } from "expo-router";

const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={require("../assets/logo.png")} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.font}>Login</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
          <View style={styles.createAccount}>
            <Text
              style={[
                makeStyle.textColor,
                makeStyle.textCenter,
              ]}
            >
              Login
            </Text>
          </View>
        </View>
        <Text style={{ textAlign: "center", padding: 10 }}>
          New member{" "}
          <Link href={"/Account"} style={{ color: Color }}>
            create Account
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  font: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 30,
  },
  createAccount: {
    backgroundColor: Color,
    padding: 20,
    borderRadius: 10,
  },
  padding: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: height / 2,
    resizeMode: "cover",
  },
});
