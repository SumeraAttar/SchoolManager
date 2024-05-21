import React, { useEffect } from 'react';
import { Image, StyleSheet, View ,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from "expo-status-bar";

const Logo = () => {
  const navigation = useNavigation(); // Hook for accessing navigation functions

  useEffect(() => {
    // Navigate to the 'SignUp' screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('HomePage'); // Replace with 'Login' if needed
    }, 10000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/SchoolManager.png')} style={styles.logo} />
      <StatusBar style="auto" />
    

     <View style={styles.Footer}>
    <Text style={styles.Footertext}>Powered By</Text>
    <Text style={styles.Footertext2}>Kudo's Technology</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#173F6F',
  },
  logo: {
    width: wp('90%'),
    height: hp('50%'),
    resizeMode: 'contain',
    marginBottom: 150,
  },
   Footer:{
    alignContent: 'flex-end',
    justifyContent:'flex-end',
    alignItems: 'center',
    textAlign:'center'
   },
   Footertext:{
  fontSize: 18,
textAlign: 'center',
color:'white',
   },
   Footertext2:{
    fontSize: 22,
  fontWeight:'bold',
  textAlign:'center',
  color:'white'
   }

});

export default Logo;
