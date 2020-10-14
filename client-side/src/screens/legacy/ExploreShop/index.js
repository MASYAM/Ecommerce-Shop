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
    homeBannerRequest: ViewActionStateInfo,
    productsActions: typeof productsActions,
}
class ExploreShop extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading:false,
            lastRequest:0,
            lastSent: 0,
            modalVisible:true,
            slider1ActiveSlide:1,
            promotionEntries001:[],
            designerCollectionList:[],
            holidaySaleList:[],
            topTrendsList:[],
            isShowAlert:false,
            refreshing: false,
         };
    }

    refreshContent = () =>{
        this.setState({refreshing: true});
        const { productsActions, navigation } = this.props;
        productsActions.getHomePageBanner(navigation.state.key);
    }

    componentDidMount () {
        if(this.state.promotionEntries001.length == 0){
            this.refreshContent();
        }
    }
    
    componentDidUpdate(prevProps: Props) {
        const { props, state } = this;
        if (state.lastRequest !== props.homeBannerRequest.lastRequest) {      
            if (props.homeBannerRequest.status === ActionStatusTypeValues.ERROR) {
                this.setState({
                    refreshing: false,
                    isLoading: false,
                    lastRequest: props.homeBannerRequest.lastRequest,
                }, () => {
                    Toast.show({
                        type: "danger",
                        text:"Sorry, it seems you are facing some technical problem. Please contact IT Support."
                    })
                });
            }
            else if (props.homeBannerRequest.status === ActionStatusTypeValues.COMPLETED) {
                console.log(this.props.homeBannerStatus);
                console.log(this.props.homeBannerErrorMessage);
                if(this.props.homeBannerStatus==="success"){

                    this.setState({
                        refreshing: false,
                        isLoading: false,
                        lastRequest: props.homeBannerRequest.lastRequest,
                        promotionEntries001: this.props.homeBanner,
                        designerCollectionList: this.props.designerCollectionList,
                        holidaySaleList: this.props.holidaySaleList,
                        topTrendsList: this.props.topTrendsList,
                    }, () => {

                    });

                }else{
                    this.setState({
                        refreshing: false,
                        isLoading: false,
                        isShowAlert:true,
                        lastRequest: props.homeBannerRequest.lastRequest,
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

    renderDesignCollection =()=> {
        return this.state.designerCollectionList.map((item, key) => {
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

    renderHolidaySale =()=> {
        return this.state.holidaySaleList.map((item, key) => {
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
    
    renderTopTrendList =()=> {
        return this.state.topTrendsList.map((item, key) => {
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
        const isCompleteSubmit = props.homeBannerRequest.status === ActionStatusTypeValues.COMPLETED;
        const homeBannerStatus = props.homeBannerStatus;
        const homeBannerErrorMessage = props.homeBannerErrorMessage;
        
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
                    <View style={styles.body}>
                        <View style={styles.promotionBannerContainer}>
                            <Carousel
                                ref={c => this._slider1Ref = c}
                                data={this.state.promotionEntries001}
                                renderItem={this._renderPromotionItem001}
                                sliderWidth={viewportWidth}
                                itemWidth={viewportWidth}
                                hasParallaxImages={true}
                                loop={true}
                                firstItem={0}
                                autoplay={true}
                                loopClonesPerSide={2}        
                                containerCustomStyle={styles.slider}
                                autoplayInterval={2000}
                                onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                            />

                            <Pagination
                                dotsLength={this.state.promotionEntries001.length}
                                activeDotIndex={this.state.slider1ActiveSlide}
                                containerStyle={styles.paginationContainer}
                                dotColor={'orange'}
                                dotStyle={styles.paginationDot}
                                inactiveDotColor={'#F2F2F2'}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                                carouselRef={this._slider1Ref}
                                tappableDots={!!this._slider1Ref}
                            />
                        </View>
                    </View>

                    <View style={styles.mainContentContainer}>
                        <Text style={styles.headline}>Designer Collection</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={200}
                            decelerationRate="fast"
                            >
                            {
                                this.renderDesignCollection()
                            }
                        </ScrollView>
                    </View>

                    <View style={styles.mainContentContainer}>
                        <Text style={styles.headline}>Holiday Sale</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={200}
                            decelerationRate="fast"
                            >
                            {
                                this.renderHolidaySale()
                            }
                        </ScrollView>
                    </View>

                    <View style={styles.mainContentContainer}>
                        <Text style={styles.headline}>Top Trends</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={200}
                            decelerationRate="fast"
                            >
                            {
                                this.renderTopTrendList()
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
                            <Text style={styles.sucessDescription}>{homeBannerErrorMessage}</Text>
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
        designerCollectionList: state.products.designerCollectionList,
        holidaySaleList: state.products.holidaySaleList,
        topTrendsList: state.products.topTrendsList,
        homeBannerStatus: state.products.homeBannerStatus,
        homeBannerErrorMessage: state.products.homeBannerErrorMessage,
        homeBannerRequest: selectViewActionStatus(state, navigation.state.key, productsActions.HOME_PAGE_BANNER),
    };
};
const mapDispatchToProps = dispatch => {
    return {
        productsActions: bindActionCreators(productsActions, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExploreShop);