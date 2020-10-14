import React from "react";
import { ViewProps, View } from "react-native";
import { connectStyle } from "native-base";

class BasementView extends React.PureComponent<ViewProps> {
    render () {
        const { props } = this;
        const { style, children, ...otherProps } = props;
        return <View {...otherProps} style={style}>
            {children}
        </View>
    }
} 
/**
 * An view layer for storing base content with 
 * @param {ViewProps} props 
 */
export const Basement = connectStyle("custom.Basement", {
    flex:1,
    backgroundColor: "white",
})(BasementView);
