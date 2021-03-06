import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import * as firebase from 'firebase'


export default class LoginScreen extends React.Component {
    
    state= {
        email: "",
        password: "",
        errorMessage: null
    };
    
    handleLogin = () => {
        const {email,password} = this.state
        firebase.auth().signInWithEmailAndPassword(email,password).catch(error => this.setState({errorMessage: error.message}));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>
                    {'Vous êtes de retour.\nConnectez-vous !'}
                </Text>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}> {this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Adresse Mail</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none" 
                            onChangeText={email=> this.setState({email})}
                            value={this.state.email}
                        >
                        
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 32}}>
                        <Text style={styles.inputTitle}>Mot de passe</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry 
                            autoCapitalize="none"
                            onChangeText={password=> this.setState({password})}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf: "center", marginTop: 40}} onPress={() => this.props.navigation.navigate("Register")}>
                    <Text style={{color: "#FFFFFF", fontSize: 13}}>
                        Nouveau sur SmarkParkApp ? <Text style={{ fontWeight: "300", color: "#0B0B3B"}}>Inscription</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles =StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: "#E9446A",
   },
   greeting: {
       marginTop: 32,
       fontSize: 18,
       fontWeight:"500",
       textAlign:"center",
       color: "#FFFFFF"
   },
   errorMessage: {
       height: 72,
       alignItems: "center",
       marginHorizontal: 30
   },
   error: {
       color: "#E9446A",
       fontSize: 13,
       fontWeight: "600",
       textAlign: "center"
   },
   form: {
       marginBottom: 48,
       marginHorizontal: 30
   },
   inputTitle: {
       color: "#FFFFFF",
       fontSize: 10,
       textTransform: "uppercase"
   },
   input: {
       borderBottomColor: "#8A8F9E",
       borderBottomWidth: StyleSheet.hairlineWidth,
       height: 40,
       fontSize: 15,
       color: "#161F30"
   },
   button: {
    marginHorizontal: 30,
    backgroundColor: "#0B0B3B",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
},

})