import React from 'react'
import {
    View,
    TextInput,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    StatusBar,
    ImageBackground,
    Alert
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Header, Container, Content, Button, Text, Toast , Spinner, CheckBox, Radio, ListItem, Left, Right, Body} from 'native-base'
import { NavigationActions, StackActions, NavigationProp } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Input } from 'react-native-elements';
import styles from './style'
import { ScreenNames, ImageSources } from '../../../constants'
import { BackButton } from '../../../components/StandardButtons'
import { StandardHeader } from '../../../components/legacy/Header';
import { authActions } from  '../../../store/actions';
import { ActionStatusTypeValues } from '../../../constants/actionStatusTypes';
import { selectViewActionStatus } from '../../../store/selectors/app';

type OwnProps = {
    navigation: NavigationProp;
}

type Props = OwnProps & {
    checkLoginRequest: ViewActionStateInfo,
    authActions: typeof authActions,
}
class StartupScreen extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      isLoading: false,
      lastRequest:0,
      lastSent: 0,
      errorMessage: null,
    }
  }

  componentDidMount() {
    setTimeout(
      () => { this.tryLogin() },
      3000
    );
    // this.props.navigation.navigate( );
  }

  componentDidUpdate(prevProps: Props) {
    const { props, state } = this;
    if (state.lastRequest !== props.checkLoginRequest.lastRequest) {
        if (props.checkLoginRequest.status === ActionStatusTypeValues.ERROR) {
          this.props.navigation.navigate(ScreenNames.Landing);
        }
        else if (props.checkLoginRequest.status === ActionStatusTypeValues.COMPLETED) {
          //Login Success
          this.props.navigation.replace(ScreenNames.AppMain);
        }
    }
  }

  tryLogin = async () => {
    const { authActions, navigation } = this.props;
    authActions.checkLogin(navigation.state.key);
    /*
    const userData = await AsyncStorage.getItem('userData');
    if (userData) 
    {
      const transformedData = JSON.parse(userData);
      if (transformedData.token) 
      {
        this.props.navigation.navigate(ScreenNames.AppMain);
        return;
      }
      else
      {
        this.props.navigation.replace(ScreenNames.Landing);
        return;
      }
    }
    else
    {
      this.props.navigation.replace(ScreenNames.Landing);
      return;
    }
    */

    /*
    if (userData.token) {
      const transformedData = JSON.parse(userData);
      const { token, userId, isPhoneVerified } = transformedData;
     // if (token && userId && isPhoneVerified) {
      if (token && userId ) {
       
      }
    }else{
       
    }
    */
  };

  render() {
      return (
          <Container style={styles.container}>
              <StatusBar
              barStyle="light-content"
              translucent={true}
              />
              <ImageBackground
                source={ImageSources.StartUpBg}
                resizeMode="cover"
                style={styles.backgroundImage}
                imageStyle={styles.backgroundImage_imageStyle}
              >
                <View style={styles.bottomLayerFiller}></View>
                    <View style={styles.bottomLayer}>
                    <Text style={styles.appTitle}>E-commerce Shop</Text>
                    <Text style={styles.moto}>Find your desire design</Text>
                    <ActivityIndicator style={styles.loadingStyle} size="large" color={'white'} />
                    <Text style={styles.moto}>Loading ...</Text>
                </View>
              </ImageBackground>
          </Container>
      );
  }

};

const mapStateToProps = (state, ownProps: OwnProps) => {
  const { navigation } = ownProps;
  return {
      checkLoginRequest: selectViewActionStatus(state, navigation.state.key, authActions.CHECK_LOGIN),
  };
};
const mapDispatchToProps = dispatch => {
  return {
      authActions: bindActionCreators(authActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StartupScreen);