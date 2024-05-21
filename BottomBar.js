import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you've installed Expo vector icons
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Octicons name="home" size={30} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <AntDesign name="calendar" size={30} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
      <MaterialCommunityIcons name="account" size={30} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: "#00ab4b",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  iconButton: {
    padding: 16, // Adjust padding as needed
  },
});

export default BottomBar;
