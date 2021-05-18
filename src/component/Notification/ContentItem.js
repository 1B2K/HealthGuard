import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "../../config/scaling";
import colorConfig from "../../config/colors";

class ContentItem extends Component {
  render = () => {
    const { key, status, name, vaccineName, date } = this.props;
    return (
      <View key={key}>
        <View style={styles.textContainer}>
          {status === "TODAY" ? (
            <Text style={styles.status}>{status}</Text>
          ) : (
            <Text style={styles.status2}>{status}</Text>
          )}

          <View style={styles.contentContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.type}> {vaccineName}</Text>
            <Text style={styles.date}> {date}</Text>
          </View>
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
    fontSize: moderateScale(12),
    marginLeft: scale(15),
  },
  textContainer: {
    marginLeft: scale(15),
    marginTop: verticalScale(15),
  },
  status: {
    fontFamily: "fredokaOne-regular",
    fontSize: moderateScale(12),
    color: colorConfig.red,
  },
  status2: {
    fontFamily: "fredokaOne-regular",
    fontSize: moderateScale(12),
    color: colorConfig.blue,
  },
  type: {
    fontFamily: "notoSans-regular",
    fontSize: moderateScale(12),
    marginLeft: scale(25),
  },
  name: {
    fontFamily: "notoSans-regular",
    fontSize: moderateScale(12),
    fontWeight: "bold",
  },
});

export default ContentItem;
