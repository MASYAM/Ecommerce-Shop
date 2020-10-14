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
    ActivityIndicator
} from 'react-native';
import styles from './style';
import MapView from "react-native-map-clustering";
import {
    Container,
    Tab,
    Tabs,
    Toast,
    Content, Form, Item, Picker, Button
} from 'native-base';

import { Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeSettings, ImageSources, ScreenNames } from '../../../constants';
import { Basement } from '../../../components/Basement';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ClothesDetailSlide from '../../../components/legacy/ClothesDetailSlide';
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
    productDetailRequest: ViewActionStateInfo,
    productsActions: typeof productsActions,
    cartActions: typeof cartActions,
}
class ClothesDetail extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
          isLoading:true,
          lastRequest:0,
          lastSent: 0,
          modalVisible:true,
          isShowAlert:false,
            selectedColor: undefined,
            selectedSize: undefined,
            isAddToCart:false,
            slider1ActiveSlide:0,
            productName:'',
            productPrice:'',
            starLevel:0,
            isOutOfStock:false,
            color:[],
            size:[],
            smallImage:null,
            productDetailImages:[]
        };
    }
  backToRoot=() =>{
      const { navigation} = this.props;
      navigation.pop();
  }

  componentDidMount () {
      if(this.state.productDetailImages.length == 0){
          const { productsActions, navigation } = this.props;
          const productId =  this.props.navigation.getParam('productId');
          productsActions.getProductDetail(navigation.state.key,productId);
      }
  }

  componentDidUpdate(prevProps: Props) {
    const { props, state } = this;
    if (state.lastRequest !== props.productDetailRequest.lastRequest) {
        if (props.productDetailRequest.status === ActionStatusTypeValues.ERROR) {
            this.setState({
                isLoading: false,
                lastRequest: props.productDetailRequest.lastRequest,
            }, () => {
                Toast.show({
                    type: "danger",
                    text:"Sorry, it seems you are facing some technical problem. Please contact IT Support."
                })
            });
        }
        else if (props.productDetailRequest.status === ActionStatusTypeValues.COMPLETED) {
            console.log(this.props.productDetailStatus);
            console.log(this.props.productDetailErrorMessage);
            if(this.props.productDetailStatus==="success"){

                this.setState({
                    isLoading: false,
                    lastRequest: props.productDetailRequest.lastRequest,
                    smallImage: this.props.productDetail.thumbail,
                    productName: this.props.productDetail.name,
                    productPrice: this.props.productDetail.price,
                    starLevel: this.props.productDetail.starLevel,
                    isOutOfStock: this.props.productDetail.isOutOfStock,
                    color: this.props.productDetail.color,
                    size: this.props.productDetail.size,
                    size: this.props.productDetail.size,
                    productDetailImages: this.props.productDetail.images,
                }, () => {

                });

            }else{
                this.setState({
                    isLoading: false,
                    isShowAlert:true,
                    lastRequest: props.productDetailRequest.lastRequest,
                }, () => {
                });
            }
        }

        
    }
  }

   addToShoppingCart = () => {
      const productId =  this.props.navigation.getParam('productId');
      console.log("Selected Product Id");
      console.log(productId);
      console.log("Selected Size");
      console.log(this.state.selectedSize);
      console.log("Selected Color");
      console.log(this.state.selectedColor);

          if (  (this.state.selectedColor == undefined ) ||  (this.state.selectedSize == undefined )) {
            Toast.show({
                type: "danger",
                text: 'Please select the size and color first',
            });
          }
          else{      
              const { cartActions,  navigation } = this.props;
              const productId =  this.props.navigation.getParam('productId');
              cartActions.addToCart(navigation.state.key, productId,  this.state.smallImage, this.state.productName, this.state.selectedColor , this.state.selectedSize , this.state.productPrice);

              Toast.show({
                type: "success",
                text:"Added to Shopping Cart"
              });
          }
    }

    onValueChangeColor(value: string) {
        this.setState({
          selectedColor: value
        });
    }

    onValueChangeSize(value: string) {
        this.setState({
          selectedSize: value
        });
    }
     
    onPress = () => {
            this.props.navigation.navigate(ScreenNames.ShoppingCart);
    }
    _renderClothesDetail = ({item, index}) => {
        return (
                <View>
                <ClothesDetailSlide
                    Adimage={item.image}
                />
                </View>
        );
    }

    renderColorList =()=> {
      return this.state.color.map((item, key) => {
          return (
              <Picker.Item  key={key} label={item.id} value={item.value} />
          );
      });
    }

    renderSizeList =()=> {
      return this.state.size.map((item, key) => {
          return (
              <Picker.Item  key={key} label={item.id} value={item.value} />
          );
      });
    }

    renderStar =()=> {
      let startList = []
      for (let i = 0; i < this.state.starLevel; i++) {
        startList.push(<Icon key={i} style={styles.rankingIcon} size={15} name="star" />)
      }
      return startList;
    }

    render() {
      const { props } = this;
      const isCompleteSubmit = props.productDetailRequest.status === ActionStatusTypeValues.COMPLETED;
      const productDetailStatus = props.productDetailStatus;
      const productDetailErrorMessage = props.productDetailErrorMessage;
    
        return (
          <Basement>
              <View style={styles.body}>
                <View style={styles.promotionBannerContainer}>
                    <Carousel
                      ref={c => this._slider1Ref = c}
                              data={this.state.productDetailImages}
                              renderItem={this._renderClothesDetail}
                              sliderWidth={viewportWidth}
                              itemWidth={viewportWidth}
                              hasParallaxImages={true}
                              loop={true}
                              firstItem={1}
                              autoplay={true}
                              loopClonesPerSide={2}        
                              containerCustomStyle={styles.slider}
                              autoplayInterval={5000}
                              onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                    />
                    <Pagination
                    dotsLength={this.state.productDetailImages.length}
                    activeDotIndex={this.state.slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={'rgba(255, 255, 255, 0.92)'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={'#646260'}
                    inactiveDotOpacity={0.9}
                    inactiveDotScale={0.8}
                    activeOpacity={1.0}
                    carouselRef={this._slider1Ref}
                    tappableDots={!!this._slider1Ref}
                    />
                </View>
                <View style={styles.menubuttoncontainer}>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <View style={styles.menucontainer}>
                            <Image source={ImageSources.LeftArrow} style={{ width: 15, height: 15, }} />
                        </View>
                    </TouchableOpacity>
                </View>
              </View>
              <View style={styles.bottomLayer}>
                  <Text style={styles.productName}>{this.state.productName}</Text>
                  <Text style={styles.productPrice}>USD${this.state.productPrice}</Text>

                  <View style={styles.rankingContainer}>
                      <View style={styles.productRanking}> 
                          {this.renderStar()}
                      </View>
                  </View>

                  <Form style={{width:'80%'}}>
                      <Item style={{borderBottomColor:'transparent'}}>
                        <View style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', backgroundColor:'white', overflow: 'hidden', marginRight:10}}>
                              <Picker
                                mode="dropdown"
                                iosIcon={<Icon style={styles.arrowDownIcon} name="angle-down" />}
                                style={styles.detailPicker}
                                placeholder="Color"
                                placeholderStyle={styles.pickerTextStyle}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selectedSize}
                                onValueChange={this.onValueChangeSize.bind(this)}
                              >
                            {this.renderColorList()}
                              </Picker>
                        </View>
                        <View style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', backgroundColor:'white', overflow: 'hidden'}}>
                          <Picker
                            mode="dropdown"
                            iosIcon={<Icon  style={styles.arrowDownIcon} name="angle-down" />}
                            style={styles.detailPicker}
                            placeholder="Size"
                            placeholderStyle={styles.pickerTextStyle}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selectedColor}
                            onValueChange={this.onValueChangeColor.bind(this)}
                          >
                          {this.renderSizeList()}
                          </Picker>
                        </View>
                      </Item>                  
                    </Form>

                    <Button transparent full  style={styles.btnShoppingCart} onPress={this.addToShoppingCart}>
                      <View style={styles.shopIconContainer}><Text><Icon  style={styles.shoppingIcon} size={15} name="shopping-cart" /></Text></View>
                      <Text style={styles.btnShoppingCartText} large>Add to Bag</Text>
                    </Button>
              </View>

                {this.state.isLoading ? (
                    <View style={styles.loadingDialog}>
                            <ActivityIndicator style={styles.loadingStyle} size="large" color={'white'} />
                    </View>
                ) : null}
           
                { this.state.isShowAlert  ? (
                  <View style={styles.registerSuccessDialog} >
                      <View style={styles.sucessWordingsContainer}>
                          <Text style={styles.errorHeading}>Error</Text>
                          <Text style={styles.sucessDescription}>{productDetailErrorMessage}</Text>
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
      productDetail: state.products.productDetail,
      productDetailStatus: state.products.productDetailStatus,
      productDetailErrorMessage: state.products.productDetailErrorMessage,
      productDetailRequest: selectViewActionStatus(state, navigation.state.key, productsActions.PRODUCT_DETAIL),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    productsActions: bindActionCreators(productsActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),      
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClothesDetail);