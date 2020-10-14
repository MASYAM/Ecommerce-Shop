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
    RefreshControl
    
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
import { ThemeSettings, ImageSources, ScreenNames } from '../../../constants';
import { Basement } from '../../../components/Basement';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ClothesDetailSlide from '../../../components/legacy/ClothesDetailSlide';
import ShoppingCartPriceRow from '../../../components/legacy/ShoppingCartPriceRow';
import InobxMessageItem from '../../../components/legacy/InobxMessageItem';
import { StandardHeader } from '../../../components/legacy/Header';
import { ScrollView } from 'react-native-gesture-handler';

import { CloseButton, ButtonImage, MenuButton } from '../../../components/StandardButtons';

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
    inboxListRequest: ViewActionStateInfo,
    inboxActions: typeof inboxActions
}
class InboxMessage extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: false,
            lastRequest:0,
            lastSent: 0,
            isUserWantToSavedLogin: false,
            isShowAlert:false,
            isShowingSuccessAlert: false,
            inboxlist:[],
            refreshing: false,
        };
    }

    componentDidUpdate(prevProps: Props) {
        const { props, state } = this;
        if (state.lastRequest !== props.inboxListRequest.lastRequest) {         
            if (props.inboxListRequest.status === ActionStatusTypeValues.ERROR) {
                this.setState({
                    isLoading: false,
                    refreshing: false,
                    lastRequest: props.inboxListRequest.lastRequest,
                }, () => {
                    Toast.show({
                        type: "danger",
                        text:"Sorry, it seems you are facing some technical problem. Please contact IT Support."
                    })
                });
            }
            else if (props.inboxListRequest.status === ActionStatusTypeValues.COMPLETED) {
                if(this.props.inboxListStatus==="success"){

                    this.setState({
                        isLoading: false,
                        refreshing: false,
                        lastRequest: props.inboxListRequest.lastRequest,
                        inboxlist: this.props.inboxlist,
                    }, () => {

                    });

                }else{
                    this.setState({
                        isLoading: false,
                        isShowAlert:true,
                        refreshing: false,
                        lastRequest: props.inboxListRequest.lastRequest,
                    }, () => {
                    });
                }
            }          
        }
    }

    refreshContent = () =>{
        this.setState({refreshing: true});
        const { inboxActions, navigation } = this.props;
        inboxActions.getInboxMessageList(navigation.state.key);
  
    }

    componentDidMount () {
        if(this.state.inboxlist.length == 0){
            this.refreshContent();
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

    onPressViewDetail = ( id) => {
        console.log("onPressViewDetail   >>>"+id);
        this.props.navigation.navigate(ScreenNames.InboxDetail, {
            id,
          });
    }

    render() {
        return (
            <Basement>
                <StandardHeader  />
                <SafeAreaView style={styles.menubuttoncontainer}>
                    <MenuButton bg rounded onPress={() => Actions.drawerOpen()} />
                </SafeAreaView>

                <ScrollView
                   refreshControl={
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this.refreshContent}
                    />
                  }
                >
                  
                  <View style={styles.shoppingCartContainer}>
                       <View style={styles.titleContainer}>
                           <Text style={styles.titleStyle}>Inbox Message</Text>
                       </View>
                   
                       { this.props.inboxlist.map((item, key) => {
                        return (
                            <InobxMessageItem key={key}
                                id={item.id}
                                icon={item.icon}
                                title={item.title}
                                subTitle={item.subTitle}
                                createDateTime={item.createDateTime}
                                onPressViewDetail={this.onPressViewDetail}
                                isRead={item.isRead}
                            />
                        );
                        }) }
    
                        {this.props.inboxlist.length==0 ?
                            <View>
                                <Text>You didn't any message yet.</Text>
                            </View>
                            :
                            <View></View>
                        }                                      
                  </View>
                </ScrollView>
            </Basement> 
        );
    }
}

const mapStateToProps = (state, ownProps: OwnProps) => {
    const { navigation } = ownProps;
    return {
        inboxlist: state.inbox.inboxlist,
        inboxListStatus: state.inbox.inboxListStatus,
        inboxListErrorMessage: state.inbox.inboxListErrorMessage,
        inboxListRequest: selectViewActionStatus(state, navigation.state.key, inboxActions.INBOX_LIST),
    };
};
const mapDispatchToProps = dispatch => {
    return {
        inboxActions: bindActionCreators(inboxActions, dispatch),

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(InboxMessage);