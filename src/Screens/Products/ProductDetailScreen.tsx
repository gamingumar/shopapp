/*
 * File: ProductDetailScreen.tsx
 * Project: https://github.com/gamingumar/shopapp
 * File Created: Tuesday, 29th June 2021 2:24:17 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 1st July 2021 5:56:15 am
 * -----
 * Copyright 2021 - 2021 WhileGeek, https://umar.tech
 */
import React from "react";
import { ScrollView, View } from "react-native";
import { Text } from "../../Components/Text";
import { SafeContainer } from "../../Components/SafeContainer";
import { Colors } from "../../Themes/Colors";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ICartItem, IProduct } from "../../Services/Interfaces/AppInterface";
import { Button } from "react-native-paper";
import { alertCheck, log, _cloneDeep } from "../../Lib";
import { Image } from "../../Components/Image";
import { ms, s, vs } from "react-native-size-matters";
import { useContext } from "react";
import { AppContext } from "../../Services/AppContext";
import { DropDownAlertHolder } from "../../Components/DropDownAlertHolder";

type ParamList = {
  ProductDetailScreen: {
    product: IProduct;
  };
};

export const ProductDetailScreen = () => {
  const route = useRoute<RouteProp<ParamList, "ProductDetailScreen">>();
  const navigation = useNavigation();

  const notify = DropDownAlertHolder.getDropDown();

  const { updateCart, cart } = useContext(AppContext);

  const product = route.params.product;

  const _addToCart = () => {
    let newCart: ICartItem[] = _cloneDeep(cart);

    // check if exists already update quantity

    let found = newCart.findIndex((c) => c.product.id === product.id);

    if (found > -1) {
      // product already exists in cart

      newCart[found].quantity += 1;
    } else {
      newCart.push({ product, quantity: 1 });
    }
    updateCart(newCart);

    notify.alertWithType(
      "success",
      "Added to Basket",
      product.name + " added to your basket successfully."
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.img }} style={styles.img} />
      <Text style={styles.titleStyle}>
        {product.name} (${product.price})
      </Text>
      <Text style={styles.descStyle}>{product.colour}</Text>

      <Button onPress={_addToCart}>Add to Basket</Button>
    </ScrollView>
  );
};

ProductDetailScreen.defaultProps = {
  title: "ProductDetailScreen",
};

const styles = {
  container: {
    backgroundColor: Colors.white,
    alignItems: "center" as "center",
    padding: 20,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: ms(20, 0.3),
    padding: 10,
  },
  descStyle: {
    fontSize: ms(14, 0.3),
  },
  img: {
    width: s(320),
    height: vs(350),
  },
};
