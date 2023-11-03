import { Text, View, Image, Dimensions } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import Loader from "../components/Loader";
import { getImage } from "../utils/getImageData";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import mainContext from "../context/MainContext";

const Homescreen = () => {
  const [image, setImage] = useState();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const {setToken} = useContext(mainContext)
  const checkToken = async () => {
    const check = await AsyncStorage.getItem("token");
    if(check){
      setToken(check);
      return ;
    }
  };
  useEffect(() => {
    (async () => {
      const url = await getImage();
      setImage(url);
      await checkToken();
    })();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {image ? (
        <View>
          <Image
            source={{ uri: image }}
            width={width}
            height={height / 1.7}
            borderBottomLeftRadius={50}
          />
          <Link
            href={"/Account"}
            style={{
              marginTop: "10%",
              backgroundColor: "#2563eb",
              width: "90%",
              alignSelf: "center",
              padding: 20,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <Text style={{ color: "white" }}>JOIN NOW</Text>
          </Link>
          <Text style={{ padding: 20, textAlign: "justify" }}>
            In a world filled with challenges, it's essential that we extend a
            helping hand to those in need. Whether through acts of kindness,
            charitable donations, or volunteering our time, we can make a
            meaningful difference in the lives of the less fortunate. Every
            small gesture of compassion and support, no matter how humble, has
            the power to bring hope and comfort to those who are struggling
          </Text>
        </View>
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default Homescreen;
