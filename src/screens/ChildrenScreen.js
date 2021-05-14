import React from "react";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";

import { AuthContext } from "../config/context";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import screen from "../config/screen";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import AddChildScreen from "./AddChildScreen";

const users = [
  {
    id: 1,
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 2,
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 3,
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
];

const ChildrenScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        {users.map((u) => {
          return (
            <View key={u.id}>
              <View style={styles.container}>
                {/* <Image source={{ uri:u.avatar }} /> */}
                <Image
                  style={styles.image}
                  source={require("../../assets/icons/logo.png")}
                />
                <View style={styles.body}>
                  <Text style={styles.name}>{u.name}</Text>
                  <Text style={styles.birth}>BIRTH: {u.birth}</Text>
                  <Text style={styles.birth}>LATEST: {u.latest}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.foot}>
        <TouchableOpacity onPress={() => navigation.navigate("AddChildScreen")}>
          <Image
            style={styles.addIcon}
            source={require("../../assets/icons/add-profile.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 0.8,
  },
  foot: {
    flex: 0.2,
  },
  container: {
    height: moderateScale(96),
    backgroundColor: colors.white,
    flexDirection: "row",
    marginBottom: scale(10),
  },
  name: {
    fontFamily: "notoSans-regular",
    fontSize: moderateScale(16),
    fontWeight: "bold",
    lineHeight: moderateScale(22),
    margin: scale(5),
  },
  birth: {
    fontFamily: "notoSans-regular",
    fontSize: moderateScale(12),
    color: "#1F263E",
    lineHeight: moderateScale(16.34),
    margin: 5,
  },
  image: {
    flex: 1,
    resizeMode: "center",
    height: moderateScale(70),
    width: moderateScale(70),
    margin: scale(10),
    justifyContent: "space-around",
    borderRadius: 400 / 2,
  },
  body: {
    flex: 2,
    justifyContent: "center",
  },
  smallIcon: {
    flexDirection: "column",
    flex: 1,
  },
  addIcon: {
    alignSelf: "flex-end",
    width: moderateScale(70),
    height: moderateScale(70),
    marginRight: moderateScale(23),
  },
});

export default ChildrenScreen;
