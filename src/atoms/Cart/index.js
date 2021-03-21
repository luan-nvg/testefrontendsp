import React, { Component } from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';

const Cart = (options) => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: 120
        }}>
            <TouchableOpacity activeOpacity={0.7}
                onPress={() => {
                    options.navigation.navigate('Counter');
                }}>
                <Text>Icone</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Cart;