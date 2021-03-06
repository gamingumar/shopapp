/*
 * File: DropDownAlertHolder.tsx
 * Project: https://github.com/gamingumar/react-directory-structure
 * File Created: Monday, 16th December 2019 11:11:16 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Monday, 28th June 2021 9:02:10 pm
 * -----
 * Copyright 2019 - 2021 WhileGeek, https://umar.tech
 */
import DropdownAlert from 'react-native-dropdownalert';

// import DropdownAlert from 'react-native-dropdownalert';

export type DropdownAlertType =
  | 'info'
  | 'warn'
  | 'error'
  | 'custom'
  | 'success';

interface IDropdownAlert {
  alertWithType(
    type: DropdownAlertType,
    title: string,
    message: string,
    payload?: object,
    interval?: number,
  ): void;
}

export class DropDownAlertHolder {
  static dropDown: IDropdownAlert;
  static setDropDown(dropDown: IDropdownAlert) {
    this.dropDown = dropDown;
  }
  static getDropDown() {
    return this.dropDown;
  }
}
