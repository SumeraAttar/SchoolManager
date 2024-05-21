import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5

const Dash = ( {navigation}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>School Manager</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileContainer}>
          <Image source={require('./assets/4.png')} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Saya White</Text>
            <Text style={styles.profileDetails}>Class 3-B | Roll No. -12</Text>
            <Text style={styles.profilePerformance}>Overall Performance: 80%</Text>
          </View>
        </View>
        <View style={styles.academicsContainer}>
          <View style={styles.academicBox}>
            <TouchableOpacity style={styles.button}>
              <Image source={require('./assets/Student.png')} style={styles.logos} />
            </TouchableOpacity>
            <Text style={styles.text}>Student details</Text>
          </View>
          <View style={styles.academicBox}>
            <TouchableOpacity style={styles.button}>
              <Image source={require('./assets/Homework.png')} style={styles.logos} />
            </TouchableOpacity>
            <Text style={styles.text}>Homework</Text>
          </View>
          <View style={styles.academicBox}>
            <TouchableOpacity style={styles.button}>
              <Image source={require('./assets/Calender.png')} style={styles.logos} />
            </TouchableOpacity>
            <Text style={styles.text}>Calendar</Text>
          </View>
          <View style={styles.academicBox}>
            <TouchableOpacity style={styles.button}>
              <Image source={require('./assets/Exam.png')} style={styles.logos} />
            </TouchableOpacity>
            <Text style={styles.text}>Exam</Text>
          </View>
          {showMore && (
            <View style={styles.additionalIconsContainer}>
              {/* Additional icons to display when "See More" is clicked */}
              <View style={styles.academicBox}>
                <TouchableOpacity style={styles.button}>
                  <Image source={require('./assets/Student.png')} style={styles.logos} />
                </TouchableOpacity>
                <Text style={styles.text}>Icon 1</Text>
              </View>
              <View style={styles.academicBox}>
                <TouchableOpacity style={styles.button}>
                  <Image source={require('./assets/Student.png')} style={styles.logos} />
                </TouchableOpacity>
                <Text style={styles.text}>Icon 2</Text>
              </View>
              <View style={styles.academicBox}>
                <TouchableOpacity style={styles.button}>
                  <Image source={require('./assets/Student.png')} style={styles.logos} />
                </TouchableOpacity>
                <Text style={styles.text}>Icon 3</Text>
              </View>
              <View style={styles.academicBox}>
                <TouchableOpacity style={styles.button}>
                  <Image source={require('./assets/Student.png')} style={styles.logos} />
                </TouchableOpacity>
                <Text style={styles.text}>Icon 4</Text>
              </View>
            </View>
          )}
        </View>
        {/* Button to toggle visibility of additional icons */}
        <TouchableOpacity style={styles.seeMoreButton} onPress={toggleShowMore}>
          <Text style={styles.seeMoreButtonText}>{showMore ? 'See Less' : 'See More'}</Text>
        </TouchableOpacity>
        <Image source={require('./assets/update.png')} style={styles.updatesImage} />
        <Image source={require('./assets/upcoming.png')} style={styles.eventsImage} />
      </ScrollView>
      <View style={styles.footer}>
        <FontAwesome5 name="home" size={24} color="black" />
        <FontAwesome5 name="user" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  scrollView: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'green',
    marginBottom: 10,
    borderRadius: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    marginLeft: 10,
  },
  profileName: {
    fontSize: 18,
    color: '#fff',
  },
  profileDetails: {
    fontSize: 16,
    color: '#fff',
  },
  profilePerformance: {
    fontSize: 14,
    color: '#fff',
  },
 // Update the styles for academicsContainer and academicBox
academicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow items to wrap onto the next line
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
  },
  academicBox: {
    width: '20%', // Set the width to 30% to fit three boxes per row
    padding: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
    marginBottom: 10,
  },
  
  button: {
    flexDirection: 'row',
    backgroundColor: '#00AB4B',
    padding: 10,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  
  additionalIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Align icons in the center
  },
  updatesImage: {
    height: 100,
    width: '100%',
    marginBottom: 40,
  },
  eventsImage: {
    height: 100,
    width: '100%',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#eee',
  },
  logos: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  seeMoreButton: {
    alignSelf: 'center',
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  seeMoreButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dash;