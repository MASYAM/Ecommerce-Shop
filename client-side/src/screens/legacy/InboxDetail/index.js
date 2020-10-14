import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    InteractionManager,
    SafeAreaView,
    Dimensions,
    Linking   
} from 'react-native';
import styles from './style';
import MapView from "react-native-map-clustering";
import {
    Container,
    Tab,
    Tabs,
    Content, Form, Item, Picker, Button,
    Toast
} from 'native-base';
import { Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeSettings, Colors, ImageSources, ScreenNames } from '../../../constants';
import { Basement } from '../../../components/Basement';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ClothesDetailSlide from '../../../components/legacy/ClothesDetailSlide';
import ShoppingCartPriceRow from '../../../components/legacy/ShoppingCartPriceRow';
import InobxMessageItem from '../../../components/legacy/InobxMessageItem';
import { StandardHeader } from '../../../components/legacy/Header';
import { ScrollView } from 'react-native-gesture-handler';

import { CloseButton, ButtonImage, MenuButton } from '../../../components/StandardButtons';

import { WebView } from 'react-native-webview';

import { inboxActions } from  '../../../store/actions';
import { ActionStatusTypeValues } from '../../../constants/actionStatusTypes';
import { selectViewActionStatus } from '../../../store/selectors/app';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

type OwnProps = {
    navigation: NavigationProp;
}

type Props = OwnProps & {
    inboxDetailRequest: ViewActionStateInfo,
    inboxActions: typeof inboxActions
}
class InboxDetail extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: false,
            lastRequest:0,
            lastSent: 0,
            isUserWantToSavedLogin: false,
            isShowAlert:false,
            isShowingSuccessAlert: false,
            inboxDetail:null,
        };
    }

    componentDidUpdate(prevProps: Props) {
        const { props, state } = this;
        if (state.lastRequest !== props.inboxDetailRequest.lastRequest) {   
            if (props.inboxDetailRequest.status === ActionStatusTypeValues.ERROR) {
                this.setState({
                    isLoading: false,
                    lastRequest: props.inboxDetailRequest.lastRequest,
                }, () => {
                    Toast.show({
                        type: "danger",
                        text:"Sorry, it seems you are facing some technical problem. Please contact IT Support."
                    })
                });
            }
            else if (props.inboxDetailRequest.status === ActionStatusTypeValues.COMPLETED) {
                if(this.props.inboxDetailStatus==="success"){

                    this.setState({
                        isLoading: false,
                        lastRequest: props.inboxDetailRequest.lastRequest,
                        inboxDetail: this.props.inboxDetail,
                    }, () => {

                    });

                }else{
                    this.setState({
                        isLoading: false,
                        isShowAlert:true,
                        lastRequest: props.inboxDetailRequest.lastRequest,
                    }, () => {
                    });
                }
            }          
        }
    }

    componentDidMount () {
        if(this.state.inboxDetail == null){
            const { inboxActions, navigation } = this.props;
            const id =  this.props.navigation.getParam('id');
            inboxActions.getInboxDetail(navigation.state.key, id);
        }
    }

    onValueChangeColor(value: string) {
        this.setState({
          selectedColor: value
        });
    }

    goCheckoutScreen = () => {
        this.props.navigation.navigate(ScreenNames.CheckoutScreen);
    }

    _onError = evt => {
        console.log('_onError', evt);
      };
    _onShouldStartLoadWithRequest = evt => {
      const { openUrlFailure } = this;
  
      const { url } = evt;

      const isExternalBrowserAllowed =
        [
          'mailto:',
          'http://',
          'https://',
        ].filter(whitelistUrl => {
          return String(url).substr(0, whitelistUrl.length) === whitelistUrl;
        }).length > 0;
  
      const isAppBrowserAllowed =
        [
        ].filter(whitelistUrl => {
          return String(url).substr(0, whitelistUrl.length) === whitelistUrl;
        }).length > 0;
  
      if (isAppBrowserAllowed) {
        return true;
      }
  
      if (isExternalBrowserAllowed) {
        if (Linking.canOpenURL(url)) {
          Linking.openURL(url)
            .then(() => { })
            .catch(error => {
              openUrlFailure();
            });
          return false;
        }
      }  
        openUrlFailure();
        return false;
      };
    
      openUrlFailure = () => {
        Alert.alert(
          'Sorry',
          'We cannot open this link from this device.\nPress okay to open our enquiry form details.',
          [
            {
              text: I18n.t('okay_button'),
              style: 'default',
            },
            { text: I18n.t('cancel_button'), style: 'cancel' },
          ],
        );
      };

    render() {
        return (
            <Basement>
                <StandardHeader back />
                <ScrollView>                 
                  <View style={styles.shoppingCartContainer}>
                       <View style={styles.titleContainer}>
                           <Text style={styles.titleStyle}>Inbox Detail</Text>
                       </View>                
                        { this.props.inboxDetail  ? (
                        <View >
                        <Text style={styles.pageTitle}>{this.props.inboxDetail.title} </Text>  
                        {/* <WebView
                                originWhitelist={['*']}
                        onError={this._onError}
                        style={{ flex: 1, backgroundColor: Colors.supportingBgColor }}
                        source={{html: this.props.inboxDetail.htmlContent}}
                        /> */}
                        <Text>{this.props.inboxDetail.content}</Text>
                        </View>
                        ) : null}                                        
                  </View>
                </ScrollView>                   
            </Basement> 
        );
    }
}

const mapStateToProps = (state, ownProps: OwnProps) => {
    const { navigation } = ownProps;
    return {
        inboxDetail: state.inbox.inboxDetail,
        inboxDetailStatus: state.inbox.inboxDetailStatus,
        inboxDetailErrorMessage: state.inbox.inboxDetailErrorMessage,
        inboxDetailRequest: selectViewActionStatus(state, navigation.state.key, inboxActions.INBOX_DETAIL),
    };
};
const mapDispatchToProps = dispatch => {
    return {
        inboxActions: bindActionCreators(inboxActions, dispatch),

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(InboxDetail);