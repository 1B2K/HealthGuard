import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  SafeAreaView,
} from "react-native";

import { AuthContext } from "../../config/context";
import colors from "../../config/colors";

const SignUpScreen = () => {
  const { signUp } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello This is Add account screen</Text>
      <Button title="Add account" onPress={() => signUp()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
});
export default SignUpScreen;
