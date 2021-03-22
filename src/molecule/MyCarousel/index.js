import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import CardPackage from '../../molecule/CardPackage'
import { styles } from './styles';
import { connect, useDispatch, useSelector } from "react-redux";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const renderItem = (entries, navigation) => {
    return (
        <View style={styles.item}>
            <CardPackage data={entries} navigation={navigation} />
        </View>
    )
}

const MyCarousel = ({ navigation }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    var api = useSelector(state => state.api);
    var loading = api.isLoadingData;

    var itens = api.data ? api.data : [];
    return (
        <View style={styles.container}>
            {
                loading ? (
                    <SkeletonPlaceholder>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{
                                marginBottom: '9%',
                                width: 300, height: 400, borderRadius: 40
                            }} />

                        </View>
                    </SkeletonPlaceholder>

                ) :
                    (
                        <View>

                            <Carousel
                                sliderWidth={500}
                                itemWidth={500}
                                data={itens}
                                renderItem={(item) => {
                                    return renderItem(item, navigation);
                                }}
                                onSnapToItem={(index) => {
                                    setActiveSlide(index);
                                }}
                            />
                            <View
                                style={styles.containerCarousel}
                            >
                                <Pagination
                                    dotsLength={itens.length}
                                    activeDotIndex={activeSlide}
                                    containerStyle={styles.containerPaginate}
                                    dotStyle={styles.dotStyle}
                                    inactiveDotStyle={styles.inactiveDotStyle}
                                    inactiveDotOpacity={0.6}
                                    inactiveDotScale={0.6}
                                />
                            </View>
                        </View>
                    )
            }

        </View>
    );
}

export default MyCarousel;