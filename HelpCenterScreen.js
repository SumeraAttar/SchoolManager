import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Linking ,Alert} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import TopBar from "./TopBar";
import BottomBar from "./BottomBar";


const HelpCenterScreen = ( {navigation}) => {
  const [activeTab, setActiveTab] = useState('contact');



  
    // Function to handle opening a URL
   // Function to handle opening a URL
const handlePress = async (name) => {
    const urls = {
      website: 'https://www.example.com',
      facebook: 'https://www.facebook.com',
      instagram: 'https://www.instagram.com',
      whatsapp: 'https://www.whatsapp.com',
      twitter: 'https://www.twitter.com',
      // Add more URLs for other buttons
    };
    console.log('Name:', name); // Log the name
    console.log('URL:', urls[name]); // Log the URL
  
    if (typeof urls[name] !== 'string') {
      console.error('Invalid URL:', urls[name]);
      alert('Invalid URL provided. URL should be a string.');
      return; // Exit the function if URL is not a string
    }
  
    try {
      const supported = await Linking.canOpenURL(urls[name]);
      if (supported) {
        await Linking.openURL(urls[name]);
      } else {
        alert(`Don't know how to open this URL: ${urls[name]}`);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
      alert('An error occurred while opening the URL.');
    }
  };
  
//   process.on('unhandledRejection', (reason, promise) => {
//     console.error('Unhandled Rejection at:', promise, 'reason:', reason);
//     Alert.alert('Unhandled Rejection', `Reason: ${reason}`);
//   });

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Help Centre</Text>
      </View> */}
      <TopBar title="Help Center" />
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab('faq')}
          style={[styles.tab, activeTab === 'faq' && styles.activeTab]}
        >
          <Text style={styles.tabText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('contact')}
          style={[styles.tab, activeTab === 'contact' && styles.activeTab]}
        >
          <Text style={styles.tabText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        {activeTab === 'contact' ? (
          <>
            <TouchableOpacity style={styles.button} >
              <FontAwesome5 name="headset" size={24} color="black" />
              <Text style={styles.buttonText}>Customer Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={() => handlePress('website')}>
              <FontAwesome5 name="globe" size={24} color="black" />
              <Text style={styles.buttonText}>Website</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('whatsapp')}>
              <FontAwesome5 name="whatsapp" size={24} color="black" />
              <Text style={styles.buttonText}>Whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}     onPress={() => handlePress('facebook')}>
              <FontAwesome5 name="facebook" size={24} color="black" />
              <Text style={styles.buttonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('instagram')}>
              <FontAwesome5 name="instagram" size={24} color="black" />
              <Text style={styles.buttonText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('twitter')}>
              <FontAwesome5 name="twitter" size={24} color="black" />
              <Text style={styles.buttonText}>Twitter</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.faqText}>FAQ content goes here...</Text>
        )}
      </ScrollView>
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#173F6F',
  },
  header: {
    backgroundColor: '#173F6F',
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#173F6F',
    color: 'white,'
  },
  tab: {
    padding: 10,
    color: 'white',
    fontSize: 16,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: 'white',
  },
  content: {
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  faqText: {
    color: 'white',
    fontSize: 16,
  },
  tabText:{
    color:'white',
  }
});

export default HelpCenterScreen;