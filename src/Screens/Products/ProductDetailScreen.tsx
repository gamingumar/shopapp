/*
 * File: ProductDetailScreen.tsx
 * Project: https://github.com/gamingumar/shopapp
 * File Created: Tuesday, 29th June 2021 2:24:17 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Tuesday, 29th June 2021 2:39:14 am
 * -----
 * Copyright 2021 - 2021 WhileGeek, https://umar.tech
 */
import React from 'react';
import {View} from 'react-native';
import {Text} from '../../Components/Text';
import { SafeContainer } from '../../Components/SafeContainer';
import { Colors } from '../../Themes/Colors';

export const ProductDetailScreen = () => {
  return (
    <SafeContainer style={styles.container}>
      <Text style={styles.titleStyle}>ProductDetailScreen</Text>
    </SafeContainer>
  );
};

ProductDetailScreen.defaultProps = {
  title: "ProductDetailScreen"
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
