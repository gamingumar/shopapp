/*
 * File: index.ts
 * Project: https://github.com/gamingumar/react-directory-structure
 * File Created: Saturday, 14th December 2019 1:23:17 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 1st July 2021 5:56:59 am
 * -----
 * Copyright 2019 - 2021 WhileGeek, https://gamingumar.com
 */

import isEqual from 'lodash/isEqual'
import sortBy from 'lodash/sortBy'
import cloneDeep from 'lodash/cloneDeep'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Dimensions, Platform, Alert } from "react-native";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { TStorageKeys } from '../Services/Interfaces/AppInterface';
import { Tron } from './tron';
import { Config } from '../Config';
// import reactotron from "reactotron-react-native";
// import DeviceInfo from 'react-native-device-info';

export const is_android = Platform.OS === "android";
export const is_ios = Platform.OS === "ios";
export const is_web = Platform.OS === "web";


/**
 * GU-Lib - Compare 2 Arrays
 * @param {Array} array1 - First Array
 * @param {Array} array2 - Second Array
 */
export function compareArrays(array1 = [], array2 = []) {
  return isEqual(sortBy(array1), sortBy(array2));
}

/**
 * GU Lib - Deeply clone object or any data
 * @param data - Anything
 */
export function _cloneDeep<T>(data: T): T {
  return cloneDeep(data);
}


const { height, width } = Dimensions.get("window");

/**
 * ? NOT RECOMMENDED use from useScreenOrientation hook
 */
export const SCREEN_WIDTH = width; //! NOT RECOMMENDED use from useScreenOrientation hook
export const SCREEN_HEIGHT = height; // ! NOT RECOMMENDED use from useScreenOrientation hook

export const getWidth = () => {
  const { width } = Dimensions.get("window");
  return width;
}

export const getHeight = () => {
  const { height } = Dimensions.get("window");
  return height;
}

/**
 * GU-Lib - Check if is string
 *
 * @param {*} data
 */
export function isString(data: any) {
  return typeof data === "string";
}

/**
 * GU-Lib - Check if valid string and not empty
 * 
 * @param str - String
 */
export function isEmpty(str: any) {
  return (!str || 0 === str.length);
}

/**
 * GU-Lib - Console Log
 *
 * @param  {...any} shitPile
 *
 */
export const log = (...shitPile: any) => {
  if (__DEV__) {
    Tron.log(...shitPile);
    console.log(...shitPile);
  }
};

// if (is_web) {
//   AsyncStorage = require("react-native")
// }


/**
 * GU Lib - Open URL in App or Browser - GU
 * @param {String} url - Web URL to open
 * @param {boolean} [inApp = true] - Open in App or Browser
 */
export function openUrl(url = "", inApp = true) {
  if (!url.startsWith("http")) {
    url = `https://${url}`;
  }

  log("opening url: ", url);

  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        log("Can't handle url: " + url);
      } else {
        if (inApp) {
          return WebBrowser.openBrowserAsync(url);
        }
        return Linking.openURL(url);
      }
    })
    .catch(err => console.error("An error occurred", err));
}

/**
 * GU Lib - Open Email in default mail app
 * @param email - Email
 */
export function openEmail(email: string) {
  try {
    Linking.openURL(`mailto:${email}`)
  } catch (e) { log('unable to open') }
}

/**
 * GU Lib - Validate Email
 * @param email Email
 */
export function isValidEmail(email: string) {
  return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
}

/**
 * GU Lib - Open Phone number in dialer
 * @param phone - Phone Number
 */
export function openPhone(phone: string) {
  try {
    Linking.openURL(`tel:${phone}`)
  } catch (e) { log('unable to open') }
}


/**
 * GU Lib - Show Alert
 * @param alertTitle - Alert Title
 * @param alertText - Alert Text
 */
export function showAlert(alertTitle: string = '', alertText: string = '') {
  if (Platform.OS === 'web') {
    alert(alertTitle)
  } else {
    Alert.alert(alertTitle, alertText)
  }
}


/**
 * GU Lib - A dummy alert function
 * 
 * @param msg - Message
 */
export function alertCheck(msg?: string) {
  if (!isString(msg) || !msg) {
    msg = "Hola, Alert Check"
  }

  showAlert(msg)
}



/**
 * GU Lib - Update App AsyncStorage
 * @param TStorageKeys - Data Key
 * @param data - Data Value
 */
export async function storageUpdate(key: TStorageKeys, data: any) {
  log(`UPDATING STORAGE with key ${key}: `, data)
  try {
    return await AsyncStorage.setItem(key, data ? JSON.stringify(data) : '');
  } catch (e) {
    log('Storage update error: ', e.message, e)
  }
}


/**
 * GU Lib - Get AsyncStorage Item
 * @param TStorageKeys - Data Key
 */
export async function storageGet(key: TStorageKeys): Promise<any> {
  return new Promise(async resolve => {
    try {
      AsyncStorage.getItem(key).then((data) => {
        try {
          data = !data ? '' : JSON.parse(data);
        } catch (e) {
          log('async storage error: ', e.message, e)
          data = ""
        }

        return resolve(data);
      }, () => {
        // Couldn't read row 0, col 0 from CursorWindow
        resolve(""); // Force not to break
      });
    } catch (e) {
      log('Storage GET Error: ', e.message, e)
      resolve("")
    }


    //   // log('data got out of storage: ', data);

  });
}

export const storageClear = () => {
  AsyncStorage.clear();
}


/**
 * GU Lib - Get multiple keys from storage
 * @param keys - Keys to get from storage
 */
export async function storageMultiGet(keys: string[]): Promise<any> {
  return new Promise(async resolve => {
    AsyncStorage.multiGet(keys).then((data) => {
      // data = !data ? null : JSON.parse(data);
      log('multi data is: ', keys, Object.values(data))

      try {
        // data = Object.values(Object.values(data));
      } catch (e) {
        log('unable to parse..')
      }

      return resolve(data);
    }, () => {// Couldn't read row 0, col 0 from CursorWindow
      resolve(null); // Force not to break
    });

    // log('data got out of storage: ', data);

  });
}


/**
 * GU - Check if device is Android Emulator (Async)
 */
// export const isAndroidEmulator = async () => Promise.resolve(await DeviceInfo.isEmulator() && is_android);



export const getTimestamp = () => Date.now().toString();

/**
 * Returns concatenated (YEAR MONTH DATE HOURS MINUTES)
 */
export const getMergedDateTime = (date: string | null = null, formatted = false) => {
  const d = !date ? new Date() : new Date(date);

  if (formatted) {
    return d.toLocaleString()
  }

  return d.getFullYear() + (formatted ? "/" : "") + ("0" + (d.getMonth() + 1)).slice(-2) + (formatted ? "/" : "") + ("0" + d.getDate()).slice(-2) + (formatted ? " " : "") + ("0" + d.getHours()).slice(-2) + (formatted ? ":" : "") + ("0" + d.getMinutes()).slice(-2) + (formatted ? " " + d.getTime() : "")
}

export const isValidTimestamp = (timestamp: string | number) => (new Date(timestamp)).getTime() > 0


/**
 * GU Lib - Parse total amount to standard 2 decimal places
 * 
 * @param amount - Amount to Parse
 * @param afterDecimalPlaced - Number of digits after decimal
 */
export const parseAmount = (amount: string | number, afterDecimalPlaced = 2) => {

  // log('======> GOT TO PARSE: ', amount)

  try {
    let newAmount: number | string = Number(amount).toFixed(afterDecimalPlaced);

    return newAmount;

  } catch (e) {
    return amount;
  }
}


/**
 * GU Lib - Get Initials of full name
 * @param name Name
 */
export const getInitialsOfName = (name: string): string => {

  try {
    let initials:any = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || '') + (initials.pop() || '')
    ).toUpperCase();
    return initials.toString();
  } catch (e) {
    return '';
  }

}

// Regular expression for validating phone number
export const PHONE_REG_EXP = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

/**
 * K Formatter (Kay - Format) | 3600 => 3.6k
 * @param num - Number
 * @returns num 
 */
export function kFormatter(num?:string | number) {
  num = num ? +num : 0;
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
}