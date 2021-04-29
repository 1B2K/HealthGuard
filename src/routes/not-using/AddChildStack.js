import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ScheduleScreen from "../../screens/ScheduleScreen";
import EditProfileScreen from "../../screens/EditProfileScreen";
import AddChildScreen from "../../screens/AddChildScreen";

const Stack = createStackNavigator();

const AddChildStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AddChildScreen" component={AddChildScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default AddChildStack;
