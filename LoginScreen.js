import React, { useState ,useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, Modal, Linking } from 'react-native';
import CheckBox from "expo-checkbox";

const LoginScreen = ({ navigation }) => {
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [followed, setFollowed] = useState({
    facebook: false,
    instagram: false,
    twitter: false,
    linkedin: false,
    youtube: false
  });


  // Check if all social media platforms have been followed
  useEffect(() => {
    const allFollowed = Object.values(followed).every(value => value === true);
    if (allFollowed) {
      setNextButtonEnabled(true);
    } else {
      setNextButtonEnabled(false);
    }
  }, [followed]);


  const handleFollow = (platform) => {
    // Logic to follow the platform and change its state to followed
    setFollowed(prevState => ({
      ...prevState,
      [platform]: true
    }));

    let url = '';
    switch (platform) {
      case 'facebook':
        url = 'https://www.facebook.com';
        break;
      case 'instagram':
        url = 'https://www.instagram.com';
        break;
      case 'twitter':
        url = 'https://www.twitter.com';
        break;
      case 'linkedin':
        url = 'https://www.linkedin.com';
        break;
      case 'youtube':
        url = 'https://www.youtube.com';
        break;
      default:
        url = '';
    }
    if (url !== '') {
      Linking.openURL(url);
    }
  };

  const handleLogin = () => {
    // Logic to show the modal
    setModalVisible(true);
  };

  const handlePopupClose = () => {
    // Logic to close the modal
    setModalVisible(false);
  };


  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rectangle}></View>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Log in and Get Started...</Text>
      <Text style={styles.text}>Enrollment Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEnrollmentNo}
        value={enrollmentNo}
        placeholder="Enrollment No."
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholder="Password"
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Remember me</Text>
      </View>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupText} onPress={() => navigation.navigate('NewAccount')}>
        <Text style={styles.signupLink}>Don't have an account? Sign up</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handlePopupClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={require('./assets/SchoolManager.png')} style={styles.imageStyle} />
            <Text style={styles.modalText}>“You need a subscription to sign in and access the content."</Text>
            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
              <TouchableOpacity onPress={() => handleFollow('facebook')}>
                <View style={styles.socialMediaButtonContainer}>
                  <Image source={followed.facebook ? require('./assets/facebook.png') : require('./assets/facebook.png')} style={styles.icon}/>
                  <Text style={styles.followText}>Follow for more</Text>
                  {followed.facebook ? (
                    <Text style={[styles.followButton, { backgroundColor: 'green' }]}>Followed</Text>
                  ) : (
                    <Text style={styles.followButton}>Follow</Text>
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleFollow('instagram')}>
                <View style={styles.socialMediaButtonContainer}>
                  <Image source={require('./assets/instagram.png')} style={styles.icon}/>
                  <Text style={styles.followText}>Follow for more</Text>
                  {followed.instagram ? (
                    <Text style={[styles.followButton, { backgroundColor: 'green' }]}>Followed</Text>
                  ) : (
                    <Text style={styles.followButton}>Follow</Text>
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleFollow('twitter')}>
                <View style={styles.socialMediaButtonContainer}>
                  <Image source={require('./assets/twitter.png')} style={styles.icon}/>
                  <Text style={styles.followText}>Follow for more</Text>
                  {followed.twitter ? (
                    <Text style={[styles.followButton, { backgroundColor: 'green' }]}>Followed</Text>
                  ) : (
                    <Text style={styles.followButton}>Follow</Text>
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleFollow('linkedin')}>
                <View style={styles.socialMediaButtonContainer}>
                  <Image source={require('./assets/linkedin.png')} style={styles.icon}/>
                  <Text style={styles.followText}>Follow for more</Text>
                  {followed.linkedin ? (
                    <Text style={[styles.followButton, { backgroundColor: 'green' }]}>Followed</Text>
                  ) : (
                    <Text style={styles.followButton}>Follow</Text>
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleFollow('youtube')}>
                <View style={styles.socialMediaButtonContainer}>
                  <Image source={require('./assets/youtube.png')} style={styles.icon}/>
                  <Text style={styles.followText}>Subscribe for more</Text>
                  {followed.youtube ? (
                    <Text style={[styles.followButtonsubscribe, { backgroundColor: 'green' }]} >Subscribed</Text>
                  ) : (
                    <Text style={styles.followButtonsubscribe} >Subscribe</Text>
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.nextButton, nextButtonEnabled ? null : styles.disabledButton]} onPress={() => nextButtonEnabled ? navigation.navigate('Dashboard') : null}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={handlePopupClose}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#173F6F',
  },
  rectangle: {
    width: '110%',
    height: '30%',
    margin: 0,
    padding: 0,
    backgroundColor: '#00AB4B', // Adjust color as needed
    borderBottomRightRadius: 70, // Adjust radius as needed
    top: -135,
    marginBottom: -80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0, // Adjusted for smaller screens
    top: -180,
    textAlign:'left',
    left:-130,
    color: 'white'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20, // Adjusted for smaller screens
    top: -170,
    textAlign:'left',
    left:-100,
    color: 'white'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 20,
  },
  input: {
    width: '90%',
    height: 60,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 15,
    backgroundColor: 'white',
    color: 'black',
  },
  checkboxContainer: {
    flexDirection: 'row',
    // marginBottom: 20,
     marginLeft: -250,
     marginTop:-10,
  },
  checkbox: {
    alignSelf: 'baseline',
  },
  label: {
    // margin: 3,
    color: 'white',
  },
  forgotPassword: {
    color: 'white',
    marginBottom: 20,
    marginRight: -250,
    marginTop:-25,
  },
  loginButton: {
    width: '90%',
    height: 60,
    backgroundColor: '#00AB4B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
    marginTop:20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    color: 'white',
    marginTop: 10,
  },
  signupLink: {
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  // modalView: {
  //   margin: 10,
  //   backgroundColor: '#D3EFE0',
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: 'center',
  //   elevation: 5,
  // },
  modalView: {
    margin: 10,
    backgroundColor: '#173F6F',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    height: '80%', // Adjust the height as needed
  },
  nextButton: {
    backgroundColor: '#00AB4B',
    padding: 10,
    borderRadius: 5,
    marginTop: 40,
    width: 100,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign:'center'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
  },
  modalText: {
    marginBottom: 45,
    textAlign: 'center',
    fontSize:20,
    fontWeight:'bold',
    color:'white',
  },
  socialMediaButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,

  },
  followText: {
    marginLeft: 60,
    color: 'black',
    fontSize: 16,
    color:'white',
  },
  followButton: {
    marginLeft: 60,
    paddingHorizontal: 23,
    paddingVertical:5,
    backgroundColor: '#E60000',
    color: 'white',
    borderRadius: 5,
    fontSize:18
  },
  followButtonsubscribe:{
    marginLeft: 36,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#E60000',
    color: 'white',
    borderRadius: 5,
    fontSize:18
  },
  icon: {
    width: 30, // Adjust width as needed
    height: 30, // Adjust height as needed
  },
});

export default LoginScreen;
