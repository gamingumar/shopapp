/*
 * File: index.tsx
 * Project: https://github.com/gamingumar/react-directory-structure
 * File Created: Thursday, 27th February 2020 1:52:40 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Wednesday, 14th July 2021 4:46:33 pm
 * -----
 * Copyright 2019 - 2021 WhileGeek, https://umar.tech
 */

import React from 'react';
import { View, ViewStyle } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteKeys } from './RouteKeys';
import { storageGet } from '../Lib';
import { AppContext } from '../Services/AppContext';
import { IUser } from '../Services/Interfaces/AppInterface';
import { setGlobalUser } from '../Services/GlobalService';
import { Config } from '../Config';
import { Colors } from '../Themes/Colors';
import { Loader } from '../Components/Loader';
import { HomeTabs } from './HomeTabs';

const Stack = createStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator
      // headerMode="none"
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name={RouteKeys.Home}
        options={{ gestureEnabled: false, headerShown: false }}
        component={HomeTabs}
      />
    </Stack.Navigator>
  );
}

export function AppNavigation() {
  let navigateTimeout: any = null;

  const [loading, setLoading] = React.useState(true);

  const { user, updateUser } = React.useContext(AppContext);

  React.useEffect(() => {
    _getData();
  }, []);

  /**
   * Restore App Data from AsyncStorage and set loading to false
   */
  const _getData = async () => {
    const userData: IUser = await storageGet("user");

    updateUser(userData); // update data in context and storage

    setGlobalUser(userData);

    navigateTimeout = setTimeout(() => {
      setLoading(false);
    }, Config.SPLASH_DELAY);
  };

  if (loading) {
    return (
      <View style={containerStyle}>
        <Loader inModal={false} loaderColor={Colors.grayBG} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

const containerStyle: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: Colors.white,
};
