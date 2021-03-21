import { Animated, View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Buttom from '../../atoms/Button';
import { styles } from './styles';

const Payment = (options) => {
    options.navigation.state.params.name
    // console.log(options.navigation.getParam('name'));
    // const { itemId, otherParam } = route.params;

    return (
        <View style={styles.container}>

        </View>
    );
};
export default Payment;