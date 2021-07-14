/*
 * File: index.ts
 * Project: https://github.com/gamingumar/react-directory-structure
 * File Created: Thursday, 27th February 2020 1:52:40 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Wednesday, 14th July 2021 4:51:47 pm
 * -----
 * Copyright 2019 - 2021 WhileGeek, https://umar.tech
 */

import Constants from "expo-constants";
const { manifest } = Constants;

import { version, apiLink } from "../../package.json";

let hostIp =
  typeof manifest?.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(`:`).shift()
    : "";

hostIp = hostIp !== "" ? "http://" + hostIp : ""; // doing this to connect to localhost server


const API_URL = "https://my-json-server.typicode.com/benirvingplt/";

export let Config = {

  API_URL, // !API,
  imageCache: "force-cache",

  SPLASH_DELAY: 0,

  IS_PRODUCTION: true,

  LOGOUT_STATUS_LIST: [401, 403], //? LOGOUT if any of these status codes occur

};
