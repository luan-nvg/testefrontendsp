import { Animated, View, Button, Text, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import CardPackage from '../../molecule/CardPackage'
import MyCarousel from '../../molecule/MyCarousel'
import { styles } from './styles';

const VirtualStore = () => {
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