import { Animated, View, Button, Text, StyleSheet, ScrollView } from 'react-native';
import React, { Component, useEffect } from 'react';
import MyCarousel from '../../molecule/MyCarousel'
import { styles } from './styles';
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchArticleDetails } from "../../actions/api";

const VirtualStore = () => {
    const dispatch = useDispatch();
    dispatch(fetchArticleDetails());

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