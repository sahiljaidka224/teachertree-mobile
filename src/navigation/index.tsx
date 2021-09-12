import * as LocalAuthentication from "expo-local-authentication";

import { OtpScreen, SignInScreen, SignUpScreen } from "../screens";

import { BiometricType } from "../common/enums";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStackParamList } from "../types";
import { createStackNavigator } from "@react-navigation/stack";
import { useStateApi } from "../state/Context";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { dispatch } = useStateApi();

  React.useEffect(() => {
    (async () => {
      if (await LocalAuthentication.hasHardwareAsync()) {
        LocalAuthentication.supportedAuthenticationTypesAsync().then((c) => {
          if (c.length > 0) {
            dispatch({ type: "updateBiometric", payload: BiometricType[c[0]] });
          }
        });
      }
    })();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name="Root"
        component={SignInScreen}
        options={{ title: "Log In" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "Sign Up" }}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={{ title: "Verification" }}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false, headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
}
