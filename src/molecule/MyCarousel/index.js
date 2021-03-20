import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { Component } from 'react';
import { View } from 'react-native';
import CardPackage from '../../molecule/CardPackage'

export default class MyCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
            entries: [
                {
                    name: 'Ativar',
                    value: 1
                },
                {
                    name: 'Desativar',
                    value: 0
                },
                {
                    name: 'Reverter',
                    value: 2
                },

            ],

        };
    }


    _renderItem({ item, index }) {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <CardPackage data={item} />
            </View>
        )
    }

    get pagination() {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: '#FFFFFF' }}
                dotStyle={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    marginHorizontal: 8,
                    backgroundColor: '#FF8686',
                }}
                inactiveDotStyle={{
                    width: 30,
                    height: 30,
                    borderWidth: 1,
                    borderRadius: 30,
                    // marginHorizontal: 8,
                    backgroundColor: '#fff',
                    borderColor: '#ED1D27',
                }}
                inactiveDotOpacity={0.6}
                inactiveDotScale={0.6}
            />
        );
    }

    render() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Carousel
                    sliderWidth={400}
                    itemWidth={400}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />
                { this.pagination}
            </View>
        );
    }
}