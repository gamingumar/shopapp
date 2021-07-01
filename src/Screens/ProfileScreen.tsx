/*
 * File: ProfileScreen.tsx
 * Project: https://github.com/gamingumar/react-directory-structure
 * File Created: Monday, 30th December 2019 11:38:07 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 1st July 2021 5:59:27 am
 * -----
 * Copyright 2019 - 2021 WhileGeek, https://umar.tech
 */

import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import {
  Title,
  Headline,
  Avatar,
  Subheading,
  Paragraph,
} from "react-native-paper";
import { Colors } from "../Themes/Colors";
import { SafeContainer } from "../Components/SafeContainer";
import { AppContext } from "../Services/AppContext";
import { vs } from "react-native-size-matters";
import { Padder } from "../Components/Padder";

export const ProfileScreen: React.FC = () => {
  const { user, logout } = useContext(AppContext);

  return (
    <SafeContainer style={styles.container}>
      <Avatar.Image source={{ uri: user.photo }} size={vs(120)} />
      <Title>{user.fullName}</Title>
      <Subheading>{user.email}</Subheading>
      <Paragraph>{user.username}</Paragraph>
      <Paragraph>{user.phone}</Paragraph>
      <Padder height={20} />
      <Headline onPress={() => logout()} style={{ color: "red" }}>
        Logout
      </Headline>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,

    alignItems: "center",
    justifyContent: "center",
  },
});
