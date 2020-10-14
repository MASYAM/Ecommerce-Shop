import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Platform
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import { Drawer, Container, Content } from 'native-base'
import {  Actions } from 'react-native-router-flux';
import {  connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThemeSettings, ImageSources, ScreenNames } from '../../../constants';
import { DrawerMenuItem } from '../../../components/legacy/DrawerMenuItem'
import { StandardHeader } from '../../../components/legacy/Header';
import styles from './style'
import { AsyncStorage } from 'react-native';

class SettingsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnDefaultToggleSwitch: false,
        };
    }

    _onLogout = () => {
        AsyncStorage.removeItem('userData');
        Actions.reset(ScreenNames.root);
    }

    render() {
        return (
            <Container>
                <StandardHeader drawer title={"Settings"} />
                <Content>
                    <View>       
                        <View style={{ borderTopWidth: 0.5, borderTopColor: ThemeSettings.buttonBorderColor, marginTop: 10 }}></View>
                        <View style={{ marginLeft: 5, marginTop: 6 }}>
                            <DrawerMenuItem icon='sign-out' title='Log Out' onPress={this._onLogout} />
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default SettingsView;