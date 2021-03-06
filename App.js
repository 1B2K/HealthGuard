import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import {i18nInit} from './src/config/localization';

import { AuthContext } from "./src/config/context";
import LoadingScreen from "./src/screens/LoadingScreen";
import ChildrenStack from "./src/routes/ChildrenStack";
import TermsConditionStack from "./src/routes/TermsConditionStack";
import { useFonts } from "expo-font";

export default function App() {
  //localization init
  i18nInit()

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  let [fontsLoaded] = useFonts({
    "fredokaOne-regular": require("./assets/fonts/FredokaOne-Regular.ttf"),
    "notoSans-italic": require("./assets/fonts/NotoSans-Italic.ttf"),
    "notoSans-regular": require("./assets/fonts/NotoSans-Regular.ttf"),
    "notoSans-bold": require("./assets/fonts/NotoSans-Bold.ttf"),
    "notoSans-boldItalic": require("./assets/fonts/NotoSans-BoldItalic.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    if (isLoading) {
      return <LoadingScreen />;
    }
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken ? <ChildrenStack /> : <TermsConditionStack />}
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
}
