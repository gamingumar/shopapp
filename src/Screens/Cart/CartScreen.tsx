/*
 * File: CartScreen.tsx
 * Project: https://github.com/gamingumar/shopapp
 * File Created: Tuesday, 29th June 2021 2:18:45 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 8th July 2021 10:02:00 pm
 * -----
 * Copyright 2021 - 2021 WhileGeek, https://umar.tech
 */
import React, { useContext } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "../../Components/Text";
import { Colors } from "../../Themes/Colors";
import { AppContext } from "../../Services/AppContext";
import { AppStyles } from "../../Themes/AppStyles";
import { Image } from "../../Components/Image";
import { parseAmount, _cloneDeep } from "../../Lib";
import { ms } from "react-native-size-matters";
import { IconButton } from "react-native-paper";

export const CartScreen = () => {
  const { updateCart, cart } = useContext(AppContext);

  const _updateQty = (id: number, add = true) => {
    let newCart = _cloneDeep(cart);

    const foundIndex = cart.findIndex((c) => c.product.id === id);

    if (foundIndex > -1) {
      const item = newCart[foundIndex];
      // found
      if (add) {
        newCart[foundIndex].quantity += 1;
      } else {
        newCart[foundIndex].quantity -= 1;

        if (newCart[foundIndex].quantity < 1) {
          newCart.splice(foundIndex, 1);
        }
      }
    }
    updateCart(newCart);
  };

  let total = 0;

  cart.map((c) => {
    total += c.product.price * c.quantity;
  });

  return (
    <ScrollView style={styles.container}>
      {cart.map((c) => (
        <View style={styles.itemRow} key={c.product.id}>
          <View>
            <Image
              source={{ uri: c.product.img }}
              style={{ width: 50, height: 100 }}
            />
          </View>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.titleStyle}>{c.product.name}</Text>

            <View style={AppStyles.row}>
              <View>
                <Text style={styles.priceStyle}>Quantity: {c.quantity}</Text>
                <Text style={styles.priceStyle}>
                  Price: ${c.quantity * c.product.price}
                </Text>
              </View>
              <View style={AppStyles.centralize}>
                <IconButton
                  icon="minus"
                  onPress={() => _updateQty(c.product.id, false)}
                />
                <IconButton
                  icon="plus"
                  onPress={() => _updateQty(c.product.id)}
                />
              </View>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.total}>
        <Text>Total: ${parseAmount(total)}</Text>
      </View>
    </ScrollView>
  );
};

CartScreen.defaultProps = {
  title: "CartScreen",
};

const styles = {
  container: {
    backgroundColor: Colors.white,
    padding: 10,
  },
  itemRow: {
    ...AppStyles.row,
    padding: 5,
    backgroundColor: "white",
    margin: 10,
  },
  titleStyle: {
    fontSize: 20,
    flexShrink: 1,
  },
  priceStyle: {
    fontSize: ms(16, 0.3),
    color: "blue",
  },
  total: {
    ...AppStyles.centralize,
    padding: 20
  }
};
