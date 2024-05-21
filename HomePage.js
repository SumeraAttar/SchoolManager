import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image ,ScrollView,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


import { Video } from 'expo-av';



const HomePage = () => {
  const navigation = useNavigation();


  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>

    <View style={styles.container}>
    {/* Social Media Icons */}
    <View style={styles.socialMediaContainer}>
        <TouchableOpacity onPress={() => {/* handle Facebook icon press */}}>
          <Image
            source={require('./assets/facebook.png')}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* handle Instagram icon press */}}>
          <Image
            source={require('./assets/instagram.png')}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* handle LinkedIn icon press */}}>
          <Image
            source={require('./assets/linkedin.png')}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* handle Twitter icon press */}}>
          <Image
            source={require('./assets/twitter.png')}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* handle TikTok icon press */}}>
          <Image
            source={require('./assets/youtube.png')}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/SchoolManager.png')} // Make sure to replace this with your actual logo path
          style={styles.logo}
        />
       
      </View>
      <Text style={styles.header}>We Keep You Updated</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.academicBox}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Image
              source={require('./assets/Student.png')} // Replace with your actual student logo path
              style={styles.logos}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Student</Text>
        </View>

        <View style={styles.academicBox}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ParentSignup')}>
            <Image
              source={require('./assets/Parent.png')} // Replace with your actual parent logo path
              style={styles.logos}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Parent</Text>
        </View>

        <View style={styles.academicBox}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewAccount')}>
            <Image
              source={require('./assets/Teacher.png')} // Replace with your actual teacher logo path
              style={styles.logos}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>School/Teachers</Text>
        </View>
      </View>
      <View style={styles.homeContainer}>
        <Image
          source={require('./assets/home.png')} // Replace with the image you want to display after the teacher button
          style={styles.imageAfterButton}
        />
        <Text style={styles.homeText}>Stop struggling with common tasks and focus on 
the real choke points. Discover a full featured &
 100% Free School management platform.</Text>
      </View>

       {/* Video Section */}
       <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>WATCH VIDEO FOR TUTORIAL</Text>
      </TouchableOpacity>

      <View style={styles.videoContainer}>
      <Video
        source={require('./assets/video1.mp4')} // Provide the path to your video file
        style={styles.video}
        // resizeMode="cover"
        shouldPlay={isPlaying} // Automatically start playing if isPlaying is true
      />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={isPlaying ? 'Pause' : 'Play'}
          onPress={togglePlay}
        />
      </View>
     
    </View>
    </ScrollView>
    
  );
};
const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#173F6F',
  },
  header: {
 textAlign:'center',
 color: 'white',
 fontWeight: 'bold',
 fontSize: 25,
 marginTop: 2,
 marginBottom: 0,
  },
  logoContainer: {
    marginTop: -40,
   marginBottom: -30,
  },
  logo: {
    width: 150,
    height: 150,
   
  },
  video: {
    width:300,
    height: 300,
   alignItems:'center',
  

  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:40
  },
  buttonContainer: {
    margin: 20,
    alignItems:'center',
   marginLeft:50,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: ':center',
    padding: 10,
    width: '100%',
  },
  socialMediaIcon: {
    width: 22,
    height: 22,
    marginLeft: 7,
  },
  imageAfterButton: {
    width: 330,
    height: 336,
    marginLeft: 30,
    marginBottom: 15,
  },
  homeText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24, // Adjust the line height for proper spacing between lines
    paddingHorizontal: 20, // Add horizontal padding
     // Add top margin for spacing
     color: 'white',
  },
  

 
  
  nextButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
  },


  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#00AB4B',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  academicBox: {
    padding: 10,
    // backgroundColor: '#ddd',
    alignItems: 'center',
  },
  logos: {
    width: 40,
    height: 40,
    marginRight: 10,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    // marginTop: 10,
  },
  
  
  button2: {
   Color: '#51EA6A',
    padding: 15,
    borderRadius: 5,
    marginTop:20
  },
  buttonText2: {
    fontSize: 18,
    color: '#51EA6A',
    textAlign: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default HomePage;
