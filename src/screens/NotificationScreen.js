import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colorConfig from "../config/colors";
import screenConfig from "../config/screen";

import ContentItem from "../component/Notification/ContentItem";

const NotificationScreen = ({ navigation }) => {
  const notification = [
    {
      status: "TODAY",
      name: "Jasper Matthews",
      vaccineName: "COVID-19 Vaccine",
      date: "April 15th",
      id: "s",
    },
    {
      status: "TODAY",
      name: "Jasper Matthews",
      vaccineName: "COVID-19 Vaccine",
      date: "April 15th",
      id: "2",
    },
    {
      status: "UPCOMING",
      name: "Jasper Matthews",
      vaccineName: "COVID-19 Vaccine",
      date: "April 15th",
      id: "3",
    },
    {
      status: "OVERDUE",
      name: "Jasper Matthews",
      vaccineName: "COVID-19 Vaccine",
      date: "April 15th",
      id: "4",
    },
  ];

  const renderItem = ({ item, index }) => (
    <ContentItem
      key={index}
      status={item.status}
      name={item.name}
      vaccineName={item.vaccineName}
      date={item.date}
    />
  );

  return (
    <SafeAreaView style={screenConfig.container}>
      <View style={styles.container}>
        <FlatList
          data={notification}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorConfig.white,
    width: scale(349),
    marginTop: verticalScale(10),
  },
});

export default NotificationScreen;
