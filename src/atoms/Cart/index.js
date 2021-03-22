import React, { Component } from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg from '../Svg'
const Cart = (options) => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: 78
        }}>
            <TouchableOpacity activeOpacity={0.7}
                onPress={() => {
                    // options.navigation.navigate('PurchaseMade');
                }}>
                <Svg
                    name={'Cart'}
                />
            </TouchableOpacity>
        </View>
    );
};
export default Cart;