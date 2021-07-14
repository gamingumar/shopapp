/*
 * File: HomeTabs.tsx
 * Project: https://github.com/gamingumar/shopapp
 * File Created: Tuesday, 29th June 2021 1:23:24 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Wednesday, 14th July 2021 4:49:59 pm
 * -----
 * Copyright 2021 - 2021 WhileGeek, https://umar.tech
 */

import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import {
  createStackNavigator,
} from "@react-navigation/stack";
import { RouteKeys } from "./RouteKeys";

import { Colors } from "../Themes/Colors";
import { ms } from "react-native-size-matters";
import { ProductsListScreen } from "../Screens/Products/ProductsListScreen";
import { CartScreen } from "../Screens/Cart/CartScreen";
import { ProductDetailScreen } from "../Screens/Products/ProductDetailScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export const HomeTabs: React.FC = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: Colors.white,
      }}
      // activeColor={Colors.blueMain}
      shifting={false}
      // inactiveColor={Colors.grayA7}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          const routeName = route.name;
          let IconComponent: any = Ionicons;
          let iconName = "ios-search";
          switch (routeName) {
            case RouteKeys.ProductsList:
              IconComponent = FontAwesome;
              iconName = "search";
              break;
            case RouteKeys.Basket:
              IconComponent = FontAwesome;
              iconName = "trophy";
              break;
            // case RouteKeys.Home:
            //   IconComponent = Entypo;
            //   iconName = "text-document-inverted";
            //   iconName = "v-card";
            //   break;
          }

          return (
            <IconComponent name={iconName} size={ms(20, 0.3)} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name={RouteKeys.ProductsList}
        component={ProductStack}
        options={{ tabBarLabel: "Products" }}
      />
      <Tab.Screen
        name={RouteKeys.Basket}
        component={CartStack}
        options={{ tabBarLabel: "Basket" }}
      />
      {/* <Tab.Screen
        name={RouteKeys.Home}
        component={ProfileScreen}
        options={{ tabBarLabel: "Me" }}
      /> */}
    </Tab.Navigator>
  );
};

const defaultNavOptions = {
  screenOptions: {},
};

export function ProductStack() {
  return (
    <Stack.Navigator {...defaultNavOptions}>
      <Stack.Screen
        name={RouteKeys.ProductsList}
        component={ProductsListScreen}
        options={{
          headerTitle: "Products"
        }}
      />
      <Stack.Screen
        name={RouteKeys.ProductDetail}
        component={ProductDetailScreen}
        options={{
          headerTitle: "Buy Product"
        }}
      />
    </Stack.Navigator>
  );
}

export function CartStack() {
  return (
    <Stack.Navigator {...defaultNavOptions}>
      <Stack.Screen name={RouteKeys.Basket} component={CartScreen} />
    </Stack.Navigator>
  );
}
