import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const NewAccountScreen = ( { navigation }) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.logoContainer}>
        <Image
          source={require('./assets/Rectangle.png')} // Make sure to replace this with your actual logo path
          style={styles.logo}
        />
      </View> */}
      <View style={styles.rectangle}></View>
      <Text style={styles.header}>New Account</Text>
      <Text style={styles.subHeader}>Log in and Get Started...</Text>
      
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Enrollment No." />
      <TextInput style={styles.input} placeholder="School Code" />
      <TextInput style={styles.input} placeholder="Phone Number" />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
      <Text style={styles.signInText}>
        Already a member? <Text style={styles.signInLink}>Sign-In</Text>
      </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#173F6F',
    paddingHorizontal: 20, // Adjusted for smaller screens
    paddingTop: 0, // Adjusted for smaller screens
    alignItems: 'center', // Center content horizontally
  },
  
  logo: {
    width: '100%', // Adjusted for smaller screens
    height: 100, // Adjusted for smaller screens
    resizeMode: 'contain',
  
  },
  logoContainer: {
    marginBottom: 20,
    width: '100%',
    height: 100, // Adjusted for smaller screens
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0, // Adjusted for smaller screens
    top: -90,
    textAlign:'left',
    left:-114,
    color: 'white'
  },
  rectangle: {
    width: '110%',
    height: '17%',
    margin: 0,
    padding: 0,
    backgroundColor: '#00AB4B', // Adjust color as needed
    borderBottomRightRadius: 70, // Adjust radius as needed
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20, // Adjusted for smaller screens
    top: -80,
    textAlign:'left',
    left:-100,
    color: 'white'
  },
  input: {
    width: 380, // Adjusted for smaller screens
    height: 60, // Adjusted for smaller screens
    marginBottom: 20, // Adjusted for smaller screens
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor:'white'
  },
  button: {
    width: 380, 
    height: 60,// Adjusted for smaller screens
    backgroundColor: '#00AB4B',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  signInText: {
    marginTop: 20,
    fontSize: 24,
    color: 'white'
  },
  signInLink: {
    color: 'white',
    fontWeight: 'bold',

  }
});

export default NewAccountScreen;
