import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: '',
      Password: '',
      Name: '',
      ConfirmPassword: '',
      IsModalVisible: false,
    };
  }

  SignUp = (email, password, confirmPassword) => {
    if (password == confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection('Users').add({
            Name: this.state.Name,
            Email: this.state.Email,
          });
          return Alert.alert('User has been added succesfully', '', [
            {
              text: 'OK',
              onPress: () => this.setState({ IsModalVisible: false }),
            },
          ]);
        })
        .catch(function (error) {
          Alert.alert(error);
        });
    } else {
      Alert.alert("Password doesn't match \n please check your password");
    }
  };

  LogIn = (email, password) => {
    console.log('start ' + email + ' ' + password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        Alert.alert('User has been Logged in succesfully');
        this.props.navigation.navigate('Decider');
      })
      .catch(function (error) {
        Alert.alert(error);
      });
    console.log('end ' + email + ' ' + password);
  };

  showModal = () => {
    return (
      <View>
        <Modal
          visible={this.state.IsModalVisible}
          animationType={'fade'}
          transparent={true}>
          <View style={styles.modalContainer}>
            <ScrollView>
              <KeyboardAvoidingView>
                <Text style={styles.modalTitle}>Registeration</Text>

                <TextInput
                  style={styles.modalInput}
                  placeholder={'Name'}
                  onChangeText={(text) => {
                    this.setState({ Name: text });
                  }}
                  maxLength={30}></TextInput>

                <TextInput
                  style={styles.modalInput}
                  placeholder={'Email'}
                  onChangeText={(text) => {
                    this.setState({ Email: text });
                  }}
                  maxLength={30}></TextInput>

                <TextInput
                  style={styles.modalInput}
                  placeholder={'Password'}
                  onChangeText={(text) => {
                    this.setState({ Password: text });
                  }}
                  maxLength={30}></TextInput>

                <TextInput
                  style={styles.modalInput}
                  placeholder={'Confirm Password'}
                  onChangeText={(text) => {
                    this.setState({ ConfirmPassword: text });
                  }}
                  maxLength={30}></TextInput>

                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() => {
                    this.SignUp(
                      this.state.Email,
                      this.state.Password,
                      this.state.ConfirmPassword
                    );
                  }}>
                  <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() => {
                    this.setState({
                      Email: '',
                      Password: '',
                      Name: '',
                      ConfirmPassword: '',
                      IsModalVisible: false,
                    });
                  }}>
                  <Text style={styles.registerText}>Cancel</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  };

  render() {
    return (
      <View style={{ backgroundColor: '#FCFEFF', height: 800 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '500',
            color: 'black',
            marginTop: 50,
            marginLeft: 65,
          }}>
          Activity Decider
        </Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {this.showModal()}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 300,
          }}>
          <Image style={styles.img} source={require('../assets/Spinner.png')} />
          <TextInput
            style={styles.inputBox}
            placeholder="Enter Email"
            onChangeText={(text) => {
              this.setState({ Email: text });
            }}
            keyboardType="email-address"></TextInput>

          <TextInput
            style={styles.inputBox}
            placeholder="Enter Password"
            onChangeText={(text) => {
              this.setState({ Password: text });
            }}
            secureTextEntry={true}></TextInput>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.setState({ IsModalVisible: true });
            }}>
            <Text style={styles.btntxt}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              console.log('start');
              this.LogIn(this.state.Email, this.state.Password);
              console.log('end');
            }}>
            <Text style={styles.btntxt}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    width: 300,
    height: 50,
    borderWidth: 5,
    paddingLeft: 20,
    fontSize: 20,
    borderColor: '#FCD109',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#E40513',
    width: 200,
    height: 50,
    justfyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 25,
    margin: 10,
  },
  btntxt: {
    fontSize: 20,
    fontWeight: '900',
    paddingTop: 10,
    color: 'white',
  },
  modalTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 28,
    color: 'black',
    margin: 50,
    marginLeft: 65,
  },
  modalContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 30,
    backgroundColor: '#44B0DE',
  },
  modalInput: {
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 5,
    marginTop: 20,
    padding: 10,
    borderColor: '#FCD109',
  },
  registerButton: {
    backgroundColor: '#E40513',
    width: 200,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 45,
  },
  registerText: {
    fontSize: 15,
    font: 'bold',
  },
  img: {
    width: 333,
    height: 206,
    alignSelf: 'center',
  },
});