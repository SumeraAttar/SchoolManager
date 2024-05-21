import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ChatScreen from "./ChatScreen";
const TopBar = ({ title }) => {
  // State variables
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // To track whether the navbar is open or closed
  const [animation] = useState(new Animated.Value(-300)); // For animating the navbar
  const [activeItem, setActiveItem] = useState(null); // To track the active item in the navbar
  const navigation = useNavigation();
  // Function to toggle navbar open/close
  const toggleNavbar = () => {
    if (isNavbarOpen) {
      // Close the navbar
      Animated.timing(animation, {
        toValue: -300,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsNavbarOpen(false));
    } else {
      // Open the navbar
      setIsNavbarOpen(true);
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  // Function to close navbar and set active item
  const closeNavbar = (item = null, route = null) => {
    setActiveItem(item);
    Animated.timing(animation, {
      toValue: -300,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsNavbarOpen(false);
      if (route) {
        navigation.navigate(route);
      }
    });
  };

  // Styles for navbar animation
  const animatedStyles = {
    transform: [{ translateX: animation }],
  };

  // Function to render each navbar item
  const renderNavbarItem = (iconName, label, item, route) => (
    <TouchableOpacity
      key={item}
      style={[styles.modalNavbarItem, activeItem === item && styles.activeItem]}
      onPress={() => closeNavbar(item, route)}
    >
      <Ionicons
        name={iconName}
        size={24}
        style={[styles.iconPadding, activeItem === item && styles.activeIcon]}
      />
      <Text
        style={[
          styles.modalNavbarItemText,
          activeItem === item && styles.activeText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Button to toggle navbar */}
      <TouchableOpacity onPress={toggleNavbar} style={styles.menuButton}>
        <Ionicons name="menu" size={30} color="#ffffff" />
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>
      {/* Right side icons */}
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconButton}   onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbox-ellipses-outline" size={30} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>
      {/* Modal for navbar */}
      <Modal visible={isNavbarOpen} animationType="none" transparent={true}>
        <TouchableWithoutFeedback onPress={() => closeNavbar()}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <Animated.View style={[styles.modalNavbar, animatedStyles]}>
                <ScrollView>
                  {/* User profile section */}
                  <View style={styles.containerWithBackground}>
                    <Image
                      source={{
                        uri: "https://media.istockphoto.com/id/1357352061/photo/smiling-african-american-child-school-boy-doing-homework-while-sitting-at-desk-at-home.jpg?s=612x612&w=0&k=20&c=J31K4oWAEcv_COW7BXX6Dm1uIo3VWiUEM2CmReHpt6U=",
                      }}
                      style={styles.profileImage}
                    />
                    <TouchableOpacity>
                      <Text style={styles.containerWithText}>Saya White</Text>
                      <Text style={styles.containerWithText}>2f4586gh</Text>
                    </TouchableOpacity>
                  </View>
                  {/* Navbar items */}
                  {renderNavbarItem("person", "My Profile", "Profile","Profile")}
                  {renderNavbarItem(
                    "information-circle",
                    "Teacher's info",
                    "info",
                    "Teacher"
                  )}
                  {renderNavbarItem("card", "Fees", "fees")}
                  {renderNavbarItem("notifications", "Notice board", "notice")}
                  {renderNavbarItem("repeat", "Switch Account", "switch")}
                  {renderNavbarItem("help-circle", "About Us", "about")}
                  {/* Separator */}
                  <View style={styles.horizontalLine} />
                  {/* Settings and Help Center */}
                  {renderNavbarItem("settings", "Setting", "settings")}
                  {renderNavbarItem(
                    "help-circle-outline",
                    "Help Centre",
                    "help",
                    "HelpCenter"
                  )}
                </ScrollView>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#00ab4b",
  },
  menuButton: {
    padding: 0,
  },
  title: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
  iconButton: {
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalNavbar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "70%",
    backgroundColor: "#ffffff",
    borderRadius: 4,
    marginTop: 120,
    borderTopRightRadius: 80,
  },
  modalNavbarItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 20,
    borderRadius: 5,
  },
  modalNavbarItemText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
  },
  activeItem: {
    backgroundColor: "#0a2351",
  },
  activeText: {
    color: "#ffffff",
  },
  activeIcon: {
    color: "#ffffff",
  },
  containerWithBackground: {
    backgroundColor: "#e8fbe8",
    borderRadius: 20,
    marginBottom: 28,
    paddingVertical: 30,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    alignItems: "center",
  },
  containerWithText: {
    color: "#00ab4b",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerWithItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    paddingLeft: 20,
  },
  iconPadding: {
    paddingRight: 20,
    paddingLeft: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  horizontalLine: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    width: "80%",
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 25,
  },
});

export default TopBar;
