import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import TermsConditionScreen from "../screens/TermsConditionScreen";
import ChildrenScreen from "../screens/ChildrenScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import AddChildScreen from "../screens/AddChildScreen";
import NotificationScreen from "../screens/NotificationScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

import colors from "../config/colors";
import { moderateScale } from "../config/scaling";

const Stack = createStackNavigator();

const MyCustomHeaderBackImage = () => (
  <Image
    source={require("../../assets/icons/back.png")}
    style={{
      width: moderateScale(10),
      height: moderateScale(15),
      tintColor: colors.blue,
    }}
  />
);

const TermsConditionStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.backgroundGrey,
        },
        headerTintColor: colors.blue,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackImage: MyCustomHeaderBackImage,
      }}
    >
      <Stack.Screen
        name="TermsConditionScreen"
        component={TermsConditionScreen}
      />
      <Stack.Screen name="ChildrenScreen" component={ChildrenScreen} />
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
      <Stack.Screen
        name="AddChildScreen"
        component={AddChildScreen}
        options={{ title: "ADD PROFILE" }}
      />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default TermsConditionStack;
