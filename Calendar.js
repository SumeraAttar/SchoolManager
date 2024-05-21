import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import Carousel from 'react-native-snap-carousel';


const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDatePress = (date) => {
    setSelectedDate(date);
    // Do something with the selected date
  };

  const renderDateCell = (date) => {
    const isSelected = selectedDate === date;
    return (
      <TouchableOpacity
        onPress={() => handleDatePress(date)}
        style={[styles.dateCell, isSelected && styles.selectedDateCell]}
      >
        <Text style={isSelected && styles.selectedDateText}>{date}</Text>
      </TouchableOpacity>
    );
  };

  const renderMonthItem = ({ item }) => {
    return (
      <View style={styles.calendar}>
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <View key={day} style={styles.dateRow}>
            {renderDateCell(day)}
          </View>
        ))}
      </View>
    );
  };

  const months = Array.from({ length: 12 }, (_, i) => {
    const monthIndex = i + 1;
    return { title: `Month ${monthIndex}`, index: monthIndex };
  });

  return (
    <View style={styles.container}>
      {/* Calendar Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Calendar</Text>
      </View>

      {/* Carousel for months */}
      <Carousel
        data={months}
        renderItem={renderMonthItem}
        sliderWidth={300}
        itemWidth={300}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dateCell: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  selectedDateCell: {
    backgroundColor: 'blue',
  },
  selectedDateText: {
    color: 'white',
  },
});

export default Calendar;



