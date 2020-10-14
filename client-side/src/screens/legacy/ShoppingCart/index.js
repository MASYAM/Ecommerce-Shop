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
import ShoppingCartItem from '../../../components/legacy/ShoppingCartItem';
import { StandardHeader } from '../../../components/legacy/Header';
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
class ShoppingCart extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
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

    componentDidUpdate(){
        console.log("CART LIST   >>>");
        console.log(this.props.cartListing);
    }

    componentDidMount () {
        // InteractionManager.runAfterInteractions( () => {
        //     this.setState({showMap: true})
        // });
    }

    onValueChangeColor(value: string) {
        this.setState({
          selectedColor: value
        });
    }
      
    onPressProductDetail = () => {
        this.props.navigation.navigate(ScreenNames.ClothesDetail);
    }
    goCheckoutScreen = () => {
        this.props.navigation.navigate(ScreenNames.CheckoutScreen);   
    }

    onDeleteShoppingCartItem = ( productId) => {
        console.log("onDeleteShoppingCartItem   >>>"+productId);
        const { cartActions,  navigation } = this.props;
        cartActions.removeCart(navigation.state.key,productId);
        Toast.show({
            type: "success",
            text:"Removed"
          });
    }

    render() {
        let totoalPrice = 0.0;
        this.props.cartListing.map((item, key) => {
            totoalPrice = totoalPrice + parseFloat(item.price)
        });

        return (
            <Basement>
                <StandardHeader back />
                <ScrollView>                
                    <View style={styles.shoppingCartContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleStyle}>Shopping Cart </Text>
                        </View>                  
                        { this.props.cartListing.map((item, key) => {
                            return (
                                <ShoppingCartItem key={key}
                                    productId={item.id}
                                    productImage={item.image}
                                    productName={item.name}
                                    productType={item.size + "," + item.color}
                                    productPrice={item.price}
                                    onDeleteShoppingCartItem={this.onDeleteShoppingCartItem}
                                    onPressProductDetail={this.onPressProductDetail}
                            />
                            );
                        }) }
                                      
                        {this.props.cartListing.length==0 ?
                            <View>
                                    <Text>You didn't buy anything yet.</Text>
                            </View>
                            :                               
                            <View>
                                <ShoppingCartPriceRow title="Shipping" price={10}  />
                                <ShoppingCartPriceRow title="Your Total" price={totoalPrice}  />
                                <View style={styles.checkoutLayer}>
                                    <Button transparent full  style={styles.btnShoppingCart} onPress={this.goCheckoutScreen}> 
                                        <View style={styles.shopIconContainer}><Text><Icon  style={styles.shoppingIcon} size={15} name="shopping-bag" /></Text></View>
                                        <Text style={styles.btnShoppingCartText} large>Check out now!</Text>
                                    </Button>
                                </View>
                            </View>
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
        cartListing: state.cart.cartListing,
     };
  };
  const mapDispatchToProps = dispatch => {
    return {
      cartActions: bindActionCreators(cartActions, dispatch),      
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);