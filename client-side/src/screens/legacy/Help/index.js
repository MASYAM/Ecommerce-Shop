import React from 'react';
import {
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Dimensions
} from 'react-native';
import { Container, Content, Button, Text, Footer, Title,Tabs, Tab} from 'native-base'
import { Actions } from 'react-native-router-flux';
import styles from './style'
import UserDetails from '../../../components/legacy/UserDetails';
import SideBar from '../../../components/legacy/DrawerContent';
import { StandardHeader } from '../../../components/legacy/Header';
import { ThemeSettings, ImageSources, ScreenNames } from '../../../constants';

import { CloseButton, ButtonImage, MenuButton } from '../../../components/StandardButtons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import HelpCenterTopics from '../../../components/legacy/HelpCenterTopics';

export default class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalVisible:true,
            slider1ActiveSlide:1,
            questionList:[
            {  
                'question':'How do i cancel an existing order?',
                'color':'#3b2e5a',
                'icon':'calendar'
            },
            {  
                'question':'What are the other shipping options',
                'color':'#394989',
                'icon':'truck'
            },
            {  
                'question':'How do i cancel an existing order?',
                'color':'#4ea0ae',
                'icon':'address-card'
            },
            {  
                'question':'What are the other shipping options',
                'color':'#bbe1fa',
                'icon':'cart-arrow-down'
            },
        ] };
    }

    _renderQuestion = ({item, index}) => {
        return (
                    <View style={[styles.questionContainer, {backgroundColor: item.color}]}>
                            <Text style={styles.questionTitle}>{item.question}</Text>
                            <View style={styles.questionIconContainer}>
                                   <Icon  style={styles.questionIcon} size={15} name={item.icon} />
                            </View>
                     </View>
        );
    }

    onPress = () => {
            this.props.navigation.navigate(ScreenNames.ClothesDetail);
    }
    
    openDrawer() {
        this.drawer._root.open()
    };
    render() {
        return (
            <Container style={styles.profilePageStyle}>
                <ImageBackground
                    source={require("../../../../assets/helpBG.png")}
                    resizeMode="cover"
                    style={styles.backgroundImage}
                    imageStyle={styles.backgroundImage_imageStyle}
                >
                    <StandardHeader/>
        
                    <SafeAreaView style={styles.menubuttoncontainer}>
                        <MenuButton bg rounded onPress={() => Actions.drawerOpen()} />
                    </SafeAreaView>

                    <ScrollView>
                        <View style={styles.profileContainer}>
                            <Text style={styles.pageTitle}>Do you have any question ?</Text>
                            <View style={styles.searchBox}>
                                <View style={styles.searchcontainer}>
                                    <View style={styles.searchview}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Pickuplocation")} style={styles.location}>
                                            <View style={styles.searchBar}>
                                                <Text style={styles.searchBarText}>Search for topics or questions ...</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <View style={styles.searchIconContainer}>
                                            <TouchableOpacity>
                                                <Icon size={15} name='search' />
                                            </TouchableOpacity>
                                        </View>
                                    </View>              
                                </View>
                            </View>
                            <Text style={styles.pageSubTitle}>Frequently Asked</Text>
                            <Carousel
                                ref={c => this._slider1Ref = c}
                                data={this.state.questionList}
                                renderItem={this._renderQuestion}
                                sliderWidth={viewportWidth-80}
                                itemWidth={150}
                                hasParallaxImages={true}
                                loop={true}
                                firstItem={1}
                                autoplay={true}
                                loopClonesPerSide={2}        
                                containerCustomStyle={styles.slider}
                                autoplayInterval={2000}
                                onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                            />
                            <Text style={styles.pageSubTitle}>Topics</Text>
                            <HelpCenterTopics
                                carimage={ImageSources.ReturnAndRefundImage}
                                mainTextLabel='Returns and Refunds'
                                subTitleText='25 articles'
                            />
                
                            <HelpCenterTopics
                                carimage={ImageSources.shippingCart}
                                mainTextLabel='Shipping and Delivery'
                                subTitleText='19 articles'
                            />

                            <HelpCenterTopics
                                carimage={ImageSources.PaymentImage}
                                mainTextLabel='Payment'
                                subTitleText='7 articles'
                            />
                        </View>
                    </ScrollView>
                </ImageBackground>
            </Container>
        );
    }
}
