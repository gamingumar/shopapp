/*
 * File: CartScreen.tsx
 * Project: https://github.com/gamingumar/shopapp
 * File Created: Tuesday, 29th June 2021 2:18:45 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Tuesday, 29th June 2021 2:19:36 am
 * -----
 * Copyright 2021 - 2021 WhileGeek, https://umar.tech
 */
import React from 'react';
import {View} from 'react-native';
import {Text} from '../../Components/Text';
import { SafeContainer } from '../../Components/SafeContainer';
import { Colors } from '../../Themes/Colors';

export const CartScreen = () => {
  return (
    <SafeContainer style={styles.container}>
      <Text style={styles.titleStyle}>CartScreen</Text>
    </SafeContainer>
  );
};

CartScreen.defaultProps = {
  title: "CartScreen"
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center'
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  }
};
