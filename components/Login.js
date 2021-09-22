/**Thieu Code dang nhap
 * THieu chuyen trang text dang ky
 * Thieu dang nhap bang van tay
 */
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
        <Text style={styles.title}>Dang Nhap</Text>

        <View style={styles.SectionStyle}>
          <Image
            source={require('../Images/user.png')} 
            style={styles.ImageStyle}
          />
          <TextInput
            style={{flex: 1}} 
            placeholder="Enter Your Username"
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
            placeholder="Enter Your Password"
            returnKeyType='done'
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textbtnInput}>DANG NHAP</Text> 
        </TouchableOpacity>

        <Image source={require('../Images/vantay_icon.png')} 
        style={styles.iconVanTay}></Image>

        <Text style={styles.baseText}>Chua co tai khoan?
            <Text style={styles.innerText}>   Dang Ky</Text> 

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
    paddingBottom: 100,
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
    margin: 10,
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
      height:80,
      borderRadius:15,
      marginRight:10,
  },
  textbtnInput:{
      fontSize:20,
      textAlign:'center',
      fontWeight:'bold',
      marginTop:25
  },
  iconVanTay:{
    height: 65,
    width: 65,
    alignItems:'center',
    resizeMode: 'stretch',
    alignItems: 'center',
    marginLeft:170,
    marginTop:20,
  },
  baseText:{color:'#FFFFFF',textAlign:'center',marginTop:20},
  innerText:{fontWeight:'bold',color:'#FFFACD'}
});
