import color from "color";
import { Platform, Dimensions, PixelRatio } from "react-native";
import { SystemTheme, MaterialTheme } from "./base";

const platformStyle = "ww-green";

export const Colors = {
    white: '#fff',
    primaryInverse: '#fff',
    primary: '#edab61',
    secondary: '#F1B504',
}

export const Styles = {
    ... MaterialTheme,
    platformStyle,
    androidRipple: false,
    btnUppercaseAndroidText: false,
    brandPrimary: Colors.primary,
    buttonPrimary: Colors.primaryInverse,
    buttonPrimaryBg: Colors.primary,
    footerDefaultBg: Colors.primaryDarker,
    tabBarTextColor: Colors.white,
    activeTab: Colors.primaryInverse,
    sTabBarActiveTextColor: Colors.primaryMoreDarker,
    toolbarDefaultBg: Colors.primaryDarker,
    toolbarDefaultBorder: Colors.primaryDarker,
    segmentBackgroundColor: Colors.primaryDarker,
    segmentActiveTextColor: Colors.primaryDarker,
    segmentBorderColorMain:  Colors.primary,
  }