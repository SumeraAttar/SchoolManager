import React, { useState,useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  
  Image, // Import Image component
} from "react-native";
import { Icon } from "react-native-elements";
import Carousel  ,{ Pagination } from "react-native-snap-carousel";
import { FontAwesome5 } from "@expo/vector-icons"; // Import icons

// Import TopBar and BottomBar directly into MyServices component
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

const MyServices = () => {
 



  const [currentIndex, setCurrentIndex] = useState(80);

  const data = [
    { id: '1', imageUrl: require('./assets/slide1.png') },
    { id: '2', imageUrl: require('./assets/upcoming.png') },
    { id: '3', imageUrl: require('./assets/home.png') },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.imageUrl} style={styles.imageslide} />
      </View>
    );
  };

  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

  const [activeIndex, setActiveIndex] = React.useState(0);


  const [showAllIcons, setShowAllIcons] = useState(false);

  const toggleShowAllIcons = () => {
    setShowAllIcons(!showAllIcons);
  };



  
  const { width } = Dimensions.get('window');

  // Define your images here
  const images = [
    require('./assets/slide1.png'),
    require('./assets/upcoming.png'),
    require('./assets/upcoming.png'),
    // Add more images as needed
  ];

 
  const scrollViewRef = useRef(null);



  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newPosition = currentIndex - 1;
      scrollViewRef.current.scrollTo({ x: newPosition * width, animated: true });
      setCurrentIndex(newPosition);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      const newPosition = currentIndex + 1;
      scrollViewRef.current.scrollTo({ x: newPosition * width, animated: true });
      setCurrentIndex(newPosition);
    }
  };

  return (
    <View style={styles.container}>
      <TopBar title="School Manager" />
      <ScrollView>
        <View style={[styles.container1, styles.container1Text]}>
          <View style={styles.studentInfo}>
            <Image
               source={require("./assets/John.png")} // Adjust the path accordingly
              style={styles.studentPhoto}
            />
            <View style={styles.studentDetails}>
              <Text style={styles.studentName}>John Doe</Text>
              <Text style={styles.studentId}>ID: 12345</Text>
              <View style={styles.buttonsContain}>
                <TouchableOpacity style={[styles.button, styles.presentButton]}>
                  <Text style={styles.buttonText}>Present</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.absentButton]}>
                  <Text style={styles.buttonText}>Absent</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>My Services</Text>
          <View style={styles.rowContainer}>
            <View style={styles.iconWithText}>
              <Icon
                name="book"
                type="font-awesome"
                color="#fff"
                containerStyle={styles.iconContainer}
                iconStyle={styles.iconStyle}
                size={30}
              />
              <Text style={styles.iconText}>Academic</Text>
            </View>
            <View style={styles.iconWithText}>
              <Icon
                name="book-open"
                type="font-awesome-5"
                color="#fff"
                containerStyle={styles.iconContainer}
                iconStyle={styles.iconStyle}
                size={30}
              />
              <Text style={styles.iconText}>Attendance</Text>
            </View>
            <View style={styles.iconWithText}>
              <Icon
                name="calendar"
                type="font-awesome"
                color="#fff"
                containerStyle={styles.iconContainer}
                iconStyle={styles.iconStyle}
                size={30}
              />
              <Text style={styles.iconText}>Calendar</Text>
            </View>
            <View style={styles.iconWithText}>
              <Icon
                name="book"
                type="font-awesome"
                color="#fff"
                containerStyle={styles.iconContainer}
                iconStyle={styles.iconStyle}
                size={30}
              />
              <Text style={styles.iconText}>Exam</Text>
            </View>
          </View>
          {showAllIcons && (
            <>
              <View style={styles.rowContainer}>
                <View style={styles.iconWithText}>
                  <Icon
                    name="book"
                    type="font-awesome-5"
                    color="#fff"
                    containerStyle={styles.iconContainer}
                    iconStyle={styles.iconStyle}
                    size={30}
                  />
                  <Text style={styles.iconText}>Library</Text>
                </View>
                <View style={styles.iconWithText}>
                  <Icon
                    name="pager"
                    type="font-awesome-5"
                    color="#fff"
                    containerStyle={styles.iconContainer}
                    iconStyle={styles.iconStyle}
                    size={30}
                  />
                  <Text style={styles.iconText}>Fees</Text>
                </View>
                <View style={styles.iconWithText}>
                  <Icon
                    name="info"
                    color="#fff"
                    iconStyle={styles.iconStyle}
                    size={30}
                  />
                  <Text style={styles.iconText}>Apply Leave</Text>
                </View>
                <View style={styles.iconWithText}>
                  <Icon
                    name="comment"
                    type="font-awesome-5"
                    color="#fff"
                    containerStyle={styles.iconContainer}
                    iconStyle={styles.iconStyle}
                    size={30}
                  />
                  <Text style={styles.iconText}>Chat</Text>
                </View>
              </View>
              <View style={styles.lastRow}>
                <View style={styles.iconWithText}>
                  <Icon
                    name="users"
                    type="font-awesome-5"
                    color="#fff"
                    iconStyle={styles.iconStyle}
                    size={30}
                  />
                  <Text style={styles.iconText}>Community</Text>
                </View>
                <View style={styles.iconWithText}>
                  <Icon
                    name="users"
                    type="font-awesome"
                    color="#fff"
                    containerStyle={styles.iconContainer}
                    iconStyle={styles.iconStyle}
                    size={30}
                  />
                  <Text style={styles.iconText}>Meeting</Text>
                </View>
              </View>
            </>
          )}
          <TouchableOpacity
            onPress={toggleShowAllIcons}
            style={[
              styles.arrowButton,
              showAllIcons
                ? styles.arrowButtonActive
                : styles.arrowButtonInactive,
            ]}
          >
            <FontAwesome5
              name={showAllIcons ? "angle-up" : "angle-down"}
              size={30}
              color="#000"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      
      <Text style={styles.text1}>Updates</Text>
        {/* <Image source={require('./assets/update.png')} style={styles.updatesImage} />
         */}
         <Carousel
      data={data}
      renderItem={({ item }) => <Image source={item.imageUrl} style={styles.image} />}
      sliderWidth={1010}
      itemWidth={1000}
      layout="default"
      autoplay
      autoplayInterval={2000} // Adjust the interval as needed (in milliseconds)
    />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
        <Text style={styles.text1}>Upcoming Events</Text>
        <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ width: width * images.length }}
        onScroll={(event) => {
          const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(slideIndex);
        }}
        ref={scrollViewRef}>
        {images.map((image, index) => (
          <Image key={index} source={image} style={{ width, height: 120, borderRadius: 15,marginBottom:30 }} />
        ))}
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handlePrevious} style={styles.buttons}>
          <Image source={require('./assets/Previous.png')} style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.buttons}>
          <Image source={require('./assets/next.png')} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>

</View>
</ScrollView>
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191970",
  },
  container1: {
    backgroundColor: "#00ab4b",
    margin: 30,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row", // Add flexDirection
    alignItems: "center", // Align items vertically
  },
  container1Text: {
    color: "#fff",
  },
  studentInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, // Take full width
  },
  studentDetails: {
    marginLeft: 10,
  },
  studentPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  studentName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  studentId: {
    fontSize: 16,
    color: "#fff",
  },
  buttonsContain: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  presentButton: {
    backgroundColor: "#7CFC00",
  },
  absentButton: {
    backgroundColor: "#ff0000",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentContainer: {
    margin: 30,
    paddingHorizontal: 15,
    backgroundColor: "#e8fbe8",
    borderRadius: 15,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconWithText: {
    alignItems: "center",
    marginTop: 10,
  },
  iconContainer: {
    paddingBottom: 5,
  },
  iconStyle: {
    backgroundColor: "#00ab4b",
    padding: 15,
    borderRadius: 8,
  },
  iconText: {
    color: "black",
    fontWeight: "bold",
    marginTop: 5,
  },
  lastRow: {
    flexDirection: "row",
  },
  arrowButton: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: -25,
    backgroundColor: "#fff",
  },
  


   slide: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageslide: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  inactiveDotStyle: {
    // Define styles for inactive dots if needed
  },
  image: {
    width: Dimensions.get("window").width,
    height: 150, // Adjust height according to your design
    resizeMode: "cover",
    margin: 4,
    borderRadius:15,
    justifyContent: "center",
    alignItems: "center",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    margin: 5,
  },
  activeDot: {
    backgroundColor: "#00AB4B", // Active dot color
  },
  /*text:{
        fontSize:12,
    },*/
  profileContainer: {
    flexDirection: "row",
    padding: 10,
    margin: 7,
    backgroundColor: "green",
    marginBottom: 40,
    borderRadius: 10, // Add marginBottom to create space below profileContainer
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop:20
  },
  profileInfo: {
    marginLeft: 10,
  },
  profileName: {
    fontSize: 18,
    color: "#fff",
  },
  profileDetails: {
    fontSize: 16,
    color: "#fff",
  },
  profilePerformance: {
    fontSize: 14,
    color: "#fff",
  },
  academicsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginBottom: 40,
    borderRadius: 25,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 15,
    color: "white",
  },
  academicBox: {
    padding: 10,
    backgroundColor: "#ddd",
    alignItems: "center",
    borderRadius: 5,
  },
  updatesImage: {
    height: 100,
    width: "95%",
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignContent: "center",
    marginLeft: 7, // Add marginBottom to create space below updatesImage
  },
  eventsImage: {
    height: 100,
    width: "95%",
    marginBottom: 10,
    marginLeft: 7,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignContent: "center", // Add marginBottom to create space below eventsImage
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#eee",
  },
  logos: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignItems: "center",
  },
  container1: {
    backgroundColor: "#00ab4b",
    margin: 30,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row", // Add flexDirection
    alignItems: "center", // Align items vertically
  },
  container1Text: {
    color: "#fff",
  },
  studentInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, // Take full width
  },
  studentDetails: {
    marginLeft: 10,
  },
  studentPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  studentName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  studentId: {
    fontSize: 16,
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom:20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  presentButton: {
    backgroundColor: "#7CFC00",
  },
  absentButton: {
    backgroundColor: "#ff0000",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  buttonsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    marginBottom:20,
    top: '40%', // Position the buttons in the middle vertically
    transform: [{ translateY: -10 }], // Adjust vertically to center them better
  },
  buttons: {
    padding: 5,
   
  },
  buttonIcon: {
    width: 30,
    height: 30,
  },
  contentContainer: {
    margin: 20,
    paddingHorizontal: 15,
    backgroundColor: "#e8fbe8",
    borderRadius: 15,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconWithText: {
    alignItems: "center",
    marginTop: 10,
  },
  iconContainer: {
    paddingBottom: 5,
  },
  iconStyle: {
    backgroundColor: "#00ab4b",
    padding: 10,
    borderRadius: 8,
  },
  iconText: {
    color: "black",
    fontWeight: "bold",
    marginTop: 5,
  },
  lastRow: {
    flexDirection: "row",
  },
  arrowButton: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: -25,
    backgroundColor: "#fff",
  },



});

export default MyServices;
