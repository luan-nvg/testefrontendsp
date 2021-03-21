import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { Component, useState } from 'react';
import { View } from 'react-native';
import CardPackage from '../../molecule/CardPackage'
import { styles } from './styles';

const VirtualStore = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    let itens = [
        {
            "id": "1",
            "name": "Curso de agilidade nível 1",
            "description": "• Introdução 1\n• Metodologias 1\n• PSF 1",
            "duration": "45 horas",
            "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ZCkkxcgAP4pxXbz3I58DZQHaEK%26pid%3DApi&f=1",
            "price": 799.9,
            "action": () => {
                alert('qq');
            }
        },
        {
            "id": "12",
            "name": "Curso de agilidade nível 2",
            "description": "• Introdução 2\n• Metodologias 2\n• PSF 2",
            "duration": "35 horas",
            "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.sympla.com.br%2F5fcd4f6cd4fed.jpg&f=1&nofb=1",
            "price": 899.9,

        },
        {
            "id": "14",
            "name": "Curso de agilidade nível 3",
            "description": "• Introdução 3\n• Metodologias 3\n• PSF 3",
            "duration": "35 horas",
            "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.wfNOsTqsc28CJ0vrtqQAaAHaDt%26pid%3DApi&f=1",
            "price": 999.9
        }
    ];

    const renderItem = (entries) => {
        return (
            <View style={styles.item}>
                <CardPackage data={entries} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Carousel
                sliderWidth={500}
                itemWidth={500}
                data={itens}
                renderItem={renderItem}
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
    );
}

export default VirtualStore;
