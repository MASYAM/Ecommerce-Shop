import React from 'react'
import {
    View,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    ActivityIndicator,
    Image,
    Keyboard,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Modal,
    RefreshControl
} from 'react-native'
import { Drawer,Container, Content, Button, Text, Footer, Title,Toast } from 'native-base'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import PomortionSlideItem from '../../../components/legacy/PomortionSlideItem';
import CollectionListingItemStyleOne from '../../../components/legacy/CollectionListingItemStyleOne';
import { Actions } from 'react-native-router-flux'
import styles from './style'
import { ScreenNames } from '../../../constants/Screens'
import { ImageSources } from '../../../constants'
import { CloseButton, ButtonImage, MenuButton } from '../../../components/StandardButtons';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { NavigationActions, StackActions, NavigationProp } from 'react-navigation';
import { productsActions } from  '../../../store/actions';
import { ActionStatusTypeValues } from '../../../constants/actionStatusTypes';
import { selectViewActionStatus } from '../../../store/selectors/app';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

type OwnProps = {
    navigation: NavigationProp;
}

type Props = OwnProps & {
    productCategoriesRequest: ViewActionStateInfo,
    productsActions: typeof productsActions,
}
class ClothesListing extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading:false,
            lastRequest:0,
            lastSent: 0,
            modalVisible:true,
            slider1ActiveSlide:1,
            promotionEntries001:[],
            alineDress:[],
            tentDress:[],
            yokeDress:[],
            empireLineDress:[],
            shiftDress:[],
            isShowAlert:false,
            refreshing: false,
         };
    }

    refreshContent = () =>{
        this.setState({refreshing: true});
        const { productsActions, navigation } = this.props;
        productsActions.getCategoriesListing(navigation.state.key);
    }

    componentDidMount () {
        if(this.state.promotionEntries001.length == 0){    
            this.refreshContent();    
        }
    }
      
    componentDidUpdate(prevProps: Props) {
        const { props, state } = this;
        if (state.lastRequest !== props.productCategoriesRequest.lastRequest) {          
            
            if (props.productCategoriesRequest.status === ActionStatusTypeValues.ERROR) {
                this.setState({
                    isLoading: false,
                    refreshing:false,
                    lastRequest: props.productCategoriesRequest.lastRequest,
                }, () => {
                    Toast.show({
                        type: "danger",
                        text:"Sorry, it seems you are facing some technical problem. Please contact IT Support."
                    })
                });
            }
            else if (props.productCategoriesRequest.status === ActionStatusTypeValues.COMPLETED) {
                console.log(this.props.productCatStatus);
                console.log(this.props.productCatErrorMessage);
                if(this.props.productCatStatus==="success"){               
                    this.setState({
                        isLoading: false,
                        refreshing:false,
                        lastRequest: props.productCategoriesRequest.lastRequest,
                        alineDress: this.props.alineDress,
                        tentDress: this.props.tentDress,
                        yokeDress: this.props.yokeDress,
                        empireLineDress: this.props.empireLineDress,
                        shiftDress: this.props.shiftDress,
                    }, () => {
                    });
                }else{
                    this.setState({
                        isLoading: false,
                        refreshing:false,
                        isShowAlert:true,
                        lastRequest: props.productCategoriesRequest.lastRequest,
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
  
    goListing = () => {
            this.props.navigation.navigate(ScreenNames.ClothesListing);
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    onModalRequestClose = () => {
        this.setModalVisible(false);
        this.setState({ modalVisible: false });
    }

    _renderPromotionItem001 = ({item, index}) => {
        return (
            <View>
                <PomortionSlideItem
                    Adimage={item.image}
                    firstText={item.firstText}
                    secondText={item.secondText}
                    thirdText={item.secondText}
                    onPress={this.goListing}
                />
            </View>
        );
    }

    renderAlineDressCollection =()=> {
        return this.state.alineDress.map((item, key) => {
            return (
                <View  key={key}>
                    <CollectionListingItemStyleOne
                        Adimage={item.thumbail}
                        name={item.name}
                        price={item.price}
                        isNewArrive={item.isNewArrive}
                        productId={item.id}
                        onPress={this.onPress}
                    />
                </View>
            );
        });
    }

    renderTentDressCollection =()=> {
        return this.state.tentDress.map((item, key) => {
            return (
                <View  key={key}>
                    <CollectionListingItemStyleOne
                        Adimage={item.thumbail}
                        name={item.name}
                        price={item.price}
                        isNewArrive={item.isNewArrive}
                        productId={item.id}
                        onPress={this.onPress}
                    />
                </View>
            );
        });
    }
    
    renderYokeDressCollection =()=> {
        return this.state.yokeDress.map((item, key) => {
            return (
                <View  key={key}>
                    <CollectionListingItemStyleOne
                        Adimage={item.thumbail}
                        name={item.name}
                        price={item.price}
                        isNewArrive={item.isNewArrive}
                        productId={item.id}
                        onPress={this.onPress}
                    />
                </View>
            );
        });
    }

    renderEmpireLineDress =()=> {
        return this.state.empireLineDress.map((item, key) => {
            return (
                <View  key={key}>
                    <CollectionListingItemStyleOne
                        Adimage={item.thumbail}
                        name={item.name}
                        price={item.price}
                        isNewArrive={item.isNewArrive}
                        productId={item.id}
                        onPress={this.onPress}
                    />
                </View>
            );
        });
    }

    renderShiftDressCollection =()=> {
        return this.state.shiftDress.map((item, key) => {
            return (
                <View  key={key}>
                    <CollectionListingItemStyleOne
                        Adimage={item.thumbail}
                        name={item.name}
                        price={item.price}
                        isNewArrive={item.isNewArrive}
                        productId={item.id}
                        onPress={this.onPress}
                    />
                </View>
            );
        });
    }

    render() {
        const { props } = this;
        const isCompleteSubmit = props.productCategoriesRequest.status === ActionStatusTypeValues.COMPLETED;
        const productCatStatus = props.productCatStatus;
        const productCatErrorMessage = props.productCatErrorMessage;
        
        return (
            <Container style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    translucent={true}
                />
                <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                refreshControl={
                    <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.refreshContent}
                    />
                }         
                >

                    <View style={styles.mainContentContainer}>
                    <Text style={styles.pageTitle}>Clothes Categories</Text>
                    </View>

                    <View style={styles.mainContentContainer}>
                        <Text style={styles.headline}>Aline Dress Collection</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={200}
                            decelerationRate="fast"
                            >
                            {
                                this.renderAlineDressCollection()
                            }
                        </ScrollView>
                    </View>

                    <View style={styles.mainContentContainer}>
                        <Text style={styles.headline}>Tent Dress Collection</Text>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        decelerationRate="fast"
                        >
                        {
                            this.renderTentDressCollection()
                        }
                        </ScrollView>
                    </View>

                    <View style={styles.mainContentContainer}>
                        <Text style={styles.headline}>Yokoe Dress Collection</Text>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        decelerationRate="fast"
                        >
                        {
                            this.renderYokeDressCollection()
                        }
                        </ScrollView>
                    </View>

                    <View style={styles.mainContentContainer}>
                        <Text style={styles.headline}>Empire Line Dress Collection</Text>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        decelerationRate="fast"
                        >
                        {
                            this.renderEmpireLineDress()
                        }
                        </ScrollView>
                    </View>

                    <View style={styles.mainContentContainer}>
                        <Text style={styles.headline}>Shift Dress Collection</Text>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        decelerationRate="fast"
                        >
                        {
                            this.renderShiftDressCollection()
                        }
                        </ScrollView>
                    </View>
                </ScrollView>

                 <SafeAreaView style={styles.menubuttoncontainer}>
                    <MenuButton bg rounded onPress={() => Actions.drawerOpen()} />
                </SafeAreaView>
                
                { this.state.isShowAlert  ? (
                    <View style={styles.registerSuccessDialog} >
                        <View style={styles.sucessWordingsContainer}>
                            <Text style={styles.errorHeading}>Error</Text>
                            <Text style={styles.sucessDescription}>{productCatErrorMessage}</Text>
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

Drawer.defaultProps.styles.mainOverlay.elevation = 0;

const mapStateToProps = (state, ownProps: OwnProps) => {
    const { navigation } = ownProps;
    return {
        homeBanner: state.products.homeBanner,
        alineDress: state.products.alineDress,
        tentDress: state.products.tentDress,
        yokeDress: state.products.yokeDress,
        empireLineDress: state.products.empireLineDress,
        shiftDress: state.products.shiftDress,
        productCatStatus: state.products.productCatStatus,
        productCatErrorMessage: state.products.productCatErrorMessage,
        productCategoriesRequest: selectViewActionStatus(state, navigation.state.key, productsActions.PRODUCT_CATEGORIES),
    };
};
const mapDispatchToProps = dispatch => {
    return {
        productsActions: bindActionCreators(productsActions, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClothesListing);