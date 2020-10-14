import React from 'react';
import { Actions } from 'react-native-router-flux';
import { ScreenNames, ImageSources } from '../constants';
import { DrawerContent } from '../components/legacy/DrawerContent';
import { connect } from "react-redux";

import { authActions } from  '../store/actions';
import { ActionStatusTypeValues } from '../constants/actionStatusTypes';
import { selectViewActionStatus } from '../store/selectors/app';
import { bindActionCreators } from 'redux';
import { cartActions } from  '../store/actions';

type OwnProps = {
    navigation: NavigationProp;
}

type Props = OwnProps & {
    loginRequest: ViewActionStateInfo,
    authActions: typeof authActions,
    cartActions: typeof cartActions,
}
class DrawerScreen extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: false,
            lastRequest:0,
            lastSent: 0,
            isUserWantToSavedLogin: false,
            isShowAlert:false,
            isShowingSuccessAlert: false
        };
    }
    render() {

const menuItems = [
    {
        icon: 'home',
        title: 'Home',
        to: ScreenNames.ExploreShop,
        notification:0
    },
    {
        icon: 'female',
        title: 'Categories',
        to: ScreenNames.ClothesListing,
        notification:0
    },
    {
        icon: 'search',
        title: 'Find Product',
        to: ScreenNames.FindProduct,
        notification:0
    },
    {
        icon: 'shopping-cart',
        title: 'Shopping Cart',
        to: ScreenNames.ShoppingCart,
        notification:this.props.cartListing.length
    },
    {
        icon: 'envelope',
        title: 'Inbox Message',
        to: ScreenNames.InboxMessage,
        notification:1
    },

    {
        icon: 'question',
        title: 'Help Center',
        to: ScreenNames.Help,
        notification:0
    },

    {
        icon: 'cogs',
        title: 'Settings',
        to: ScreenNames.Settings,
        notification:0
    },
];

        return <DrawerContent
        navigation={this.props.navigation}
        menuItems={menuItems}
        onPressProfile={() => Actions.jump(ScreenNames.MyProfileView)}
        userProfile={{
            profilePic: this.props.loginProfile.profilePicture,
            name: this.props.loginProfile.username
        }} />
    }

}

const mapStateToProps = (state, ownProps: OwnProps) => {
    const { navigation } = ownProps;
    return {
        loginProfile: state.auth.loginProfile,
        cartListing: state.cart.cartListing,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch),      

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerScreen);