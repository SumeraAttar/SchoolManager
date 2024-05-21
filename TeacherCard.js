import React from 'react';
import { View, TouchableOpacity,Text, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from "@expo/vector-icons/Octicons";



const TeacherCard = ({ navigation, avatar, teacherName, address, heading1, heading2 }) => {
  return (
    <View style={styles.body}>
      {/* Teacher Heading */}
      <View style={styles.headerContainer}>
        <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowIcon} />
        <Text style={styles.teacherHeadingmain}>Teacher Handling</Text>
        <MaterialCommunityIcons name="bell-badge" size={24} color="white"  style={styles.bellIcon} />
      </View>

      {/* Heading First */}
      <Text style={styles.heading1}>{heading1} Teacher Information</Text>

      {/* First Card */}
      <View style={styles.card}>
        <Image    source={require("./assets/student_girl.jpeg")} style={styles.image} />
        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.teacherName}>{teacherName} Angle Jolie</Text>
            <Text style={styles.teacherone}>{teacherName} Class Teacher</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>{address} Lorem ipsum dolor sit amet consectetur. Sit adipiscing adipiscing mulla tellus.</Text>
          </View>
        </View>
      </View>

      {/* Heading Second */}
      <Text style={styles.heading2}>{heading2} Subject wise</Text>

      {/* Cards Container */}
      <View style={styles.cardContainer}>
        {/* Second Card */}
        <View style={styles.card1}>
          <Image source={require("./assets/student_girl.jpeg")} style={styles.image1} />
          <View style={styles.infoContainer1}>
            <View style={styles.nameContainer1}>
              <Text style={styles.teacherName1}>{teacherName} Mary Jane</Text>
              <Text style={styles.teacherone1}>{teacherName} English Teacher</Text>
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.addressText1}>{address} Lorem ipsum dolor sit amet consectetur. Sit adipiscing adipiscing mulla tellus.</Text>
            </View>
          </View>
        </View>

        {/* Third Card */}
        <View style={styles.card1}>
          <Image source={require("./assets/student_girl.jpeg")} style={styles.image1} />
          <View style={styles.infoContainer1}>
            <View style={styles.nameContainer1}>
              <Text style={styles.teacherName1}>{teacherName} Austin Power</Text>
              <Text style={styles.teacherone1}>{teacherName} History Teacher</Text>
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.addressText1}>{address} Lorem ipsum dolor sit amet consectetur. Sit adipiscing adipiscing mulla tellus.</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Cards Container */}
      <View style={styles.cardContainer}>
        {/* four Card */}
        <View style={styles.card1}>
          <Image source={require("./assets/student_girl.jpeg")} style={styles.image1} />
          <View style={styles.infoContainer1}>
            <View style={styles.nameContainer1}>
              <Text style={styles.teacherName1}>{teacherName} Peter parker</Text>
              <Text style={styles.teacherone1}>{teacherName} Sciance Teacher</Text>
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.addressText1}>{address} Lorem ipsum dolor sit amet consectetur. Sit adipiscing adipiscing mulla tellus.</Text>
            </View>
          </View>
        </View>

        {/* five Card */}
        <View style={styles.card1}>
          <Image source={require("./assets/student_girl.jpeg")} style={styles.image1} />
          <View style={styles.infoContainer1}>
            <View style={styles.nameContainer1}>
              <Text style={styles.teacherName1}>{teacherName} kevin Hart</Text>
              <Text style={styles.teacherone1}>{teacherName} Math's Teacher</Text>
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.addressText1}>{address} Lorem ipsum dolor sit amet consectetur. Sit adipiscing adipiscing mulla tellus.</Text>
            </View>
          </View>
        </View>
      </View>

    {/* Bottom  Home , Callendar, Contact bar*/}
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

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: 'absolute',
    bottom:0,
    left: 0,
    right: 0,
    paddingHorizontal:16,
    height: 60,
    backgroundColor: "#32CD32",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18, 
  },
  iconButton: {
    padding: 16, //Adjust padding as needed
  },

  body: {
    flex: 1, 
    backgroundColor: '#004F98', 
   
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 10,
    padding:10,
    backgroundColor:'#32CD32'
  },
  arrowIcon: {
    marginLeft: 30, // Add margin to position the icon
  },
  teacherHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1, // Take up available space
    textAlign: 'center', // Center the text
  },
  bellIcon: {
    marginRight: 10, // Add margin to position the icon
  },
  // Card First style
  card: {
    width: 220, // Decreased width
    marginLeft: 'auto', // Center the card horizontally
    marginRight: 'auto', // Center the card horizontally
    backgroundColor: 'azure',
    borderRadius: 10,
    marginVertical: 10, // Adjust vertical margin
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft:55
  },
  infoContainer: {
    marginLeft: 0,
  },
  nameContainer: {
    color: 'black',
    borderRadius: 0,
    padding: 0,
    marginBottom: 0,
  },
  teacherName: {
    fontSize: 18,
    fontWeight: 'bold',
    fontWeight:'900',
    color: '#333',
    textAlign: 'center',
  },
  teacherone: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    paddingBottom: 5,
  },
  addressContainer: {
    backgroundColor: '#32CD32',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 0,
  },
  addressText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
    padding: 8,
  },

  teacherHeadingmain:{
fontSize:24,
color:'white',
fontWeight:'900',

  },

 
  heading1: {
   textAlign:'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontWeight:'900',
    marginTop: 10,
    marginBottom: 5,
  },
  heading2: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontWeight:'900',
    marginTop: 10,
    marginBottom: 5,
  },
  
  // Cards Container style
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Second Card Style
  card1: {
    width: 170,
    height: 150,
    justifyContent: 'flex-start',
    backgroundColor: 'azure',
    borderRadius: 10,
    marginLeft:15,
    marginRight:20,
    marginBottom:40,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image1: {
    width: 70,
    height: 70,
    borderRadius: 50,
   marginLeft:50
  },
  infoContainer1: {
    marginLeft: 0,
  },
  nameContainer1: {
    color: 'black',
    borderRadius: 0,
    padding: 0,
    marginBottom: 0,
  },
  teacherName1: {
    fontSize: 14,
    fontWeight: 'bold',
    fontWeight:'900',
    color: '#333',
    textAlign: 'center',
  },
  teacherone1: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    paddingBottom: 5,
  },
  addressContainer1: {
    backgroundColor: '#32CD32',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 0,
  },
  addressText1: {
    textAlign: 'center',
    fontSize:8,
    padding:5,
    marginTop:5,
    color:'white',
  },

});

export default TeacherCard;