import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SectionList,
  Image,
  ScrollView,
} from "react-native";
import Topbar from "./TopBar";
import BottomBar from "./BottomBar";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";

const Events = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedMonth, setSelectedMonth] = useState("January");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const months = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  const eventsByMonth = {
    January: [
      {
        id: "1",
        title: "Sports",
        desc: "lorem ipsum doller sit amet consectetur. In morbi nunc rhoncus dictumust.",
        image: require("./assets/sports_day.jpg"),
        date: "January 10, 2022",
        time: "10:00 AM",
      },
      {
        id: "2",
        title: "Annual Day",
        desc: "lorem ipsum doller sit amet consectetur. In morbi nunc rhoncus dictumust.",
        image: require("./assets/anual_day.png"),
        date: "January 10, 2022",
        time: "10:00 AM",
      },
      {
        id: "3",
        title: "Teachers Day",
        desc: "lorem ipsum doller sit amet consectetur. In morbi nunc rhoncus dictumust.",
        image: require("./assets/teachers_day.png"),
        date: "January 10, 2022",
        time: "10:00 AM",
      },
      {
        id: "4",
        title: "Cycling event",
        desc: "lorem ipsum doller sit amet consectetur. In morbi nunc rhoncus dictumust.",
        image: require("./assets/cycle_event.png"),
        date: "January 10, 2022",
        time: "10:00 AM",
      },
    ],
    February: [
      {
        id: "5",
        title: "Independence Day",
        desc: "lorem ipsum doller sit amet consectetur. In morbi nunc rhoncus dictumust.",
        image: require("./assets/sports_day.jpg"),
        date: "January 10, 2022",
        time: "10:00 AM",
      },
      {
        id: "6",
        title: "Holiday",
        desc: "lorem ipsum doller sit amet consectetur. In morbi nunc rhoncus dictumust.",
        image: require("./assets/anual_day.png"),
        date: "January 10, 2022",
        time: "10:00 AM",
      },
      {
        id: "7",
        title: "Teachers Day",
        desc: "lorem ipsum doller sit amet consectetur. In morbi nunc rhoncus dictumust.",
        image: require("./assets/teachers_day.png"),
        date: "January 10, 2022",
        time: "10:00 AM",
      },
      {
        id: "8",
        title: "Cycling event",
        desc: "lorem ipsum doller sit amet consectetur. In morbi nunc rhoncus dictumust.",
        image: require("./assets/cycle_event.png"),
        date: "January 10, 2022",
        time: "10:00 AM",
      },
    ],
    // Add events for other months...
  };

  const renderEvent = ({ item }) => (
    <View style={styles.eventItem}>
      <Text style={styles.titleText}>{item.title}</Text>
      <View style={styles.eventTextContainer}>
        <Image source={item.image} style={styles.image} />
        <View>
          <View style={styles.eventDateTime}>
            <AntDesign name="clockcircleo" size={24} color="green" />
            <Text style={styles.eventDate}>{item.date}</Text>
            <Text style={styles.eventTime}>{item.time}</Text>
          </View>
          <Text style={styles.eventDescription}>{item.desc}</Text>
        </View>
      </View>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Topbar title="Calendar" /> */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.tabContainer}>
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
        <View style={styles.dropdown}>
          <RNPickerSelect
            placeholder={{ label: "Select month", value: null }}
            items={months}
            onValueChange={(value) => setSelectedMonth(value)}
            value={selectedMonth}
            style={{ inputAndroid: { color: "black" } }}
          />
        </View>
        <SectionList
          sections={
            selectedMonth
              ? [{ title: selectedMonth, data: eventsByMonth[selectedMonth] }]
              : []
          }
          renderItem={renderEvent}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <View style={styles.emptyMessage}>
              <Text style={styles.emptyMessageText}>No events...</Text>
            </View>
          )}
        />
      </ScrollView>
      {/* <BottomBar /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#173f6f",
    width: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100,
    alignItems: "center",
    justifyContent: "center", // Adjust this value based on your BottomBar height
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#173f6f",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 1,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#039e4f",
  },
  tabText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  activeTabText: {
    color: "#039e4f",
  },
  dropdown: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    padding: 10,
    //paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  sectionHeader: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  sectionHeaderText: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 20,
  },
  emptyMessage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyMessageText: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 20,
    padding: 20,
  },
  eventItem: {
    //alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    backgroundColor: "#ffffff",
    height: 150,
    padding: 15,
    marginTop: 10,
    borderRadius: 18,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  eventTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eventDescription: {
    fontSize: 15,
    width: 250,
  },
  eventDateTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  eventTime: {
    fontWeight: "bold",
    color: "#38bd72",
    margin: 5,
  },
  eventDate: {
    fontWeight: "bold",
    color: "#38bd72",
    margin: 5,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 25,
  },
});

export default Events;
