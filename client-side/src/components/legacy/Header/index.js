import React from 'react';
import { View, ViewProps, TouchableOpacity, Image } from 'react-native';
import { Header, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from "./style";
import { ImageSources } from '../../../constants';
import { MenuButton, BackButton, CloseButton } from '../../StandardButtons';

export type SimpleHeaderViewProps = ViewProps & {

}

export const SimpleHeader: React.FC<SimpleHeaderViewProps> = (props: SimpleHeaderViewProps) => {
    const { style, children, ...wrapProps } = props;
    return <Header transparent translucent style={[styles.container, style]} >
        {children}
    </Header>
}

export type CoreHeaderViewProps = SimpleHeaderViewProps & {
    left?: React.ReactElement,
    right?: React.ReactElement,
}

export const CoreHeader: React.FC<CoreHeaderViewProps> = (props: CoreHeaderViewProps) => {
    return <SimpleHeader>
        {props.left && <View style={styles.leftWrap}>
            {props.left}
        </View>}
        <View style={styles.bodyWrap}>
            {props.children}
        </View>
        {props.right && <View style={styles.rightWrap}>
            {props.right}
        </View>}
    </SimpleHeader>
}


export type StandardHeaderViewProps = CoreHeaderViewProps & {
    drawer?: boolean,
    dismissable?: boolean,
    back?: boolean,
    title?: string,
}

export const StandardHeader: React.FC<StandardHeaderViewProps> = (props: StandardHeaderViewProps) => {
    return (<CoreHeader
        left={<View style={{marginHorizontal: -18}}>
            {props.dismissable && <CloseButton onPress={() => Actions.pop()} />}
            {props.drawer && <MenuButton onPress={() => Actions.drawerOpen()} />}
            {props.back && <BackButton onPress={() => Actions.pop()} />}
            {props.left}
            </View>}
        right={props.right}
        >
        {!!props.title && <Text style={styles.bodyTitle}>{props.title}</Text>}
        {props.children}
    </CoreHeader>);
}
