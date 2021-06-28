/*
 * File: ProductsListScreen.tsx
 * Project: https://github.com/gamingumar/shopapp
 * File Created: Tuesday, 29th June 2021 12:33:49 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Tuesday, 29th June 2021 2:57:27 am
 * -----
 * Copyright 2021 - 2021 WhileGeek, https://umar.tech
 */
import React, { useState } from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {Text} from '../../Components/Text';
import { SafeContainer } from '../../Components/SafeContainer';
import { Colors } from '../../Themes/Colors';
import { Product } from './Product';

const products = [
  {
    name: "Item 1"
  },
  {
    name: "Item 2",
  },
  {
    name: "Item 3",
  },
  {
    name: "Item 4",
  },
  {
    name: "Item 5",
  },
]

export const ProductsListScreen = () => {
  const [loading, setLoading] = useState(false)

  const _loadData = () => {

  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={() => <Product />}
        numColumns={2}
        refreshing={loading}
        onRefresh={_loadData}
        keyExtractor={(item) => item.name}
      />
    </View>
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
