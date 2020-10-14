import React from 'react'
import {
    View,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    Image,
    Vibration,
    Keyboard,
} from 'react-native'
import { Container, Content, Button, Text, Footer, Title, } from 'native-base'

import { Actions } from 'react-native-router-flux'
import styles from './style'
import { ScreenNames } from '../../../constants/Screens'
import { ImageSources } from '../../../constants'

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { NavigationActions, StackActions, NavigationProp } from 'react-navigation';

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';


type OwnProps = {
    navigation: NavigationProp;
}

type Props = OwnProps & {
    userId: string,
    isPhoneVerified: boolean
}
class LandingView extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
            expoPushToken: '',
            notification: {},
            isLoading: false,
            lastRequest:0,
            lastSent: 0,
            isUserWantToSavedLogin: false,
            isShowAlert:false,
            isShowingSuccessAlert: false
        };
    }

    registerForPushNotificationsAsync = async () => {
        if (Constants.isDevice) {
          const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = await Notifications.getExpoPushTokenAsync();
          console.log(token);
          this.setState({ expoPushToken: token });
        } else {
          //alert('Must use physical device for Push Notifications');
        }
    
        if (Platform.OS === 'android') {
          Notifications.createChannelAndroidAsync('default', {
            name: 'default',
            sound: true,
            priority: 'max',
            vibrate: [0, 250, 250, 250],
          });
        }
    };

    componentDidMount() {
      this.registerForPushNotificationsAsync();
      this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }
  
    _handleNotification = notification => {
      Vibration.vibrate();
      console.log(notification);
      this.setState({ notification: notification });
    };     

    doStart = () => {        
        Actions.push(ScreenNames.LoginScreen);

    }
    doRegister = () => {
         Actions.push(ScreenNames.RegisterScreen);
    }
    
    render() {
        return (
            <Container style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    translucent={true}
                />
                <ImageBackground
                  source={ImageSources.LandingBg}
                  resizeMode="cover"
                  style={styles.backgroundImage}
                  imageStyle={styles.backgroundImage_imageStyle}
                >
                  <View style={styles.bottomLayerFiller}></View>
                  <View style={styles.bottomLayer}>
                    <Text style={styles.appTitle}>E-commerce Shop</Text>
                    <Text style={styles.moto}>Find your desire design</Text>
                    <View style={styles.buttonContainer}>  
                          <Button full  style={styles.btnLogin} onPress={this.doStart}>
                                  <Text style={styles.btnLoginTextStyle} large>Login</Text>
                              </Button>                      
                              <Button  full  style={styles.btnRegister} onPress={this.doRegister}>
                                  <Text style={styles.btnRegisterTextStyle} large >Register</Text>
                            </Button>
                                  
                    </View>
                  </View>
                </ImageBackground>
            </Container>
        )
    }
}

export default LandingView;