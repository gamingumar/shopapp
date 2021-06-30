/*
 * File: ProductsListScreen.tsx
 * Project: https://github.com/gamingumar/shopapp
 * File Created: Tuesday, 29th June 2021 12:33:49 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 1st July 2021 2:38:18 am
 * -----
 * Copyright 2021 - 2021 WhileGeek, https://umar.tech
 */
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Text } from "../../Components/Text";
import { SafeContainer } from "../../Components/SafeContainer";
import { Colors } from "../../Themes/Colors";
import { Product } from "./Product";
import { ProductsApi } from "../../Services/API/ProductsApi";
import { handleApiError, handleCatchError } from "../../Lib/ErrorHandling";
import { log } from "../../Lib";
import { IProduct } from "../../Services/Interfaces/AppInterface";

export const ProductsListScreen = () => {
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    _loadData()
  }, [])

  const _loadData = async () => {
    setLoading(true);

    const response = await ProductsApi.GetProducts();

    try {
      if (response.hasError) {
        handleApiError(response, "get-products");
      } else {
        // ? Get Products success
        log("Get Products SUCCESS: ", response);

        setProducts(response.data);
      }
    } catch (e) {
      handleCatchError(e);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <Product product={item} />}
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
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
};
