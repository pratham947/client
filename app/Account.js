import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  ToastAndroid,
  TouchableHighlight,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { Color, height } from "../utils/Color";
import { makeStyle } from "../utils/classes";
import { Link } from "expo-router";
import { isEmail } from "../utils/isEmail";
import mainContext from "../context/MainContext";
import Loader from "../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { token } from "../utils/token";
const Account = () => {
  const { createAccount, authloading, setAuthloading, user, setUser } =
    useContext(mainContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [token, setToken] = useState(null);
  const router = useRouter();
  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
  const createNewAccount = async () => {
    if (
      firstName.length < 2 ||
      lastName.length < 2 ||
      password.length < 8 ||
      phoneNumber.length < 10
    ) {
      showToast("All fields are required");
      return;
    }
    if (!isEmail(email)) {
      showToast("email is not valid");
      return;
    }
    const data = await createAccount({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });
    setAuthloading(false);
    if (data.success == false) showToast(data.message);
    else {
      await AsyncStorage.setItem("token", JSON.stringify(data.token));
      await AsyncStorage.setItem("user", JSON.stringify(data.newUser));
      setUser(data.newUser);
      router.push("Main");
    }
  };

  useEffect(() => {
    async () => {
      const usertoken = await AsyncStorage.getItem("token");
      setToken(() => (usertoken ? usertoken : null));
    };
  }, []);
  if (token) return router.push("Main");
  return (
    <ScrollView style={{ flex: 1 }}>
      {authloading ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <View>
            <Image
              source={require("../assets/logo.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.padding}>
            <Text style={styles.font}>Account</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setFirstName(text)}
              value={firstName}
              placeholder="First Name"
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setLastName(text)}
              value={lastName}
              placeholder="Last Name"
            />
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
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPhoneNumber(text)}
              value={phoneNumber}
              placeholder="Phone Number"
              keyboardType="numeric"
            />
            <TouchableHighlight
              style={styles.createAccount}
              onPress={() => createNewAccount()}
            >
              <Text style={[makeStyle.textColor, makeStyle.textCenter]}>
                Create Account
              </Text>
            </TouchableHighlight>
          </View>
          <Text style={{ textAlign: "center", padding: 20, marginBottom: 10 }}>
            <Link href={"/Login"} style={{ color: Color }}>
              Already have a account Login
            </Link>
          </Text>
        </View>
      )}
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
