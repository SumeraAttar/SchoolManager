// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { useNavigation } from '@react-navigation/native';
// const App = () => {
//     const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Calendar</Text>
//       </View>
//       <View style={styles.tabBar}>
//         <TouchableOpacity style={styles.tabItem}>
//           <Text style={styles.tabText}>Attendance</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.tabItem}>
//           <Text style={styles.tabText}>Timetable</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.tabItem}>
//           <Text style={styles.tabText}>Events</Text>
//         </TouchableOpacity>
//       </View>
//       <ScrollView style={styles.content}>
//         <View style={styles.monthSection}>
//           <Text style={styles.monthText}>May Month</Text>
//           <View style={styles.statusContainer}>
//             <View style={styles.statusItem}>
//               <Text style={[styles.statusIcon, {color: 'green'}]}>✔</Text>
//               <Text style={styles.statusText}>Present: 22</Text>
//             </View>
//             <View style={styles.statusItem}>
//               <Text style={[styles.statusIcon, {color: 'red'}]}>✘</Text>
//               <Text style={styles.statusText}>Absent: 2</Text>
//             </View>
//           </View>
//         </View>
//         {/* Calendar Component */}
//         <Calendar
//           // Initially visible month. Default = now
//           current={'2024-05-01'}
//           // Handler which gets executed on day press. Default = undefined
//           onDayPress={(day) => {console.log('selected day', day)}}
//           // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
//           monthFormat={'yyyy MM'}
//           // Do not show days of other months in month page. Default = false
//           hideExtraDays={true}
//           // If firstDay=1 week starts from Monday.
//           firstDay={1}
//           // Show week numbers to the left. Default = false
//           showWeekNumbers={true}
//           // Handler which gets executed when visible month changes in calendar. Default = undefined
//           onMonthChange={(month) => {console.log('month changed', month)}}
//           // Disable left arrow. Default = false
//           disableArrowLeft={true}
//           // Disable right arrow. Default = false
//           disableArrowRight={true}
//           // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
//           disableAllTouchEventsForDisabledDays={true}
//           // Replace default arrows with custom ones (direction can be 'left' or 'right')
//           renderArrow={(direction) => (<Arrow />)}
//           // Enable the option to swipe between months. Default = false
//           enableSwipeMonths={true}
//         />
//       </ScrollView>
//       <View style={styles.footer}>
//         {/* Footer Navigation */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     backgroundColor: '#34C759',
//     padding: 10,
//     alignItems: 'center',
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 20,
//   },
//   tabBar: {
//     flexDirection: 'row',
//     backgroundColor: '#30D158',
//   },
//   tabItem: {
//     flex: 1,
//     padding: 10,
//     alignItems: 'center',
//   },
//   tabText: {
//     color: '#fff',
//   },
//   content: {
//     flex: 1,
//   },
//   monthSection: {
//     backgroundColor: '#E0F7FA',
//     padding: 10,
//   },
//   monthText: {
//     fontSize: 18,
//     color: '#000',
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//   },
//   statusItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   statusIcon: {
//     fontSize: 24,
//   },
//   statusText: {
//     marginLeft: 5,
//     fontSize: 16,
//   },
//   footer: {
//     backgroundColor: '#ccc',
//     height: 50,
//   },
// });

// export default App;