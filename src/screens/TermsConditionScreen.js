import React from "react";
import { StyleSheet, Button, Text, SafeAreaView, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";


import { AuthContext } from "../config/context";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import screenConfig from "../config/screen"

const TermsConditionScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={screenConfig.container}>
      <View style={styles.screenContainer}>

        <Text style={screenConfig.subTitleText}>
          Welcome to
        </Text>
        <Text style={screenConfig.titleText}>
          Health Guard!
        </Text>

        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Terms & Conditions</Text>
          <Text style={styles.cardText}>

            Thank you for using Health Guard! {"\n\n"}
            We're happy you're here. Please read this Terms of Service agreement
            carefully before accessing or using Health Guard. Because it is such an
            important contract between us and our users, we have tried to make it as
            clear as possible.
            {"\n"}
            This App provides information only and does not operate to as a
            diagnosis tool and it does not subtitute for professional medical advice
            and assistance.
            {"\n"}
            You will be provided vaccination recommendation and also you can manage
            your vaccination history through this App. your information such as
            gender and birth date will not be used anywhere except in this app for
            recommending vaccination.
            {"\n"}
            By clicking below, you acknowledge and agree to our use of your personal
            information we collect through the use of this app in the ways described
            in our privacy notice.
            
            {"\n"}
          </Text>
        </View>

        <View style={styles.saveButtonContainer}>
          <TouchableOpacity
            style={screenConfig.buttonContainer}
            onPress={() => navigation.navigate("ChildrenScreen")}
          >
            <Text style={screenConfig.buttonText}>LET'S START</Text>
          </TouchableOpacity>
        </View>

      </View>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: verticalScale(40),
    paddingLeft: moderateScale(24),
    paddingRight: moderateScale(24),
  },
  cardContainer: {
    elevation: 1,
    padding: moderateScale(24),
    marginTop: verticalScale(16),
    marginBottom: verticalScale(16),
    borderRadius: moderateScale(16)
  },
  cardTitle: {
    textAlign: "center",
    fontSize: moderateScale(18),
    fontWeight: "bold",
  },
  cardText: {
    marginTop: verticalScale(16),
    textAlign: "justify",
    fontSize: moderateScale(13),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  }
});

export default TermsConditionScreen;
