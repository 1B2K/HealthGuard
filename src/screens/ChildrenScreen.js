import React from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ChildItem from "../component/ChildItem";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
// import font from "../config/context";
import { TouchableOpacity } from "react-native-gesture-handler";

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
  {
    id: 4,
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 5,
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 6,
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 7,
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 8,
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
];

const ChildrenScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View>
          {users.map((child) => {
            return (
              <ChildItem
                avatar={child.avatar}
                name={child.name}
                birth={child.birth}
                latest={child.latest}
                action={() => navigation.navigate("ScheduleScreen")}
              />
            );
          })}
        </View>
      </ScrollView>
      <Ionicons
        name="ios-add-circle"
        size={90}
        color={colors.lightBlue}
        style={styles.addIcon}
        onPress={() => navigation.navigate("AddChildScreen")}
      ></Ionicons>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  addIcon: {
    flex: 1,
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 0,
    right: 10,
    color: colors.blue,
  },
});

export default ChildrenScreen;
