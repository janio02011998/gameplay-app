import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthRoutes } from "./auth.routes";
import { useAuth } from "hooks/auth";
import { SignIn } from "../screens/Signin";
import { theme } from "global/styles/theme";

export function Routes() {
  const { user } = useAuth();
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      {user.id ? (
        <AuthRoutes />
      ) : (
        <Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: theme.colors.secondary100,
            },
          }}
        >
          <Screen name="SignIn" component={SignIn} />
        </Navigator>
      )}
    </NavigationContainer>
  );
}
