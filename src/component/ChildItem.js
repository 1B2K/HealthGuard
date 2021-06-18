import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import { ltext } from "../config/localization";

const ChildItem = (props) => {
  const { action, avatar, name, birth, latest } = props;
  return (
    <View key={props.id}>
      <TouchableOpacity onPress={action}>
        <View style={styles.container}>
          <Image source={{ uri: avatar }} />
          <Image
            style={styles.image}
            source={require("../../assets/icons/logo.png")}
          />
          <View style={styles.body}>
            <Text numberOfLines={1} style={styles.name}>
              {name}
            </Text>
            <View style={styles.lineContainer}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/calendar.png")}
              />
              <Text style={styles.birth}>
                {ltext("children_birth")}: {birth}
              </Text>
            </View>
            <View style={styles.lineContainer}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/injection.png")}
              />
              <Text style={styles.birth}>
                {ltext("children_latest")}: {latest}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChildItem;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(98),
    backgroundColor: colors.white,
    flexDirection: "row",
    marginBottom: scale(10),
  },
  lineContainer: {
    flexDirection: "row",
  },
  name: {
    fontFamily: "notoSans-bold",
    fontSize: verticalScale(19),
    lineHeight: verticalScale(19),
    margin: scale(5),
    color: colors.black,
  },
  birth: {
    fontFamily: "roboto-regular",
    fontSize: verticalScale(12),
    color: colors.black,
    lineHeight: verticalScale(16.5),
    margin: scale(5),
  },
  image: {
    resizeMode: "center",
    height: verticalScale(66),
    width: verticalScale(66),
    marginLeft: scale(30),
    marginRight: scale(30),
    marginTop: verticalScale((98 - 66) / 2),
    borderRadius: scale(400 / 2),
  },
  body: {
    justifyContent: "center",
  },
  icon: {
    marginTop: verticalScale(8),
    marginLeft: scale(4),
    height: verticalScale(10),
    width: scale(10),
    resizeMode: "stretch",
  },
});
