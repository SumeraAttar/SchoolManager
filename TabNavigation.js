import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const TabNavigation = ({ activeTab, handleTabPress }) => {
  return (
    <View style={styles.tab_container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === "attendance" && styles.activeTab]}
        onPress={() => handleTabPress("attendance")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "attendance" && styles.activeTabText,
          ]}
        >
          Attendance
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === "timetable" && styles.activeTab]}
        onPress={() => handleTabPress("timetable")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "timetable" && styles.activeTabText,
          ]}
        >
          Timetable
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === "events" && styles.activeTab]}
        onPress={() => handleTabPress("events")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "events" && styles.activeTabText,
          ]}
        >
          Events
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tab_container: {
    flexDirection: "row",
    backgroundColor: "#173f6f",
    padding: 20,
    width: "100%", // Add width to make sure tabs don't overflow
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 1,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    marginStart: 20,
  },
  activeTab: {
    borderBottomColor: "#039e4f",
    // Style for active tab
  },
  tabText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  activeTabText: {
    color: "#039e4f", // Text color for active tab
  },
});

export default TabNavigation;
