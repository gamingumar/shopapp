/*
 * File: ProductsListScreen.tsx
 * Project: https://github.com/gamingumar/shopapp
 * File Created: Tuesday, 29th June 2021 12:33:49 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Tuesday, 29th June 2021 12:36:28 am
 * -----
 * Copyright 2021 - 2021 WhileGeek, https://umar.tech
 */


import React from 'react';
import {View} from 'react-native';
import {Text} from '../../Components/Text';
import { SafeContainer } from '../../Components/SafeContainer';
import { Colors } from '../../Themes/Colors';

export const ProductsListScreen = () => {
  return (
    <SafeContainer style={styles.container}>
      <Text style={styles.titleStyle}>ProductsListScreen</Text>
    </SafeContainer>
  );
};


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
