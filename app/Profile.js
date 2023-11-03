import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import mainContext from "../context/MainContext";
const Profile = () => {
  const [mainuser, setMainuser] = useState();
  const router = useRouter();
  const deletedToken = async () => {
    await AsyncStorage.removeItem("token");
    router.push("Homescreen");
  };
  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem("user");
      setMainuser(JSON.parse(user));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>firstName : {mainuser?.firstName}</Text>
      <Text style={styles.text}>lastName : {mainuser?.lastName}</Text>
      <Text style={styles.text}>Email: {mainuser?.email}</Text>
      <Pressable
        style={{
          backgroundColor: "red",
          padding: 20,
          borderRadius: 10,
          marginTop: 10,
        }}
        onPress={() => deletedToken()}
      >
        <Text style={{ textAlign: "center", color: "white" }}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "center",
  },
  text: {
    margin: 10,
    fontSize: 15,
  },
});

export default Profile;
