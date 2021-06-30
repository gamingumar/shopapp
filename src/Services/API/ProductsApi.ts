/*
 * File: ProductsApi.ts
 * Project: https://github.com/gamingumar/shopapp
 * File Created: Thursday, 1st July 2021 2:24:05 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 1st July 2021 2:31:20 am
 * -----
 * Copyright 2021 - 2021 WhileGeek, https://umar.tech
 */

import { log } from "../../Lib";
import { ApiGet } from "../api-client";


/**
 * Get Products
 */
 const GetProducts = async () => {
  const data = await ApiGet(`products/products`);

  log("☁️ GET PRODUCTS RESPONSE: ", data);

  if (data.ok) {
    // storageUpdate("user", data.data)
  }

  return data;
};


export const ProductsApi = {
  GetProducts
};