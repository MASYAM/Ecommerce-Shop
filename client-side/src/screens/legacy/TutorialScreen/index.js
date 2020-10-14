import React from 'react'
import {
    View,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    Image,
    Keyboard,
    Dimensions
} from 'react-native'
import { Container, Content, Button, Text, Footer, Title, } from 'native-base'
import Carousel from 'react-native-snap-carousel';
import TutorialCard from '../../../components/legacy/TutorialCard';
import { Actions } from 'react-native-router-flux'
import styles from './style'
import { ScreenNames } from '../../../constants/Screens'
import { ImageSources } from '../../../constants'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { NavigationActions, StackActions, NavigationProp } from 'react-navigation';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

type OwnProps = {
    navigation: NavigationProp;
}

type Props = OwnProps & {
    userId: string,
    isPhoneVerified: boolean
}
class TutorialScreen extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide:0, 
            entries:[
            {  
                'image':ImageSources.TutorialImage001,
                'text':'1000 of collections',
                'description':''
            },
            {  
                'image':ImageSources.TutorialImage002,
                'text':'Find exclusive deals',
                'description':''
            },
            {  
                'image':ImageSources.TutorialImage003,
                'text':'Every day new fashion',
                'description':''
            }
        ] };
    }

    doStart = () => {
        Actions.push(ScreenNames.Landing + "$main");
    }

    _renderTutoriaItem = ({item, index}) => {
        return (
            <View>
                <TutorialCard
                    Adimage={item.image}
                    maintxt={item.text}
                    description={item.description}
                />
            </View>
        );
    }

    render() {
        return (
            <Container style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    translucent={true}
                />
                <View style={styles.body}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        renderItem={this._renderTutoriaItem}
                        sliderWidth={viewportWidth}
                        itemWidth={300}
                        loopClonesPerSide={2}    
                        firstItem={1}
                        loop={false}
                        />
                </View>
                <View style={styles.bottomLayerFiller}></View>
                <View style={styles.bottomLayer}>
                    <Button full style={styles.btnLogin} onPress={this.doStart}>
                        <Text style={styles.btnLoginTextStyle} large>Explore</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}

 export default TutorialScreen;
