import { Animated, View, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Buttom from '../../atoms/Button';
import { styles } from './styles';
import Purchase from '../../organism/Form/Purchase';
import CardCredit from '../../molecule/CardCredit';

const Payment = (options) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <CardCredit />
                <View style={styles.container_form}>
                    <Purchase navigation={options.navigation}></Purchase>
                </View>
            </View>
        </ScrollView>
    );
};
export default Payment;