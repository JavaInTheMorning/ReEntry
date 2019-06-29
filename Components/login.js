import React, {Component} from 'react';
import {ImageBackground, Image, TextInput, Text, StyleSheet, View, Button} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('./LoginBackground.png')} style={{width: '100%', height: '100%'}}>
                   <View style = {{flex: 1}}>
                    <View style = {styles.invisibleView}>
                        <Image style = {styles.logoView} source={require('./Logo.png')}></Image>
                    </View>
                    <View style = {styles.textView}>
                      <TextInput style = {styles.textInput}
                      >First Name</TextInput>
                      <TextInput style = {styles.textInput}
                      >Last Name</TextInput>
                      <TextInput style = {styles.textInput}
                      >Email</TextInput>
                      <TextInput style = {styles.textInput}
                      >Password</TextInput>
                    </View>
                    <View style={styles.buttonView}>
                      <Button title = "Submit"></Button>
                      <Text style = {styles.text}>Forgot Password?</Text>
                    </View>
                  </View>
                </ImageBackground>
            </View>
        );
      }
    }
    
    
    var styles = StyleSheet.create({
      container: {
          flex: 1,
      },
      backgroundImage: {
          flex: 1,
          resizeMode: 'cover', // or 'stretch'
      },
      textInput:{
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
      },
      invisibleView:{
        flex: 1
      },  
      textView:{
        flex: 2
      },
      buttonView:{
        flex: .5,
        marginTop: 30,
        marginLeft: 70,
        marginRight: 70,
      },
      text:{
        marginLeft: 60,
        marginTop: 5
      },
      logoView:{
        width: 100,
        height: 100,
        marginTop: 50,
        marginLeft: 130,
      }
    });