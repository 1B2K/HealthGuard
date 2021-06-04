import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "../../config/scaling";

class ContentItem extends Component {
  render = () => {
    const { key, name, vaccineName, date } = this.props;
    return (
      <View key={key}>
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.type}> {vaccineName}</Text>
          <Text style={styles.date}> {date}</Text>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    marginTop: verticalScale(10),
  },
  date: {
    fontFamily: "notoSans-regular",
    fontSize: verticalScale(12),
    marginLeft: scale(15),
    textAlign: "right",
  },
  textContainer: {
    marginLeft: scale(15),
    marginTop: verticalScale(15),
  },
  type: {
    fontFamily: "notoSans-regular",
    fontSize: verticalScale(12),
    marginLeft: scale(25),
    textAlign: "center",
  },
  name: {
    fontFamily: "notoSans-regular",
    fontSize: verticalScale(12),
    fontWeight: "bold",
    textAlign: "left",
  },
});

export default ContentItem;
