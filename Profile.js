import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Topbar from "./TopBar";
import BottomBar from "./BottomBar";
const Profile = ( {navigation}) => {
  const [profile, setProfile] = useState({
    fathersName: "John White",
    mothersName: "Teressa White",
    dob: "09/04/2019",
    class: "3-B",
    rollNumber: "12",
    phoneNumber: "0987654321",
    address: "hgegfeq vhjeggfue huehi hhehufhujhjfg khhur",
  });

  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleProfileChange = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  return (
    <View style={styles.container}>
      <Topbar title="Profile" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileNameContainer}>
            <Image
              source={require("./assets/student_girl.jpeg")}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Saya White</Text>
            <View style={styles.classRollContainer}>
              <Text style={styles.profileClass}>Class 3-B</Text>
              <Text style={styles.profileRollNumber}> | Roll No. - 12</Text>
            </View>
          </View>
        </View>

        {/* About Me Section */}
        <View style={styles.aboutMeSection}>
          <View style={styles.aboutMeHeader}>
            <Text style={styles.aboutMeTitle}>About me</Text>
            <TouchableOpacity onPress={toggleEditing}>
              <Text style={styles.editButton}>
                {isEditing ? "Save" : "Edit"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.aboutMeContainer}>
            <View style={styles.aboutMeContent}>
              {renderProfileDetail(
                "Father's name",
                profile.fathersName,
                "fathersName"
              )}
              {renderProfileDetail(
                "Mother's name",
                profile.mothersName,
                "mothersName"
              )}
              {renderProfileDetail("Date of Birth", profile.dob, "dob")}
              {renderProfileDetail("Class", profile.class, "class")}
              {renderProfileDetail(
                "Roll No.",
                profile.rollNumber,
                "rollNumber"
              )}
              {renderProfileDetail(
                "Phone No.",
                profile.phoneNumber,
                "phoneNumber"
              )}
              {renderProfileDetail("Address", profile.address, "address")}
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );

  function renderProfileDetail(label, value, key) {
    return (
      <View style={styles.detailContainer} key={key}>
        <Text style={styles.detailLabel}>{label}</Text>
        {isEditing ? (
          <TextInput
            value={value}
            onChangeText={(text) => handleProfileChange(key, text)}
            style={styles.textInput}
          />
        ) : (
          <Text style={styles.detailValue}>{value}</Text>
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100,
    backgroundColor: "#ffffff",
    //alignItems: "center",
    //justifyContent: "center", // Adjust this value based on your BottomBar height
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#1D3B72",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 150,
    flex: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    marginTop: -80,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileNameContainer: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    width: "88%",
    padding: 20,
    marginTop: 90,
    position: "absolute",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    //borderColor: "black",
    //borderWidth: 1, // Border width
    borderColor: "black", // Border color
    borderRadius: 20,
    // left: 40,
    // top: 40,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#325580",
  },
  classRollContainer: {
    flexDirection: "row",
  },
  profileClass: {
    fontSize: 16,
    color: "black",
  },
  profileRollNumber: {
    fontSize: 16,
    color: "black",
  },
  // aboutMeContainer: {
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  aboutMeSection: {
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: 70
  },
  aboutMeContent: {
    width: "100%",
  },
  aboutMeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  aboutMeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D3B72",
  },
  editButton: {
    fontSize: 20,
  },
  aboutMeContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    borderColor: "black",
    borderWidth: 1, // Border width
    borderColor: "black", // Border color
    borderRadius: 10, // Border radius
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    //alignItems: "center",
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 2,
    color: "#000",
    lineHeight: 30,
  },
  detailValue: {
    fontSize: 18,
    flex: 2,
    marginLeft: 10,
    color: "#000",
    lineHeight: 35,
  },
  textInput: {
    flex: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginLeft: 10,
    lineHeight: 30,
  },
});

export default Profile;
