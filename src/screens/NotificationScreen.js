import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colorConfig from "../config/colors";
import screenConfig from "../config/screen";

import ContentItem from "../component/Notification/ContentItem";

const NotificationScreen = ({ navigation }) => {
  const notification = [
    {
      status: "TODAY",
      name: "Jasper Matthews1",
      vaccineName: "COVID-19 Vaccine",
      date: "April 15th",
    },
    {
      status: "TODAY",
      name: "Jasper Matthews2",
      vaccineName: "COVID-19 Vaccine2",
      date: "April 15th",
    },
    {
      status: "UPCOMING",
      name: "Jasper Matthews3",
      vaccineName: "COVID-19 Vaccine3",
      date: "April 15th",
    },
    {
      status: "OVERDUE",
      name: "Jasper Matthews4",
      vaccineName: "COVID-19 Vaccine4",
      date: "April 15th",
    },
  ];

  const statusUpcoming = () => {
    return (
      <View>
        {notification
          .filter((item) => item.status === "UPCOMING")
          .map((item, index) => {
            return content(item, index);
          })}
      </View>
    );
  };

  const statusOverdue = () => {
    return (
      <View>
        {notification
          .filter((item) => item.status === "OVERDUE")
          .map((item, index) => {
            return content(item, index);
          })}
      </View>
    );
  };

  const statusToday = () => {
    return (
      <View>
        {notification
          .filter((item) => item.status === "TODAY")
          .map((item, index) => {
            return content(item, index);
          })}
      </View>
    );
  };

  const content = (item, index) => {
    if (item.status === null) {
      return noStatus();
    } else {
      return (
        <ContentItem
          key={index}
          name={item.name}
          vaccineName={item.vaccineName}
          date={item.date}
        />
      );
    }
  };

  const noStatus = () => {
    return (
      <View style={styles.noStatusContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/icons/add.png")}
        />
        <Text style={[styles.noStatus, styles.grey]}>TAKE A REST!</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={screenConfig.container}>
      <View style={styles.textContainer}>
        <View style={styles.container}>
          <Text style={[styles.status, styles.red]}>{"TODAY"}</Text>
          {statusToday()}
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.container}>
          <Text style={[styles.status, styles.blue]}>{"UPCOMING"}</Text>
          {statusUpcoming()}
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.container}>
          <Text style={[styles.status, styles.blue]}>{"OVERDUE"}</Text>
          {statusOverdue()}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: scale(15),
    marginTop: verticalScale(15),
    marginBottom: verticalScale(15),
  },
  textContainer: {
    backgroundColor: colorConfig.white,
    width: scale(349),
    marginTop: verticalScale(10),
  },
  status: {
    fontFamily: "fredokaOne-regular",
    fontSize: verticalScale(12),
  },
  red: {
    color: colorConfig.red,
  },
  blue: {
    color: colorConfig.blue,
  },
  grey: {
    color: colorConfig.grey,
  },
  image: {
    width: scale(50),
    height: verticalScale(50),
  },
  noStatusContainer: {
    flexDirection: "row",
    marginTop: verticalScale(10),
    alignItems: "center",
    alignSelf: "center",
  },
  noStatus: {
    fontFamily: "fredokaOne-regular",
    fontSize: verticalScale(12),
    marginLeft: scale(10),
  },
});

export default NotificationScreen;
