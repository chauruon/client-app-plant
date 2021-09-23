import React, {Component} from 'react';
import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedbackBase,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image source={require('../Images/back_icon.png')}
        style={styles.backIma}></Image>
        <Text style={styles.title}>Đăng ký</Text>

        <View style={styles.SectionStyle}>
          <Image
            source={require('../Images/user.png')} 
            style={styles.ImageStyle}
          />
          <TextInput
            style={{flex: 1}} 
            placeholder="Email"
            returnKeyType='next'
            autoCorrect={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../Images/password_icon.png')} 
            style={styles.ImageStyle}
          />
          <TextInput
            style={{flex: 1}} 
            placeholder="Password"
            returnKeyType='done'
            autoCorrect={false}
            secureTextEntry={true}
          />          
        </View>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../Images/password_icon.png')} 
            style={styles.ImageStyle}
          />
          <TextInput
            style={{flex: 1}} 
            placeholder="Confrim Password"
            returnKeyType='next'
            autoCorrect={false}
            secureTextEntry={true}
          />          
        </View>
        <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textbtnInput}>Đăng ký</Text> 
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnLoginGG}>
            <Text style={styles.textbtnInputGG}>Đăng ký bằng Google</Text> 
        </TouchableOpacity>
        <Text style={styles.baseText}>Bạn đã có tài khoản
            <Text style={styles.innerText} onPress={() => navigator.navigator('Login')}>   Đăng nhập</Text> 

        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgb(0,0,0)',
  },
  title: {
    fontSize: 60,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '900',
    paddingBottom: 50,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A9A9A9',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 60,
    borderRadius: 15,
    margin: 5,
    paddingHorizontal:10
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    marginRight:10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  btnLogin:{
      backgroundColor:'#FFFACD',
      marginTop:30,
      height:60,
      borderRadius:15,
      marginHorizontal:20
  },
  textbtnInput:{
      fontSize:20,
      textAlign:'center',
      fontWeight:'bold',
      marginTop:20
  },
  baseText:{color:'#FFFFFF',textAlign:'center',marginTop:20},
  innerText:{fontWeight:'bold',color:'#FFFACD'},

  btnLoginGG:{
    backgroundColor:'#ffb3b3',
    marginTop:20,
    height:60,
    borderRadius:15,
    marginHorizontal:20
  },
  textbtnInputGG:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    marginTop:20,
    color:'#FF0000'
  },
  backIma:{
      marginTop:20,
      height:40,
      width:40,
      backgroundColor:'rgb(255, 255, 255)'
  }
  
});
