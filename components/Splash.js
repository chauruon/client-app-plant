/**
 * Chua tu dong chuyen trang Login
 * Chua thu nho duoc hinh
 */

import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";



const Splash = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../Images/Welcome.png')} resizeMode="cover" style={styles.image}>
      
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    

    
  },
});

export default Splash;