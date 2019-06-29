import React, {Component} from 'react';
import {ImageBackground, Image, TextInput, Text, StyleSheet, View, Button} from 'react-native';


export default class Login extends Component {
  state = {
    Username: "",
  Password: "",
}
submit = () => {
  let collection={}
  collection.Username = this.state.Username,
  collection.Password = this.state.Password
  return collection
}
  render() {
    return (
      <View>
      <ImageBackground source={require('./LoginBackground.png')} style={{width: '100%', height: '100%'}}>
         <View style = {{flex: 1}}>
          <View style = {styles.invisibleView}>
              <Image style = {styles.logoView} source={require('./Logo.png')}></Image>
          </View>
          <View style = {styles.textView}>
            <Text style = {styles.text}>User Name</Text>
            <TextInput style = {styles.textInput}
            onChangeText={(text)=>this.setState({Username: text})}
            ></TextInput>

            <Text style = {styles.text}>Password</Text>                    
            <TextInput style = {styles.textInput}
            secureTextEntry = {true}
            onChangeText={(text)=>this.setState({Password: text})}
            ></TextInput>
          </View>
          <View style={styles.buttonView}>
            <Button title = "Enter"
             onPress={
               () => fetch('https://indycivichack20190614105720.azurewebsites.net/api/auth/Register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ FirstName: this.state.FirstName, LastName: this.state.LastName, Username: this.state.Username, Password: this.state.Password, UserType: this.state.UserType }),
}).then(response => console.log(response)).catch(err => console.log(err))}></Button>
            <Text style = {styles.forgotPassword}>Forgot Password?</Text>
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
      resizeMode: 'cover',
  },
  textInput:{
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20
  },
  text:{
    marginLeft: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  invisibleView:{
    flex: 1
  },  
  textView:{
    flex: 2
  },
  buttonView:{
    flex: .5,
    marginBottom: 30,
    marginLeft: 70,
    marginRight: 70,
  }, 
  logoView:{
    width: 100,
    height: 100,
    marginTop: 50,
    marginLeft: 130,
  },
  forgotPassword:{
    marginLeft: 55,
    marginTop: 10
  }
});