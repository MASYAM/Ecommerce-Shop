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
    registerRequest: ViewActionStateInfo,
    authActions: typeof authActions,
}
class RegisterScreen extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: false,
            lastRequest:0,
            lastSent: 0,
            isAgreeTNC: false,
            isShowAlert:false,
            isShowingSuccessAlert: false
        };
    }

    closeDialog=()=>{
        this.setState({
            isShowAlert:false
        });
    }
    doAgreeTNC=()=>{
        this.setState({
            isAgreeTNC: !this.state.isAgreeTNC
        });
    }

    doLoginNow=() =>{
       const {  navigation } = this.props;
       navigation.replace(ScreenNames.LoginScreen);       
    }

    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
           return false;
        }
        else {
            return true;

        }
    }

    doRegister = () => {
        if ( !this.username || !this.email || !this.password || !this.confirmPassword) {
            Toast.show({
                type: "danger",
                text: 'Please enter username, email ,password  and confirm password',
            });
        }else if( this.validate(this.email) == false){
            Toast.show({
                type: "danger",
                text: 'Your email address is not a correct format',
            });
        
        }else if(this.password !== this.confirmPassword){
            Toast.show({
                type: "danger",
                text: 'Your confirm password is not matching with your password',
            });
        
        }else if(!this.state.isAgreeTNC){
            Toast.show({
                type: "danger",
                text: 'You need to agree the terms and condition before register',
            });
        
        }
        else{
            this.processSubmitForm();
        }   
    }

    processSubmitForm = () =>{
        this.setState({
            isLoading: true
        });
        Keyboard.dismiss();
        const { authActions, navigation } = this.props;
        authActions.registerAccount(navigation.state.key, this.username, this.email, this.password);
    }

    doNext = () => {
        Keyboard.dismiss();
        const { navigation} = this.props;
        const action = StackActions.reset({
            index:0,
            actions: [
                StackActions.replace({
                    routeName: ScreenNames.root,
                    actions: [

                StackActions.push({
                    routeName: ScreenNames.AppMain,
                })
                    ]
                }),
            ],
        })
        navigation.dispatch(action);
    }

    componentDidUpdate(prevProps: Props) {
        const { props, state } = this;

        if (state.lastRequest !== props.registerRequest.lastRequest) {
            if (props.registerRequest.status === ActionStatusTypeValues.ERROR) {
                this.setState({
                    isLoading: false,
                    lastRequest: props.registerRequest.lastRequest,
                }, () => {
                    Toast.show({
                        type: "danger",
                        text:"Sorry, it seems you are facing some technical problem. Please contact IT Support."
                    })
                });
            }
            else if (props.registerRequest.status === ActionStatusTypeValues.COMPLETED) {
                console.log(this.props.registerStatus);
                console.log(this.props.registerErrorMessage);
                if(this.props.registerStatus==="success"){
                    this.setState({
                        isLoading: false,
                        isShowingSuccessAlert: true,
                        lastRequest: props.registerRequest.lastRequest,
                    }, () => {
                        // if (props.isPhoneVerified) {
                        //     Actions.push(ScreenNames.ActivationComplete);
                        // } else {
                        //     Actions.push(ScreenNames.PhoneVerification);
                        // }
                    });
                }else{
                    this.setState({
                        isLoading: false,
                        isShowAlert:true,
                        lastRequest: props.registerRequest.lastRequest,
                    }, () => {   
                        // if (props.isPhoneVerified) {
                        //     Actions.push(ScreenNames.ActivationComplete);
                        // } else {
                        //     Actions.push(ScreenNames.PhoneVerification);
                        // }
                    });
                }
            }
        }
    }

    render() {
        const { props } = this;
        const isCompleteSubmit = props.registerRequest.status === ActionStatusTypeValues.COMPLETED;
        const registerStatus = props.registerStatus;
        const registerErrorMessage = props.registerErrorMessage;

        return (
            <Container style={styles.registerBackgroundStyle}>
                <StandardHeader back />
                <Content>
                    <View style={styles.body}>
                        <View style={styles.descWrap}>
                            <Text style={styles.txt}>Create Account</Text>
                        </View>
                        <View style={styles.formInputContainer}>      
                            <Text style={styles.inputHeader}>Your name</Text>
                            <TextInput 
                                ref= {(el) => { this.usernameInput = el; }}
                                onChangeText={(text) => this.username = text}
                                id="username" 
                                placeholder='Name' 
                                autoCapitalize = 'none'
                                style={styles.textInputStyle}></TextInput>
            
                            <Text style={styles.inputHeader}>Your email</Text>
                            <TextInput 
                                ref= {(el) => { this.emailInput = el; }}
                                onChangeText={(text) => this.email = text}
                                id="email" 
                                placeholder='Email' 
                                autoCompleteType={'email'}
                                autoCapitalize = 'none'
                                style={styles.textInputStyle}></TextInput>

                            <Text style={styles.inputHeader}>Your password</Text>
                            <TextInput 
                                ref= {(el) => { this.passwordInput = el; }}
                                onChangeText={(text) => this.password = text}
                                id="password" 
                                placeholder='Password' 
                                autoCompleteType={'password'}
                                secureTextEntry={true} 
                                style={styles.textInputStyle}></TextInput>

                            <Text style={styles.inputHeader}>Your confirm password</Text>
                            <TextInput 
                                ref= {(el) => { this.confirmPasswordInput = el; }}
                                onChangeText={(text) => this.confirmPassword = text}
                                id="password" 
                                placeholder='Password again' 
                                autoCompleteType={'password'}
                                secureTextEntry={true} 
                                style={styles.textInputStyle}>
                            </TextInput>

                            <ListItem style={styles.tncstyle} >
                                <CheckBox
                                color="#000"
                                checked={this.state.isAgreeTNC}
                                onPress={() => this.doAgreeTNC()}
                                />
                                    <Body>
                                        <Text>I agree to the terms</Text>
                                    </Body>
                            </ListItem>
                        </View>
            
                        <View style={styles.bottomLayerFiller}></View>
                        <View style={styles.bottomLayer}>
                            <Button transparent full style={styles.btnLogin} onPress={this.doRegister}>
                                <Text style={styles.btnLoginTextStyle} large>Sign Up</Text>
                            </Button>  
                            {/* <Button transparent full style={styles.btnLoginFacebook} onPress={this.doRegister}>
                                <Text style={styles.btnLoginfacebookTextStyle} large>Sign Up with Facebook</Text>
                            </Button> */}
                        </View>      
                    </View>
                </Content>
            
                {this.state.isLoading ? (
                    <View style={styles.loadingDialog}>
                        <ActivityIndicator style={styles.loadingStyle} size="large" color={'white'} />
                    </View>
                ) : null}

                { this.state.isShowingSuccessAlert ? (
                    <View style={styles.registerSuccessDialog} >
                        <View style={styles.sucessWordingsContainer}>
                            <Text style={styles.sucessHeading}>Register Success</Text>
                            <Text style={styles.sucessDescription}>Please your email for verify your email account.</Text>
                            <Button transparent full style={styles.btnLogonNow} onPress={this.doLoginNow}>
                                <Text style={styles.btnLogonNowTextStyle} large>Log in Now!</Text>
                            </Button> 
                        </View>
                    
                    </View>
                ) : null}

                { this.state.isShowAlert  ? (
                    <View style={styles.registerSuccessDialog} >
                            <View style={styles.sucessWordingsContainer}>
                                    <Text style={styles.errorHeading}>Error</Text>
                                    <Text style={styles.sucessDescription}>{registerErrorMessage}</Text>
                                    <Button transparent full style={styles.btnLogonNow} onPress={this.closeDialog}>
                                        <Text style={styles.btnLogonNowTextStyle} large>Close</Text>
                                    </Button> 
                            </View>
                    
                    </View>
                ) : null}
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps: OwnProps) => {
    const { navigation } = ownProps;
    return {
        registerStatus: state.auth.registerStatus,
        registerErrorMessage: state.auth.registerErrorMessage,
        registerRequest: selectViewActionStatus(state, navigation.state.key, authActions.REGISTER_ACCOUNT),
    };
};
const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);