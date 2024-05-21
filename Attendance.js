
// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Button } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
// import Topbar from "./TopBar";
// import BottomBar from "./BottomBar";

// const Events = () => {
//   const [message, setMessage] = useState(""); // State to store the message
//   const [isMonthModalVisible, setIsMonthModalVisible] = useState(false); // State to manage the visibility of the month selection modal
//   const [selectedMonth, setSelectedMonth] = useState(""); // State to store the selected month

//   const handleMonthModalOpen = () => {
//     setIsMonthModalVisible(true);
//   };

//   const handleMonthSelect = (month) => {
//     setSelectedMonth(month);
//     setIsMonthModalVisible(false);
//   };

//   const handleCloseMonthModal = () => {
//     setIsMonthModalVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Topbar title="Calendar" />
//       <View style={styles.tab_container}>
//         <TouchableOpacity
//           style={styles.tab}
//           onPress={() => handleTabPress("attendance")}
//         >
//           <Text style={styles.tabText}>Attendance</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.tab}
//           onPress={() => handleTabPress("timetable")}
//         >
//           <Text style={styles.tabText}>Timetable</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.tab}
//           onPress={() => handleTabPress("events")}
//         >
//           <Text style={styles.tabText}>Events</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.messageContainer}>
//         <Text style={styles.message}>{message}</Text>
//       </View>
//       <View style={styles.monthSelectionContainer}>
//         <TouchableOpacity onPress={handleMonthModalOpen} style={styles.monthInputContainer}>
//           <TextInput
//             placeholder="Select Month"
//             style={styles.monthSelectionInput}
//             editable={false}
//             value={selectedMonth}
//           />
//           <FontAwesome name="chevron-down" size={24} color="#000" style={styles.monthIcon} />
//         </TouchableOpacity>
//       </View>
//       <Modal
//         visible={isMonthModalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={handleCloseMonthModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}></Text>
//             <Button title="January" onPress={() => handleMonthSelect("January Month")} />
//             <Button title="February" onPress={() => handleMonthSelect("February Month")} />
//             <Button title="March" onPress={() => handleMonthSelect("March Month")} />
//             <Button title="April" onPress={() => handleMonthSelect("April Month")} />
//             <Button title="May" onPress={() => handleMonthSelect("May Month ")} />
//             <Button title="June" onPress={() => handleMonthSelect("June Month")} />
//              <Button title="July" onPress={() => handleMonthSelect("July Month")} />
//             <Button title="August" onPress={() => handleMonthSelect("August Month")} /> 
//             <Button title="September" onPress={() => handleMonthSelect("September Month")} />
//             <Button title="October" onPress={() => handleMonthSelect("October Month")} /> 
//             <Button title="November" onPress={() => handleMonthSelect("November Month")} />
//             <Button title="December" onPress={() => handleMonthSelect("December Month")} />

//             <Button title="Close" onPress={handleCloseMonthModal} />
//           </View>
//         </View>

        
//       </Modal>
//       <BottomBar />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#173f6f",
//   },
//   tab_container: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 20,
//   },
//   tab: {
//     padding: 10,
//   },
//   tabText: {
//     color: "#ffffff",
//     fontWeight: "bold",
//     fontSize: 18,
//   },
 
//   monthSelectionContainer: {
//     alignItems: "center",
//     marginBottom: 20,
//     flexDirection: "row",
//     backgroundColor: "#ffffff",
//     borderRadius: 5,
//   },
  
//   monthInputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   monthSelectionInput: {
//     borderWidth: 0, // Remove border
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     flex: 1,
//     backgroundColor: "#ffffff",
//     borderTopLeftRadius: 5,
//     borderBottomLeftRadius: 5,
//   },
//   monthIcon: {
//     marginRight: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
    
//   },
//   modalContent: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 10,
//     width: 300,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
// });

// export default Events;






import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Button } from "react-native";
import { Calendar } from 'react-native-calendars'; // Import the calendar component
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Topbar from "./TopBar";
import BottomBar from "./BottomBar";


const Events = () => {
  const [message, setMessage] = useState(""); // State to store the message
  const [isMonthModalVisible, setIsMonthModalVisible] = useState(false); // State to manage the visibility of the month selection modal
  const [selectedMonth, setSelectedMonth] = useState(""); // State to store the selected month

  const handleMonthModalOpen = () => {
    setIsMonthModalVisible(true);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setIsMonthModalVisible(false);
  };

  const handleCloseMonthModal = () => {
    setIsMonthModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* <Topbar title="Calendar" /> */}
      <View>
        {/* <View style={styles.tab_container}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => handleTabPress("attendance")}
          >
            <Text style={styles.tabText}>Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => handleTabPress("timetable")}
          >
            <Text style={styles.tabText}>Timetable</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => handleTabPress("events")}
          >
            <Text style={styles.tabText}>Events</Text>
          </TouchableOpacity>
        </View>
         */}
        <View style={styles.monthSelectionContainer}>
          <View style={styles.monthInputContainer}>
            <TextInput
              placeholder="Select Month"
              style={styles.monthSelectionInput}
              editable={false}
              value={selectedMonth}
              onPress={handleMonthModalOpen} // Add onPress to open the modal
            />
            <AntDesign name="calendar" size={24} color="black" style={styles.monthIcon} />
          </View>
          <Modal
            visible={isMonthModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={handleCloseMonthModal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}></Text>
                <Button title="January" onPress={() => handleMonthSelect("January Month")} />
                <Button title="February" onPress={() => handleMonthSelect("February Month")} />
                <Button title="March" onPress={() => handleMonthSelect("March Month")} />
                <Button title="April" onPress={() => handleMonthSelect("April Month")} />
                <Button title="May" onPress={() => handleMonthSelect("May Month ")} />
                <Button title="June" onPress={() => handleMonthSelect("June Month")} />
                <Button title="July" onPress={() => handleMonthSelect("July Month")} />
                <Button title="August" onPress={() => handleMonthSelect("August Month")} />
                <Button title="September" onPress={() => handleMonthSelect("September Month")} />
                <Button title="October" onPress={() => handleMonthSelect("October Month")} />
                <Button title="November" onPress={() => handleMonthSelect("November Month")} />
                <Button title="December" onPress={() => handleMonthSelect("December Month")} />

                <Button title="Close" onPress={handleCloseMonthModal} />
              </View>
            </View>
          </Modal>
        </View>

        <View style={[styles.monthSelectionContainer1,{ }]}>
          <View style={styles.iconContainer}>
            {/* MaterialIcons icon with green background */}
            <View style={[styles.iconBackground, { backgroundColor: 'green' }]}>
              <MaterialIcons name="perm-contact-calendar" size={50} color="white" />
            </View>
          </View>
          <View style={styles.monthInputContainer1}>
            <TextInput
              placeholder="22"
              style={styles.monthSelectionInput1}
            />
          </View>
          <TouchableOpacity style={styles.presentButton}>
            <Text style={styles.presentButtonText}>Present</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.monthSelectionContainer2}>
          <View style={styles.iconContainer}>
            {/* MaterialIcons icon with green background */}
            <View style={[styles.iconBackground, { backgroundColor: 'red' }]}>
              <MaterialIcons name="perm-contact-calendar" size={50} color="white" />
            </View>
            {/* Cross icon */}
            <TouchableOpacity style={styles.crossIconContainer}>
              <Entypo name="cross" size={40} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.monthInputContainer2}>
            <TextInput
              placeholder="02"
              style={styles.monthSelectionInput2}
            />
          </View>
          <TouchableOpacity style={styles.absentButton}>
            <Text style={styles.absentButtonText}>Absent</Text>
          </TouchableOpacity>
        </View>
      </View>

      {selectedMonth && (
        <View>
          <Calendar
            // Props for the calendar component
            // You can customize the appearance and behavior of the calendar here
          />
        </View>
      )}

      {/* <BottomBar /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#173f6f",
  },
  tab_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  tab: {
    padding: 10,
  },
  tabText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },

  monthSelectionContainer: {
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    height:50,
  },

  monthInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  monthSelectionInput: {
    borderWidth: 0, // Remove border
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  monthIcon: {
    marginRight: 10,
  },

  monthSelectionContainer1: {
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "row",
    backgroundColor: "#87CEEB",
    borderRadius: 5,

  },

  monthInputContainer1: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    color: "#000",
  },
  monthSelectionInput1: {
    borderWidth: 0, // Remove border
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#87CEEB",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    fontSize:20,
    color: "#000",
  },

  presentButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  presentButtonText: {
    color: "#000", // Set text color to black
    fontWeight: "bold",
    fontSize: 20,
  },

  iconContainer: {
    position: 'relative',
  },
  iconBackground: {
    padding: 10,
  },
  crossIconContainer: {
    position: 'absolute',
    top: 12,
    right: 14,
    padding: 2,
    color:'black',
  },
  monthSelectionContainer2: {
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "row",
    backgroundColor: "#FFB6C1",
    borderRadius: 5,
  },
  monthInputContainer2: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    color: "#000",
  },
  monthSelectionInput2: {
    borderWidth: 0, // Remove border
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#FFB6C1",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    fontSize:20,
    color: "#000",
  },

  absentButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  absentButtonText: {
    color: "#000", // Set text color to black
    fontWeight: "bold",
    fontSize: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFB6C1",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Events;
