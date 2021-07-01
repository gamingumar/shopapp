/*
 * File: Product.tsx
 * Project: https://github.com/gamingumar/shopapp
 * File Created: Tuesday, 29th June 2021 12:36:53 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 1st July 2021 4:07:39 am
 * -----
 * Copyright 2021 - 2021 WhileGeek, https://umar.tech
 */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ms } from "react-native-size-matters";
import { Image } from "../../Components/Image";
import { Padder } from "../../Components/Padder";
import { Text } from "../../Components/Text";
import { alertCheck } from "../../Lib";
import { RouteKeys } from "../../Navigation/RouteKeys";
import { IProduct } from "../../Services/Interfaces/AppInterface";
import { Colors } from "../../Themes/Colors";

interface IProductItem {
  product: IProduct;
}
export const Product = ({ product }: IProductItem) => {
  const navigation = useNavigation();

  const _navigate = () => {
    navigation.navigate(RouteKeys.ProductDetail, {
      product
    });
  };

  return (
    <TouchableOpacity onPress={_navigate}>
      <View style={[styles.container]}>
        <Image source={{uri: product.img}} style={styles.img} resizeMode="contain" />
        <Text style={styles.titleStyle}>{product.name} ({product.colour})</Text>
        <Padder />
        <Text style={styles.priceStyle}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

Product.defaultProps = {
  title: "Product",
};

const styles = {
  container: {
    minHeight: 150,
    width: 160,
    backgroundColor: Colors.white,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
  },
  img: {
    width: 250,
    height: 250,
    marginTop: 5,
    marginBottom: 10,

  },
  titleStyle: {
    fontSize: ms(12, 0.3),
    paddingVertical: 10
  },
  priceStyle: {
    fontSize: ms(16, 0.3),
    paddingBottom: 10
  },
};
