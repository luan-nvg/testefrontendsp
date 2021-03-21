import { Animated, View, Button, Text, StyleSheet, ScrollView } from 'react-native';
import React, { Component, useEffect } from 'react';
import MyCarousel from '../../molecule/MyCarousel'
import { styles } from './styles';
import { connect, useDispatch, useSelector } from "react-redux";

const VirtualStore = () => {
    const dispatch = useDispatch();

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

    dispatch({
        type: 'ADD_PRODUCTS',
        value: itens,
    }),


    useEffect(() => {

        // console.log(productReducer);
        // dispatch(productReducer(itens, { type: 'INCREASE_COUNTER_ASYNC' }))
    });


    return (
        <View style={styles.container} >
            <View style={styles.headerTitle}>
                <Text style={styles.title}>Conheça nossos</Text>
                <Text style={styles.title}>cursos:</Text>
            </View>
            <MyCarousel></MyCarousel>
        </View>
    );
};

export default VirtualStore;