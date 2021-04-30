import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

import { AuthContext } from "../config/context";
import { scale, moderateScale, verticalScale } from "../config/scaling";

import colors from "../config/colors";
import screen from "../config/screen";

const AddChildScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const [text, onChangeText] = React.useState("Useless Text");

  let dayArr = [];

  for (let i = 1; i <= 31; i++) {
    dayArr.push({ label: i.toString(), value: i });
  }

  const monArr = [
    { label: "January", value: "January" },
    { label: "Febuary", value: "Febuary" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  let yearArr = [];
  let year = new Date().getFullYear();
  for (let i = year; i >= 1920; i--) {
    yearArr.push({ label: i.toString(), value: i });
  }

  const genderArr = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];
  return (
    <SafeAreaView style={screen.container}>
      <View style={styles.imageContainer}>
        <View style={styles.makeRow}>
          <Text style={styles.fieldText}> Choose the profile image</Text>
          <Text style={styles.star}>*</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../../assets/icon.png")}
          />
        </View>
      </View>

      <View style={styles.nameContainer}>
        <View style={styles.makeRow}>
          <Text style={styles.fieldText}> Name</Text>
          <Text style={styles.star}>*</Text>
        </View>
        <View style={styles.makeRow}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="First Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Last Name"
          />
        </View>
      </View>

      <View style={styles.birthContainer}>
        <View style={styles.makeRow}>
          <Text style={styles.fieldText}>Date of Birth</Text>
          <Text style={styles.star}>*</Text>
        </View>

        <View style={styles.makeRow}>
          <DropDownPicker
            items={monArr}
            containerStyle={styles.monStyle}
            placeholderStyle={styles.makeCenter}
            selectedLabelStyle={{ textAlign: "center" }}
            arrowColor={colors.blue}
            // style={{ borderRadius: moderateScale(30, 2) }}
            //defaultValue="January"
            placeholder="Month"
          />

          <DropDownPicker
            items={dayArr}
            //defaultValue={1}
            containerStyle={styles.monStyle}
            placeholderStyle={styles.makeCenter}
            selectedLabelStyle={{ textAlign: "center" }}
            arrowColor={colors.blue}
            placeholder="Day"
          />
        </View>

        <DropDownPicker
          items={yearArr}
          containerStyle={styles.yearStyle}
          //defaultValue={year}
          placeholderStyle={styles.makeCenter}
          selectedLabelStyle={{ textAlign: "center" }}
          arrowColor={colors.blue}
          placeholder="Year"
        />
      </View>

      <View style={styles.genderPickerStyle}>
        <View style={styles.makeRow}>
          <Text style={styles.fieldText}>Gender</Text>
          <Text style={styles.star}>*</Text>
        </View>
        <DropDownPicker
          items={genderArr}
          containerStyle={styles.yearStyle}
          selectedLabelStyle={{ textAlign: "center" }}
          arrowColor={colors.blue}
          defaultValue="Male"
        />
      </View>

      <View style={styles.additionalContainer}>
        <Text style={styles.fieldText}>Additional Information</Text>
        <View style={styles.additionalText}>
          <TextInput
            onChangeText={onChangeText}
            numberOfLines={4}
            multiline={true}
            placeholder="Type any additional information about the child"
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={screen.buttonContainer}
          onPress={() => navigation.navigate("ChildrenScreen")}
        >
          <Text style={screen.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  additionalContainer: {
    marginTop: moderateScale(15),
    marginLeft: moderateScale(24),
  },
  additionalText: {
    width: scale(305),
    height: verticalScale(115),
    borderRadius: moderateScale(12, 2),
    borderColor: colors.white,
    borderWidth: moderateScale(1),
    textAlign: "center",
    backgroundColor: colors.white,
    marginLeft: scale(5),
  },
  birthContainer: {
    marginTop: moderateScale(15),
    marginLeft: moderateScale(24),
  },
  fieldText: {
    fontFamily: "notoSans-regular",
    fontSize: moderateScale(12),
  },
  icon: {
    width: scale(70),
    height: verticalScale(70),
    borderRadius: moderateScale(100, 2),
  },
  iconContainer: {
    width: scale(80),
    height: verticalScale(80),
    borderRadius: moderateScale(80, 2),
    borderColor: colors.lightBlue,
    borderWidth: moderateScale(3),
    borderStyle: "dashed",
  },
  input: {
    width: scale(150),
    height: verticalScale(35),
    borderRadius: moderateScale(30, 2),
    borderColor: colors.white,
    borderWidth: moderateScale(1),
    textAlign: "center",
    backgroundColor: colors.white,
    marginLeft: scale(5),
  },
  imageContainer: {
    marginTop: moderateScale(88),
    marginLeft: moderateScale(24),
  },
  star: {
    color: colors.red,
    fontSize: moderateScale(12),
    marginLeft: scale(2),
  },
  makeCenter: {
    textAlign: "center",
    color: colors.grey,
  },
  makeRow: {
    flexDirection: "row",
  },
  monStyle: {
    width: scale(150),
    height: verticalScale(35),
    borderRadius: moderateScale(30, 2),
    marginLeft: scale(5),
  },
  nameContainer: {
    marginTop: moderateScale(20),
    marginLeft: moderateScale(24),
  },
  yearStyle: {
    width: scale(305),
    height: verticalScale(35),
    borderRadius: moderateScale(30, 2),
    marginLeft: scale(5),
  },
  genderPickerStyle: {
    marginTop: moderateScale(15),
    marginLeft: moderateScale(24),
  },

  questionStyle: {
    marginTop: verticalScale(40),
    marginBottom: scale(10),
    textAlign: "center",
    alignItems: "center",
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: colors.darkGrey,
  },

  btnContainer: {
    marginTop: moderateScale(20),
  },
});
export default AddChildScreen;
