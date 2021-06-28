/*
 * File: Product.tsx
 * Project: https://github.com/gamingumar/shopapp
 * File Created: Tuesday, 29th June 2021 12:36:53 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Tuesday, 29th June 2021 2:50:09 am
 * -----
 * Copyright 2021 - 2021 WhileGeek, https://umar.tech
 */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../Components/Text";
import { alertCheck } from "../../Lib";
import { RouteKeys } from "../../Navigation/RouteKeys";
import { Colors } from "../../Themes/Colors";

export const Product = () => {
  const navigation = useNavigation();

  const _navigate = () => {
    navigation.navigate(RouteKeys.ProductDetail);
  };

  return (
    <TouchableOpacity onPress={_navigate}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Product</Text>
      </View>
    </TouchableOpacity>
  );
};

Product.defaultProps = {
  title: "Product",
};

const styles = {
  container: {
    height: 150,
    width: 140,
    backgroundColor: Colors.secondaryTint,
    padding: 10,
    margin: 10,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
};
