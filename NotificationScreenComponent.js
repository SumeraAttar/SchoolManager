import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import TopBar from './TopBar'; // Import the TopBar component
import { useNavigation } from "@react-navigation/native";
const NotificationScreenComponent = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <TopBar title="Notifications" navigation={navigation} /> {/* Pass the navigation prop here */}
    <ScrollView style={styles.content}>
      <View style={styles.notification}>
      <Image source={require("./assets/6.png")} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>English Teacher</Text>
          <Text style={styles.message}>Lorem ipsum dolor sit amet consectetur. Faucibus tempus enim posuere enim id. Fermentum auctor arcu.</Text>
          <Text style={styles.date}>24 June 2024</Text>
        </View>
      </View>

      <View style={styles.notification}>
        <Image source={require("./assets/3.png")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>History Teacher</Text>
          <Text style={styles.message}>Lorem ipsum dolor sit amet consectetur. Faucibus tempus enim posuere enim id. Fermentum auctor arcu.</Text>
          <Text style={styles.date}>24 June 2024</Text>
        </View>
      </View>

      {/* Add more notifications as needed */}
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  notification: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  message: {
    color: '#666',
  },
  date: {
    color: '#aaa',
    fontSize: 12,
  },
});

export default NotificationScreenComponent;
