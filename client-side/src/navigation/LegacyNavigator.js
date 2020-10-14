import React from 'react';
import { Router, Stack, Drawer, Modal, Scene } from 'react-native-router-flux';
import { View, StyleProvider, Root } from 'native-base';
import { connect } from 'react-redux';

import * as Screens from "../screens";
import { ScreenNames } from '../constants/Screens';
import { CurrentTheme } from "../constants/Theme";
import { getTheme } from '../native-base-theme';

const AppRouter = connect()(Router)
export class LegacyNavigator extends React.PureComponent {
    render() {

        const pushModalProps = {
            hideNavBar: true,
            gesturesEnabled: false,
          };

        return <StyleProvider style={getTheme(CurrentTheme.Styles)}>
            <Root>
                <AppRouter>
                    <Modal>
                        <Scene initial hideNavBar key={ScreenNames.root}>
                            <Scene hideNavBar key={ScreenNames.StartUp} initial component={Screens.StartupScreen} />
                            <Stack {...pushModalProps}  path="/" key={ScreenNames.Landing}>
                                <Scene hideNavBar key={ScreenNames.TutorialScreen} component={Screens.TutorialScreen} />
                                <Scene hideNavBar inital key={ScreenNames.Landing + "$main"} component={Screens.Landing} />
                                <Scene hideNavBar key={ScreenNames.RegisterScreen} component={Screens.RegisterScreen} />
                                <Scene hideNavBar key={ScreenNames.LoginScreen} component={Screens.LoginScreen} />
                            </Stack>

                            <Scene drawer hideNavBar key={ScreenNames.AppMain} contentComponent={Screens.DrawerScreen} drawerPosition="left">
                                <Stack {...pushModalProps}  key={ScreenNames.ExploreShop} path="/home" >
                                    <Scene hideNavBar key={ScreenNames.ExploreShop} component={Screens.ExploreShop} inital/>
                                    <Scene hideNavBar key={ScreenNames.ClothesListing} component={Screens.ClothesListing} />
                                    <Scene hideNavBar key={ScreenNames.ClothesDetail} component={Screens.ClothesDetail} />
                                    <Scene hideNavBar key={ScreenNames.ShoppingCart} component={Screens.ShoppingCart} />

                                    <Scene hideNavBar key={ScreenNames.InboxMessage} component={Screens.InboxMessage} />
                                    <Scene hideNavBar key={ScreenNames.InboxDetail} component={Screens.InboxDetail} />

                                    <Scene hideNavBar key={ScreenNames.CheckoutScreen} component={Screens.CheckoutScreen} />
                                    <Scene hideNavBar key={ScreenNames.FindProduct} component={Screens.FindProduct} />
                                </Stack>
                                <Scene hideNavBar key={ScreenNames.InternalBrowser} component={Screens.InternalBrowser} />
                                <Scene hideNavBar path="/my/profile/" key={ScreenNames.MyProfileView} component={Screens.ProfileView} />
                                <Scene hideNavBar path="/settings" key={ScreenNames.Settings} component={Screens.Settings} />
                                <Scene hideNavBar path="/help" key={ScreenNames.Help} component={Screens.Help} />
                            </Scene>
                        </Scene>
                        <Scene hideNavBar modal key={ScreenNames.InternalBrowser + '$popup'} component={Screens.InternalBrowser} />
                        <Scene hideNavBar modal path="/profile/:profileId" key={ScreenNames.ProfileView} component={Screens.ProfileView} />
                    </Modal>
                </AppRouter>
            </Root>
        </StyleProvider>
    }
}