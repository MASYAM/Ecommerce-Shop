import React from 'react';
import {
    View,
    TextInput,
    ImageBackground,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
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
import FindProductionHightLight from '../../../components/legacy/FindProductionHightLight';

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { NavigationActions, StackActions, NavigationProp } from 'react-navigation';
import { productsActions } from  '../../../store/actions';
import { ActionStatusTypeValues } from '../../../constants/actionStatusTypes';
import { selectViewActionStatus } from '../../../store/selectors/app';


type OwnProps = {
    navigation: NavigationProp;
}

type Props = OwnProps & {
    homeBannerRequest: ViewActionStateInfo,
    productsActions: typeof productsActions,
}
class FindProduct extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
            modalVisible:true,
            slider1ActiveSlide:1,
            searchingResult:[],
            searchtext:'',
            isHavingSearchingResult:false
            };
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

    renderSearchingResult =()=> {
        if(this.state.searchtext===""){
            return null
        }else{
              return this.props.designerCollectionList.filter(item => {
                return item.name.includes(this.state.searchtext);
              }).map((item, key) => {
                return (
                    <View key={key}>
                            <FindProductionHightLight
                                Adimage={item.thumbail}
                                firstText={item.name}
                                secondText={item.price}
                                productId={item.id}
                                onPress={this.onPress}
                            />
                    </View>
                );
            });
        }  
    }

    render() {
        return (
            <Container style={styles.profilePageStyle}>      
                <SafeAreaView style={styles.menubuttoncontainer}>
                    <MenuButton bg rounded onPress={() => Actions.drawerOpen()} />
                </SafeAreaView>
                <ScrollView>
                    <View style={styles.profileContainer}>
                            <Text style={styles.pageTitle}>Search</Text>
                            <View style={styles.searchBox}>
                                <View style={styles.searchcontainer}>
                                    <View style={styles.searchview}>
                                        { this.state.searchtext.length>0  ? (
                                            <View style={styles.deleteIconContainer}>
                                                <TouchableOpacity onPress={() => {
                                                        this.setState({searchtext:''});
                                                        this.searchInputField.clear();
                                                } }>
                                                    <Icon size={15} color='grey' name='minus-circle' />
                                                </TouchableOpacity>
                                            </View>
                                        ) : null}

                                        <View style={styles.searchBar}>                                     
                                            <TextInput 
                                                ref= {(el) => { this.searchInputField = el; }}
                                                onChangeText={(searchtext) => 
                                                    this.setState({searchtext})}
                                                id="keywords"
                                                autoCapitalize = 'none'
                                                placeholder='Enter your search keywords' 
                                                style={styles.textInputStyle}>
                                            </TextInput>
                                        </View>
                                        <View style={styles.searchIconContainer}>
                                            <TouchableOpacity>
                                                <Icon size={15} name='search' />
                                            </TouchableOpacity>
                                        </View>
                                    </View>                  
                                </View>
                           </View>

                           <View style={styles.highlightItemContainer}>
                                {
                                    this.renderSearchingResult()
                                }

                                {((this.state.searchtext.length>0 )&&(this.state.isHavingSearchingResult))  ? (
                                    <View style={styles.registerSuccessDialog} >
                                        <Text>Sorry, we cannot find the product you want by your keywords</Text>
                                    </View>
                                ) : null}
                           </View>
                    </View>
                </ScrollView>

                <SafeAreaView style={styles.menubuttoncontainer}>
                    <MenuButton bg rounded onPress={() => Actions.drawerOpen()} />
                </SafeAreaView>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps: OwnProps) => {
    const { navigation } = ownProps;
    return {
        designerCollectionList: state.products.designerCollectionList,
        holidaySaleList: state.products.holidaySaleList,
        topTrendsList: state.products.topTrendsList,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        productsActions: bindActionCreators(productsActions, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FindProduct);