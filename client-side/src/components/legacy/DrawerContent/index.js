import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground
    
} from 'react-native';
import { Container, Content, Header, Icon } from 'native-base';
import { NavigationActions, NavigationProp } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import { Colors, ImageSources } from '../../../constants';
import { DrawerMenuItem } from '../DrawerMenuItem';
import styles from './style';

type DrawerUserProfilePayload = {
    name: string,
    pictureUrl: string,
}
type DrawerMenuItemPayload = {
    icon: string,
    title: string,
    to?: string,
    params?: any,
    modal?: boolean,
}
type DrawerContentProps = {
    navigation: NavigationProp,
    onPressProfile?: () => void,
    userProfile?: DrawerUserProfilePayload,
    menuItems?: DrawerMenuItemPayload[],
}

export const DrawerContent: React.FC<DrawerContentProps> = (props: DrawerContentProps) => {

    const { menuItems, userProfile, onPressProfile, navigation } = props;
    const onOpenMenuItem = (menuItem: DrawerMenuItem) => {
        if ( !!menuItem.to ) {
            const params = typeof menuItem.params === "function" ? menuItem.params() : menuItem.params;
            if ( menuItem.modal ) {
                Actions.push(menuItem.to, {modal: true, ...params});
            } else {
                Actions.drawerClose();
                Actions.jump(menuItem.to, params);
                setTimeout( () => {
                    Actions.refresh(params);
                }, 5);
            }
        }
    }
    return (
        <Container>
            <SafeAreaView style={styles.userProfileContainer}>
            <ImageBackground
                source={require("../../../../assets/profile_bg.png")}
                resizeMode="cover"
                style={styles.backgroundImage}
                imageStyle={styles.backgroundImage_imageStyle}
            >
                 <View style={styles.userProfileWrap}>
                    <View style={styles.userProfilePicWrap}>
                        <Image style={styles.userImage}  source={{ uri: userProfile.profilePic  }}  />
                        {/* <View style={styles.cameraButton}>
                            <Icon name="camera" type="MaterialCommunityIcons" style={styles.cameraIcon} />
                        </View> */}
                    </View>
                    <TouchableOpacity  onPress={onPressProfile} style={styles.usernameWrap}>
                        <Text style={styles.usernameText}>{userProfile.name}</Text>
                        <Text style={styles.usernameSubtext}>View profile</Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </SafeAreaView>
            <ScrollView contentContainerStyle={{backgroundColor: Colors.white}} style={{backgroundColor: Colors.white, flex: 1}}>
                {!!menuItems && Array.isArray(menuItems) && menuItems.map((menuItem, index) => (
                    <DrawerMenuItem
                        key={`$mi-${index}`}
                        icon={menuItem.icon}
                        title={menuItem.title}
                        notification={menuItem.notification}
                        onPress={() => onOpenMenuItem(menuItem)}
                    />
                ))}

            </ScrollView>
        </Container>
    );

}
