import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ScheduleScreen from "../../screens/ScheduleScreen";
import EditProfileScreen from "../../screens/EditProfileScreen";

const Stack = createStackNavigator();

const ScheduleStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ScheduleStack;
