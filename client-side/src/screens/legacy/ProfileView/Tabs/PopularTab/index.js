import React from 'react'
import {
    View,
    ScrollView,
    TouchableOpacity,
    Platform,
    Image
} from 'react-native'
import { Content, Button, Text } from 'native-base';
import { Basement } from '../../../../../components/Basement';
import { ImageSources, ScreenNames } from '../../../../../constants';

import CollectionListingItemStyleThree from '../../../../../components/legacy/CollectionListingItemStyleThree';

import styles from './style';

export class PopularTab extends React.PureComponent {
    renderProductList =()=> {
        return this.props.productList.map((item, key) => {
            return (
                <View key={key}>
                       <CollectionListingItemStyleThree
                        Adimage={item.thumbail}
                        name={item.name}
                        price={item.price}
                        isNewArrive={item.isNewArrive}
                        productId={item.id}
                        onPress={this.props.onPress}
                    />
                </View>
            );
        });
    }

    render() {
        return (                 
            <ScrollView
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            >
                {this.renderProductList()}
            </ScrollView>
        )
    }
}