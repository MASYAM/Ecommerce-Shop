import { Platform } from "react-native"
import Colors from "./Colors";

const font  =  "System"; // Platform.OS === "ios" ? 'System' : 'Roboto';

const fashionFont  =  "System";

export const ThemeSettings = {
    mainColor:'#6190ed',
    primaryColor: Colors.primary,
    secondaryColor: Colors.secondary,
    accent: Colors.secondary,
    nonSelectedColor: '#c7c7c7',
    normalButtonTextColor: '#ffffff',
    cancelButtonTextColor: '#c7c7c7',
    confirmButtonTextColor: Colors.primaryDarker,

    buttonBorderColor: Colors.supportingColor,
    descriptionColor: Colors.supportingColor,
    inputPlaceholderColor: Colors.supportingColor,

    supportingBgColor: '#F5F4FA',
    supportingTextColor: '#A0A0A0',
    
    textFont: font,
    headlineFont: font,
    inputFont: font,
    buttonFont: font,
    fashionFont: fashionFont,
};

