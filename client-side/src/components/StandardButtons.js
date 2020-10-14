import React from "react";
import { TouchableOpacity, Image, ImageSourcePropType, TouchableOpacityProps, ViewStyle, ViewProps } from "react-native";
import { ImageSources } from "../constants";

export type ButtonImageSize = "sm" | "md" | "lg" | number;

export type ButtonImageProps = ViewProps & {
    size?: ButtonImageSize,
    source?: ImageSourcePropType,
}

export const ButtonImageSizeLevels:{[sizeName: string]: number} = {
    "sm": 12,
    "md": 15,
    "lg": 20,
}

export const getButtonImageSizeValue = ( size: ButtonImageSize): number => {
    if ( typeof size === "number" ) return size;
    if ( ButtonImageSizeLevels[size] ) return ButtonImageSizeLevels[size];
    return ButtonImageSizeLevels.md;
}

export const getButtonImageSizeStyle = ( size: ButtonImageSize, originalStyle?: ViewStyle ): ViewStyle => {
    const val = getButtonImageSizeValue( size) ;
    return [originalStyle,{
        width: val,
        height: val,
    }]
}

export const ButtonImage: React.FC<ButtonImageProps> = (props: ButtonImageProps) => {
    return <Image style={getButtonImageSizeStyle(props.size, props.style)} source={props.source} />;
}

export type StandardButtonProps = TouchableOpacityProps & {
    size?: ButtonImageSize,
    bg?: boolean | string,
    padd?: boolean | number,
    rounded?: number,
    bgColor?: string,
}

export const StandardButton: React.FC<StandardButtonProps> = (props: StandardButtonProps) => {
    const { children, style, size, bg, rounded, bgColor, padd, ... otherProps } = props;
    const _style = {
        padding: 18,
        minWidth: 38,
        minHeight: 38,
    };
    if( bg ) {
        _style.padding = padd !== undefined ? padd : 10;
        _style.borderRadius = rounded === true ? _style.padding * 2 : ( typeof rounded === "number" ? rounded : 0);
        _style.backgroundColor = bg === true ||  ! bgColor ? "white" : bgColor;
    }
    return (<TouchableOpacity {... otherProps} style={[style, _style]}>
        {children}
    </TouchableOpacity>);
}

export const MenuButton: React.FC<StandardButtonProps> = (props: StandardButtonProps) => {
    const { children, size, ... otherProps } = props;
    return (<StandardButton {... otherProps}>
        <ButtonImage source={ImageSources.Menu} size={size || "md"} />
    </StandardButton>);
}

export const ShareButton: React.FC<StandardButtonProps> = (props: StandardButtonProps) => {
    const { children, size, ... otherProps } = props;
    return (<StandardButton {... otherProps}>
        <ButtonImage source={ImageSources.Share} size={size || "md"} />
    </StandardButton>);
}


export const CloseButton: React.FC<StandardButtonProps> = (props: StandardButtonProps) => {
    const { children, size, ... otherProps } = props;
    return (<StandardButton {... otherProps}>
        <ButtonImage source={ImageSources.Close} size={size || "md"} />
    </StandardButton>);
}

export const BackButton: React.FC<StandardButtonProps> = (props: StandardButtonProps) => {
    const { children, size, ... otherProps } = props;
    return (<StandardButton {... otherProps}>
        <ButtonImage source={ImageSources.LeftArrow} size={size || "md"} />
    </StandardButton >);
}
