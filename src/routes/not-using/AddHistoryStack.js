import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ChildrenScreen from "../../screens/ChildrenScreen";
import colors from "../../config/colors";
import AddHistoryScreen from "../../screens/not-using/AddHistoryScreen";

const Stack = createStackNavigator();

const AddHistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.lightBlue,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="AddHistoryScreen"
        component={AddHistoryScreen}
        options={{ title: "Add History" }}
      />
      <Stack.Screen name="ChildrenScreen" component={ChildrenScreen} />
    </Stack.Navigator>
  );
};

export default AddHistoryStack;
