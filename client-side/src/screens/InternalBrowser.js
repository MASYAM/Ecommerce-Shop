// @flow
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ListView,
  Image,
  Linking,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, NavigationProps } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import { WebView } from 'react-native-webview';
import {
  Button,
  Container,
  Content,
  Header,
  Body,
  Title,
  H1,
  Icon,
  Left,
  Right,
  StyleProvider,
} from 'native-base';
import { Colors } from '../constants';
import { StandardHeader } from '../components/legacy/Header';

class InternalBrowserPageView extends React.PureComponent {
  _onError = evt => {
    console.log('_onError', evt);
  };
  _onShouldStartLoadWithRequest = evt => {
    const { openUrlFailure } = this;

    const { url } = evt;

    const isExternalBrowserAllowed =
      [
        'mailto:',
        'http://',
        'https://',
      ].filter(whitelistUrl => {
        return String(url).substr(0, whitelistUrl.length) === whitelistUrl;
      }).length > 0;

    const isAppBrowserAllowed =
      [
      ].filter(whitelistUrl => {
        return String(url).substr(0, whitelistUrl.length) === whitelistUrl;
      }).length > 0;

    if (isAppBrowserAllowed) {
      return true;
    }

    if (isExternalBrowserAllowed) {
      if (Linking.canOpenURL(url)) {
        Linking.openURL(url)
          .then(() => { })
          .catch(error => {
            openUrlFailure();
          });
        return false;
      }
    }

    openUrlFailure();
    return false;
  };

  openUrlFailure = () => {
    Alert.alert(
      'Sorry',
      'We cannot open this link from this device.\nPress okay to open our enquiry form details.',
      [
        {
          text: I18n.t('okay_button'),
          style: 'default',
        },
        { text: I18n.t('cancel_button'), style: 'cancel' },
      ],
    );
  };

  render() {
    const { props } = this;
    const { navigation } = props;
    const { params } = navigation.state;
    const { modal, uri, title } = params || {};

    return (
      <Container>
        <StandardHeader dismissable={!!modal} drawer={!modal} title={title} />
        <WebView
          onError={this._onError}
          style={{ flex: 1, backgroundColor: Colors.supportingBgColor }}
          source={{ uri }}
        />
      </Container>
    );
  }
}

export default InternalBrowserPageView;