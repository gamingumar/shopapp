/*
 * File: RouteKeys.ts
 * Project: https://github.com/gamingumar/react-directory-structure
 * File Created: Thursday, 27th February 2020 1:52:40 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Tuesday, 29th June 2021 1:28:36 am
 * -----
 * Copyright 2019 - 2021 WhileGeek, https://umar.tech
 */


/**
 * GU - App Route Keys
 */
export const RouteKeys = {
  Home: "Home",
  ProductsList: "ProductsList",
  ProductDetail: "ProductDetail",
  Basket: "Basket",
}

type TKeys = keyof typeof RouteKeys

export type TRouteType = typeof RouteKeys[TKeys]
