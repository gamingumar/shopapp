/*
 * File: ReactotronConfig.ts
 * Project: https://github.com/gamingumar/react-directory-structure
 * File Created: Saturday, 14th December 2019 1:11:43 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Monday, 28th June 2021 9:31:59 pm
 * -----
 * Copyright 2019 - 2021 WhileGeek, https://gamingumar.com
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import {NativeModules} from "react-native";
import Reactotron, {
  asyncStorage, 
  trackGlobalErrors,
  openInEditor
} from "reactotron-react-native";
import { log } from "../Lib";

Reactotron.clear();


const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];


Reactotron.configure({
  host, // controls connection & communication settings
}) 
  .use(
    trackGlobalErrors({
      veto: frame => frame.fileName.indexOf("/node_modules/react-native/") >= 0
    })
  )
  .use(asyncStorage())
  .use(openInEditor())
  .connect(); // let's connect!



Reactotron.useReactNative({
  asyncStorage: {
    ignore: ['secret']
  },
  networking: {
    ignoreUrls: /symbolicate/
  },
  editor: true,
  errors: { veto: stackFrame => false },
  overlay: true
})


// console.tron = Reactotron;
Reactotron.logImportant("React native async data: ");
// reactotron.send('asyncStorage.values.change', { preview: `${method}(${arg})`, value: valuesToSend } );

AsyncStorage.getAllKeys(async (err, keys) => {
  await AsyncStorage.multiGet(keys, (error, stores) => {
    log('ASYNC STORAGE KEYS 🔑:', keys)
    stores.map((result, i, store) => {
      let d = store[i][1];
      try {
        d = JSON.parse(store[i][1]);
      } catch (e) { }
      Reactotron.logImportant(`[AsyncStorage]: ${[store[i][0]]}`, d);
      // Reactotron.log({ [store[i][0]]: d });
      return true;
    });
  });
});