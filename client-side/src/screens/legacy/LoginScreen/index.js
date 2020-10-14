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
    loginRequest: ViewActionStateInfo,
    authActions: typeof authActions,
}
class LoginScreen extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: false,
            lastRequest:0,
            lastSent: 0,
            isUserWantToSavedLogin: false,
            isShowAlert:false,
            isShowingSuccessAlert: false
        };
    }

    backToRoot=() =>{
        const { navigation} = this.props;
        navigation.pop();
    }

    closeDialog=()=>{
        this.setState({
            isShowAlert:false
        });
    }

    doSaveLogin=()=>{
        this.setState({
            isUserWantToSavedLogin: !this.state.isUserWantToSavedLogin
        });
    }

    successLoginAction = () =>{
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

    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
           return false;
        }
        else {
            return true;

        }
    }

    doLoginNow = () => {
        if (  !this.email || !this.password ) {
            Toast.show({
                type: "danger",
                text: 'Please enter email and password',
            });
        }else if( this.validate(this.email) == false){
            Toast.show({
                type: "danger",
                text: 'Your email address is not a correct format',
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
        authActions.login(navigation.state.key, this.email, this.password);
    }

    componentDidUpdate(prevProps: Props) {
        const { props, state } = this;
        if (state.lastRequest !== props.loginRequest.lastRequest) {
            if (props.loginRequest.status === ActionStatusTypeValues.ERROR) {
                this.setState({
                    isLoading: false,
                    lastRequest: props.loginRequest.lastRequest,
                }, () => {
                    Toast.show({
                        type: "danger",
                        text:"Sorry, it seems you are facing some technical problem. Please contact IT Support."
                    })
                });
            }
            else if (props.loginRequest.status === ActionStatusTypeValues.COMPLETED) {
                console.log(this.props.loginStatus);
                console.log(this.props.loginErrorMessage);
                if(this.props.loginStatus==="success"){

                    this.setState({
                        isLoading: false,
                        isShowingSuccessAlert: true,
                        lastRequest: props.loginRequest.lastRequest,
                    }, () => {
    
                    });

                }else{
                    this.setState({
                        isLoading: false,
                        isShowAlert:true,
                        lastRequest: props.loginRequest.lastRequest,
                    }, () => {
                    });
                }
            }
        }
    }

    render() {
        const { props } = this;
        const isCompleteSubmit = props.loginRequest.status === ActionStatusTypeValues.COMPLETED;
        const loginStatus = props.loginStatus;
        const loginErrorMessage = props.loginErrorMessage;

        return (
            <Container style={styles.registerBackgroundStyle}>
                <StandardHeader back />
                {/* <StandardHeader back /> */}
                <Content>
                    <View style={styles.body}>
                        <View style={styles.descWrap}>
                            <Text style={styles.txt}>Account Login</Text>
                        </View>

                        <View style={styles.formInputContainer}>
                            <Text style={styles.inputHeader}>Your email</Text>
                            <TextInput 
                                ref= {(el) => { this.emailInput = el; }}
                                onChangeText={(text) => this.email = text}
                                id="email"
                                autoCapitalize = 'none'
                                placeholder='Email' 
                                autoCompleteType={'email'}
                                style={styles.textInputStyle}>                                  
                            </TextInput>
                               
                            <Text style={styles.inputHeader}>Your password</Text>
                            <TextInput 
                                ref= {(el) => { this.passwordInput = el; }}
                                onChangeText={(text) => this.password = text}
                                id="password" 
                                placeholder='Password' 
                                autoCompleteType={'password'}
                                secureTextEntry={true} 
                                style={styles.textInputStyle}>
                            </TextInput>
                
                            <ListItem style={styles.tncstyle} >
                                <CheckBox
                                color="blue"
                                checked={this.state.isUserWantToSavedLogin}
                                onPress={() => this.doSaveLogin()}
                                />
                                    <Body>
                                        <Text>Keep me Logged In</Text>
                                    </Body>
                            </ListItem>
                        </View>
                        <View style={styles.bottomLayerFiller}></View>
                        <View style={styles.bottomLayer}>
                            <Button transparent full  style={styles.btnLogin} onPress={this.doLoginNow}>
                                <Text style={styles.btnLoginTextStyle} large>Login</Text>
                            </Button>                                  
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
                            <Text style={styles.sucessHeading}>Welcome</Text>
                            <Button transparent full style={styles.btnLogonNow} onPress={this.successLoginAction}>
                                <Text style={styles.btnLogonNowTextStyle} large>Go Shopping Now!</Text>
                            </Button> 
                        </View>                   
                    </View>
                ) : null}

                { this.state.isShowAlert  ? (
                    <View style={styles.registerSuccessDialog} >
                        <View style={styles.sucessWordingsContainer}>
                            <Text style={styles.errorHeading}>Error</Text>
                            <Text style={styles.sucessDescription}>{loginErrorMessage}</Text>
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
        loginStatus: state.auth.loginStatus,
        loginErrorMessage: state.auth.loginErrorMessage,
        loginRequest: selectViewActionStatus(state, navigation.state.key, authActions.LOGIN_ACCOUNT),
    };
};
const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);