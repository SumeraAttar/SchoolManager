import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import TabNavigation from "./TabNavigation";

import Topbar from "./TopBar";
import BottomBar from "./BottomBar";
import Events from "./Events";
import Attendance from "./Attendance"
import { useNavigation } from "@react-navigation/native";
const TimeTable = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("timetable"); // Keep the initial state as 'timetable'
  const [selectedDay, setSelectedDay] = useState("Monday");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const Week = [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
  ];

  const eventsByWeek = {
    Monday: [
      {
        id: "1",
        Subject: "Mathematics",
        teacher: "saniya",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: "2",
        Subject: "Science",
        teacher: "saniya",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: "3",
        Subject: "History",
        teacher: "saniya",
        startTime: "10:30",
        endTime: "11:00",
      },
      {
        id: "4",
        Subject: "English",
        teacher: "saniya",
        startTime: "11:30",
        endTime: "12:00",
      },
      {
        id: "5",
        Subject: "Geography",
        teacher: "saniya",
        startTime: "12:30",
        endTime: "01:00",
      },
      {
        id: "6",
        Subject: "General Knowledge",
        teacher: "saniya",
        startTime: "01:00",
        endTime: "01:30",
      },
    ],
    Tuesday: [
      {
        id: "1",
        Subject: "Mathematics",
        teacher: "saniya",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: "2",
        Subject: "Science",
        teacher: "saniya",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: "3",
        Subject: "History",
        teacher: "saniya",
        startTime: "10:30",
        endTime: "11:00",
      },
      {
        id: "4",
        Subject: "English",
        teacher: "saniya",
        startTime: "11:30",
        endTime: "12:00",
      },
      {
        id: "5",
        Subject: "Geography",
        teacher: "saniya",
        startTime: "12:30",
        endTime: "01:00",
      },
      {
        id: "6",
        Subject: "General Knowledge",
        teacher: "saniya",
        startTime: "01:00",
        endTime: "01:30",
      },
    ],
    Wednesday: [
      {
        id: "1",
        Subject: "Mathematics",
        teacher: "saniya",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: "2",
        Subject: "Science",
        teacher: "saniya",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: "3",
        Subject: "History",
        teacher: "saniya",
        startTime: "10:30",
        endTime: "11:00",
      },
      {
        id: "4",
        Subject: "English",
        teacher: "saniya",
        startTime: "11:30",
        endTime: "12:00",
      },
      {
        id: "5",
        Subject: "Geography",
        teacher: "saniya",
        startTime: "12:30",
        endTime: "01:00",
      },
      {
        id: "6",
        Subject: "General Knowledge",
        teacher: "saniya",
        startTime: "01:00",
        endTime: "01:30",
      },
    ],
    Thursday: [
      {
        id: "1",
        Subject: "Mathematics",
        teacher: "saniya",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: "2",
        Subject: "Science",
        teacher: "saniya",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: "3",
        Subject: "History",
        teacher: "saniya",
        startTime: "10:30",
        endTime: "11:00",
      },
      {
        id: "4",
        Subject: "English",
        teacher: "saniya",
        startTime: "11:30",
        endTime: "12:00",
      },
      {
        id: "5",
        Subject: "Geography",
        teacher: "saniya",
        startTime: "12:30",
        endTime: "01:00",
      },
      {
        id: "6",
        Subject: "General Knowledge",
        teacher: "saniya",
        startTime: "01:00",
        endTime: "01:30",
      },
    ],
    Friday: [
      {
        id: "1",
        Subject: "Mathematics",
        teacher: "saniya",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: "2",
        Subject: "Science",
        teacher: "saniya",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: "3",
        Subject: "History",
        teacher: "saniya",
        startTime: "10:30",
        endTime: "11:00",
      },
      {
        id: "4",
        Subject: "English",
        teacher: "saniya",
        startTime: "11:30",
        endTime: "12:00",
      },
      {
        id: "5",
        Subject: "Geography",
        teacher: "saniya",
        startTime: "12:30",
        endTime: "01:00",
      },
      {
        id: "6",
        Subject: "General Knowledge",
        teacher: "saniya",
        startTime: "01:00",
        endTime: "01:30",
      },
    ],
    Saturday: [
      {
        id: "1",
        Subject: "Mathematics",
        teacher: "saniya",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: "2",
        Subject: "Science",
        teacher: "saniya",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: "3",
        Subject: "History",
        teacher: "saniya",
        startTime: "10:30",
        endTime: "11:00",
      },
      {
        id: "4",
        Subject: "English",
        teacher: "saniya",
        startTime: "11:30",
        endTime: "12:00",
      },
      {
        id: "5",
        Subject: "Geography",
        teacher: "saniya",
        startTime: "12:30",
        endTime: "01:00",
      },
      {
        id: "6",
        Subject: "General Knowledge",
        teacher: "saniya",
        startTime: "01:00",
        endTime: "01:30",
      },
    ],
  };

  const lectureColors = [
    "#98FB98",
    "#F0F8FF",
    "#FFC0CB",
    "#FFFACD",
    "#F0F8FF",
    "#E0FFFF",
  ];

  const renderTimeTable = ({ item, index }) => (
    <View style={styles.EventContainer}>
      <View style={styles.TimeContainer}>
        <Text style={styles.Time}>
          {item.startTime && item.endTime ? item.startTime : " "}
        </Text>
        <Text style={styles.Time}>
          {item.startTime && item.endTime ? item.endTime : " "}
        </Text>
      </View>
      <View style={styles.VerticalLine} />
      <View
        style={[
          styles.Lecture,
          { backgroundColor: lectureColors[index % lectureColors.length] },
        ]}
      >
        <Text style={styles.Subject}>{item.Subject}</Text>
        <Text>{item.teacher}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.main_container}>
      <Topbar Subject="Calendar" />
      <ScrollView>
        <View style={styles.container}>
          <TabNavigation
            activeTab={activeTab}
            handleTabPress={handleTabPress}
          />
          {activeTab === "timetable" && (
            <View>
              <View style={styles.dropdown}>
                <RNPickerSelect
                  placeholder={{ label: "Select Day", value: null }}
                  items={Week}
                  onValueChange={(value) => setSelectedDay(value)}
                  value={selectedDay}
                  style={{ inputAndroid: { color: "black" } }}
                />
              </View>
              <View style={styles.selectedInfo}>
                <View style={styles.timeClass}>
                  <Text style={styles.selected_Time}>Time</Text>
                  <Text style={[styles.selected_Time, { marginLeft: 20 }]}>
                    Class
                  </Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.selected_month_text}>{selectedDay}</Text>
                </View>
              </View>
              <FlatList
                data={eventsByWeek[selectedDay]}
                renderItem={renderTimeTable}
                keyExtractor={(item) => item.id}
              />
            </View>
          )}
          {activeTab === "events" && <Events />}
          {activeTab === "attendance" && <Attendance />}
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
};
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "#173f6f",
    flex: 1,
    width: "100%",
  },
  container: {
    alignItems: "flex-end",
    paddingBottom: 100, // adjust paddingBottom to fit BottomBar
  },
  dropdown: {
    alignItems: "center",
    justifyContent: "center",
    width: 390,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    borderRadius: 18,
    marginBottom: 10,
    marginEnd: 10,
    marginStart: 10,
  },
  selected_month_text: {
    padding: 20,
    color: "white",
    fontSize: 15,
  },
  selected_Time: {
    padding: 20,
    color: "white",
    fontSize: 15,
  },
  Lecture: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 10,
    marginEnd: 10,
    borderRadius: 18,
  },
  selectedInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start", // Align items to the start
    width: "100%",
  },
  timeClass: {
    flexDirection: "row",
  },
  Subject: {
    fontWeight: "bold",
    fontSize: 17,
  },
  EventContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Time: {
    color: "white",
    fontSize: 13,
    marginStart: 20,
    marginTop: 12,
  },
  VerticalLine: {
    height: "100%",
    width: 2,
    backgroundColor: "#ffffff",
    marginRight: 20,
    marginLeft: 10,
  },
});

export default TimeTable;
