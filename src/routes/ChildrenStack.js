import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TermsConditionScreen from "../screens/TermsConditionScreen";
import ChildrenScreen from "../screens/ChildrenScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import AddChildScreen from "../screens/AddChildScreen";
import NotificationScreen from "../screens/NotificationScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

import colors from "../config/colors";

const Stack = createStackNavigator();

const ChildrenStack = () => {
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
      }}
    >
      <Stack.Screen name="ChildrenScreen" component={ChildrenScreen} />
      <Stack.Screen
        name="TermsConditionScreen"
        component={TermsConditionScreen}
      />
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
      <Stack.Screen
        name="AddChildScreen"
        component={AddChildScreen}
        options={{ title: "Add Profile" }}
      />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ChildrenStack;
