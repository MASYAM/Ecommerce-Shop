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
    
} from 'react-native';
import styles from './style';
import MapView from "react-native-map-clustering";
import {
    Container,
    Tab,
    Tabs,
    Content, Form, Item, Picker, Button
} from 'native-base';


import { Notifications} from 'expo';

import * as Permissions from 'expo-permissions';


import { Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeSettings, ImageSources, ScreenNames } from '../../../constants';
import { Basement } from '../../../components/Basement';
// import Carousel from 'react-native-carousel-view';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ClothesDetailSlide from '../../../components/legacy/ClothesDetailSlide';
import ShoppingCartPriceRow from '../../../components/legacy/ShoppingCartPriceRow';
import ShoppingCartItem from '../../../components/legacy/ShoppingCartItem';
import { StandardHeader } from '../../../components/legacy/Header';
import CheckoutPaymentRow from  '../../../components/legacy/CheckoutPaymentRow';
import CheckoutAddressRow from  '../../../components/legacy/CheckoutAddressRow';
import CheckoutShippingRow from  '../../../components/legacy/CheckoutShippingRow';
import { ScrollView } from 'react-native-gesture-handler';


import { cartActions } from  '../../../store/actions';

import { productsActions } from  '../../../store/actions';
import { ActionStatusTypeValues } from '../../../constants/actionStatusTypes';
import { selectViewActionStatus } from '../../../store/selectors/app';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

type OwnProps = {
    navigation: NavigationProp;
}

type Props = OwnProps & {
    cartActions: typeof cartActions,
}
class CheckoutScreen extends React.Component<Props> {

    constructor(props) {
        super(props);
        this.state = { 
            isShowAlert:false,
            expoPushToken: '',
            notification: {},
            selectedColor: undefined,
            selectedSize: undefined,
            isAddToCart:false,
            slider1ActiveSlide:1,
            shoppingCartList:[
            {  
                productId:'P001',
                productImage:ImageSources.ProductImage001,
                productName:'Dress Helena',
                productType:'Black, M',
                productPrice:54.0
            },
            {  
                productId:'P002',
                productImage:ImageSources.ProductImage002,
                productName:'Dress Maroe Amme short',
                productType:'Black, M',
                productPrice:89.0
            },
        ] };
    }

    goToShoppingCart =  () => {
        this.setState({
           isShowAlert: true
        })
        const { cartActions,  navigation } = this.props;
        cartActions.clearCart(navigation.state.key);
        
        const localNotification = {
            title: 'E-commerce Shop',
            body: 'We are processing your ordered items. We\'re processing your order right now. You can edit your order details through online Order Status, or by contacting our Customer Service.',
            ios: { // (optional) (object) — notification configuration specific to iOS.
              sound: true // (optional) (boolean) — if true, play a sound. Default: false.
            },
            android: // (optional) (object) — notification configuration specific to Android.
            {
              sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
              //icon (optional) (string) — URL of icon to display in notification drawer.
              //color (optional) (string) — color of the notification icon in notification drawer.
              priority: 'high', // (optional) (min | low | high | max) — android may present notifications according to the priority, for example a high priority notification will likely to be shown as a heads-up notification.
              sticky: false, // (optional) (boolean) — if true, the notification will be sticky and not dismissable by user. The notification must be programmatically dismissed. Default: false.
              vibrate: true // (optional) (boolean or array) — if true, vibrate the device. An array can be supplied to specify the vibration pattern, e.g. - [ 0, 500 ].
              // link (optional) (string) — external link to open when notification is selected.
            }
        };

        let t = new Date();
        t.setSeconds(t.getSeconds() + 20);
        const schedulingOptions = {
            time: t, // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
        };

        Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);
      };

      backToRoot=() =>{
        const { navigation} = this.props;
        navigation.pop();
    }

    handleNotification() {
        //handle
    }

    async componentDidMount() {
        // We need to ask for Notification permissions for ios devices
        let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

        if (Platform.isDevice && result.status === 'granted') {
            console.log('Notification permissions granted.')
        }

        // If we want to do something with the notification when the app
        // is active, we need to listen to notification events and 
        // handle them in a callback
        Notifications.addListener(this.handleNotification);
    }

    onValueChangeColor(value: string) {
        this.setState({
          selectedColor: value
        });
      }
   
      onPressProductDetail = () => {
        this.props.navigation.navigate(ScreenNames.ClothesDetail);
    }

    onDeleteShoppingCartItem = ( productId) => {
        const newArray = this.state.shoppingCartList;
        newArray.splice(newArray.findIndex(function(i){
            return i.productId === productId;
        }), 1);
        this.setState({
            shoppingCartList:newArray
        })
    }

    render() {
        return (
            <Basement>
                <StandardHeader back />
                    <ScrollView>                
                        <View style={styles.shoppingCartContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleStyle}>Checkout</Text>
                            </View>
                        
                            <View style={styles.titleContainer}>
                                <Text style={styles.subtitleStyle}>Address</Text>
                            </View>

                            <CheckoutAddressRow></CheckoutAddressRow>
                            
                            <View style={styles.titleContainer}>
                                <Text style={styles.subtitleStyle}>Shipping</Text>
                            </View>

                            <CheckoutShippingRow image={ImageSources.DHL} company={'DHL'} priceInfo={'No additional Costs'} ></CheckoutShippingRow>
                            <CheckoutShippingRow image={ImageSources.UBS} company={'UPS'} priceInfo={'No additional Costs'}  ></CheckoutShippingRow>
                            <CheckoutShippingRow image={ImageSources.FEDDEX} company={'FedEx Express'} priceInfo={'Addidtional 7.99'}  ></CheckoutShippingRow>

                            <View style={styles.titleContainer}>
                                <Text style={styles.subtitleStyle}>Payment</Text>
                            </View>

                            <CheckoutPaymentRow ></CheckoutPaymentRow>
                
                            <View>
                                    <View style={styles.checkoutLayer}>
                                        <Button transparent full  style={styles.btnShoppingCart} onPress={this.goToShoppingCart}> 
                                            <View style={styles.shopIconContainer}><Text><Icon  style={styles.shoppingIcon} size={15} name="shopping-bag" /></Text></View>
                                            <Text style={styles.btnShoppingCartText} large>Finish your order</Text>
                                        </Button>
                                    </View>
                            </View>                                       
                        </View>
                    </ScrollView>

                   { this.state.isShowAlert  ? (
                    <View style={styles.registerSuccessDialog} >
                            <View style={styles.sucessWordingsContainer}>
                                    <Text style={styles.sucessHeading}>Thank you</Text>
                                    <Text style={styles.sucessDescription}>We received your order and we will send you a message about the shipping within 2 hours.</Text>
                                    <Button transparent full style={styles.btnLogonNow} onPress={this.backToRoot}>
                                        <Text style={styles.btnLogonNowTextStyle} large>Close</Text>
                                    </Button> 
                            </View>                   
                    </View>
                   ) : null}
            </Basement> 
        );
    }
}

const mapStateToProps = (state, ownProps: OwnProps) => {
    const { navigation } = ownProps;
    return {
        cartListing: state.cart.cartListing,
     };
  };
  const mapDispatchToProps = dispatch => {
    return {
      cartActions: bindActionCreators(cartActions, dispatch),      
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);