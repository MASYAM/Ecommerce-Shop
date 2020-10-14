import React from 'react';
import {
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    SafeAreaView,
    RefreshControl,
    ScrollView
} from 'react-native';
import { Container, Content, Button, Text, Footer, Title,Tabs, Tab} from 'native-base'
import { Actions } from 'react-native-router-flux';
import styles from './style'
import UserDetails from '../../../components/legacy/UserDetails';
import SideBar from '../../../components/legacy/DrawerContent';
import { StandardHeader } from '../../../components/legacy/Header';
import { ThemeSettings, ImageSources, ScreenNames } from '../../../constants';
import { CloseButton, ButtonImage, MenuButton } from '../../../components/StandardButtons';
import { RecentProductTab } from './Tabs/RecentProductTab';
import { PopularTab } from './Tabs/PopularTab';
import { connect } from "react-redux";

import { profileActions, authActions } from  '../../../store/actions';
import { ActionStatusTypeValues } from '../../../constants/actionStatusTypes';
import { selectViewActionStatus } from '../../../store/selectors/app';
import { bindActionCreators } from 'redux';

type OwnProps = {
    navigation: NavigationProp;
}

type Props = OwnProps & {
    profileViewRequest: ViewActionStateInfo,
    profileActions: typeof profileActions,
    authActions: typeof authActions,
}
class Userprofile extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: false,
            lastRequest:0,
            lastSent: 0,
            isUserWantToSavedLogin: false,
            isShowAlert:false,
            isShowingSuccessAlert: false,
            recentProductList:[],
            ownedItemList:[],
            refreshing: false,
        };
    }

    refreshContent = () =>{
        this.setState({refreshing: true});
        const { profileActions, navigation } = this.props;
        profileActions.getProfileViewList(navigation.state.key);
    }

    componentDidMount () {
        if(this.state.recentProductList.length == 0){
            this.refreshContent();
        }
    }

    componentDidUpdate(prevProps: Props) {
        const { props, state } = this;
        if (state.lastRequest !== props.profileViewRequest.lastRequest) {                  
            if (props.profileViewRequest.status === ActionStatusTypeValues.ERROR) {
                this.setState({
                    refreshing: false,
                    isLoading: false,
                    lastRequest: props.profileViewRequest.lastRequest,
                }, () => {
                    Toast.show({
                        type: "danger",
                        text:"Sorry, it seems you are facing some technical problem. Please contact IT Support."
                    })
                });
            }
            else if (props.profileViewRequest.status === ActionStatusTypeValues.COMPLETED) {
                console.log(this.props.profileViewStatus);
                console.log(this.props.profileViewStatusprofileViewErrorMessage);
                if(this.props.profileViewStatus==="success"){

                    this.setState({
                        refreshing: false,
                        isLoading: false,
                        lastRequest: props.profileViewRequest.lastRequest,
                        recentProductList: this.props.recentProductList,
                        ownedItemList: this.props.ownedItemList,
                    }, () => {

                    });

                }else{
                    this.setState({
                        refreshing: false,
                        isLoading: false,
                        isShowAlert:true,
                        lastRequest: props.profileViewRequest.lastRequest,
                    }, () => {
                    });
                }
            }          
        }
    }

    onPress = (productId) => {
        console.log('Product Id >>');
        console.log(productId);

        this.props.navigation.navigate(ScreenNames.ClothesDetail, {
            productId: productId
          });
    }

    openDrawer() {
        this.drawer._root.open()
    };
    render() {
        return (
            <Container style={styles.profilePageStyle}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.refreshContent}
                        />
                    }
                >
                    <ImageBackground
                        source={require("../../../../assets/profileBG.png")}
                        resizeMode="cover"
                        style={styles.backgroundImage}
                        imageStyle={styles.backgroundImage_imageStyle}
                    >
                        <StandardHeader  />
                        <SafeAreaView style={styles.menubuttoncontainer}>
                            <MenuButton bg rounded onPress={() => Actions.drawerOpen()} />
                        </SafeAreaView>
                        <View style={styles.profileContainer}>
                            <Text style={styles.profileName}>{this.props.loginProfile.username}</Text>
                            <Text style={styles.profileIntroduce}>Last Login: {this.props.loginProfile.lastLogonTime}</Text>
                            <Tabs tabBarUnderlineStyle={{ backgroundColor: ThemeSettings.primaryColor }}>
                                <Tab
                                    activeTabStyle={{ backgroundColor: 'white' }}
                                    heading="Recent"
                                    activeTextStyle={{ color: 'black', fontSize: 15 }}
                                    tabStyle={{ backgroundColor: 'white' }}
                                    textStyle={{ color: ThemeSettings.inputPlaceholderColor, fontSize: 12 }}
                                >
                                    <RecentProductTab productList={this.state.recentProductList} navigation={this.props.navigation} navigation1={this.props.navigation1} onPress={this.onPress}/>
                                </Tab>
                                <Tab
                                    activeTabStyle={{ backgroundColor: 'white' }}
                                    heading="Owned Item"
                                    tabStyle={{ backgroundColor: 'white' }}
                                    textStyle={{ color: ThemeSettings.inputPlaceholderColor, fontSize: 12 }}
                                    activeTextStyle={{ color: 'black', fontSize: 12 }}
                                >
                                    <PopularTab productList={this.state.ownedItemList} navigation={this.props.navigation} navigation1={this.props.navigation1} onPress={this.onPress}/>
                                </Tab>
                            </Tabs>
                        </View>
                            <View style={styles.userProfilePicWrap}>
                            <Image style={styles.userImage}  source={{ uri: this.props.loginProfile.profilePicture  }} />
                                {/* <View style={styles.cameraButton}>
                                    <Icon name="camera" type="MaterialCommunityIcons" style={styles.cameraIcon} />
                                </View> */}
                            </View>
                    </ImageBackground>
                </ScrollView>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps: OwnProps) => {
    const { navigation } = ownProps;
    return {
        recentProductList: state.profile.recentProductList,
        ownedItemList: state.profile.ownedItemList,
        profileViewStatus: state.profile.profileViewStatus,
        profileViewErrorMessage: state.profile.profileViewErrorMessage,
        profileViewRequest: selectViewActionStatus(state, navigation.state.key, profileActions.PROFILE_LIST),
        loginProfile: state.auth.loginProfile,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        profileActions: bindActionCreators(profileActions, dispatch),
        authActions: bindActionCreators(authActions, dispatch),

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Userprofile);