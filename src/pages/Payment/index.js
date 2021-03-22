import { Animated, View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Buttom from '../../atoms/Button';
import { styles } from './styles';
import Purchase from '../../organism/Form/Purchase';

const Payment = (options) => {
    // options.navigation.state.params.name
    // console.log(options.navigation.getParam('name'));
    // const { itemId, otherParam } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.chip} />
                    <View style={{ marginLeft: '60%', position: "absolute", }}>
                        <View style={styles.circleOne}></View>
                        <View style={styles.circleTwo}></View>
                    </View>
                </View>

                <View>
                    <Text style={styles.finaly_card} >
                        •••• •••• •••• •••• 1234
                    </Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.card_label_name} >
                        Nome
                    </Text>

                    <Text style={styles.card_label_validate} >
                        Validate
                    </Text>

                    <Text style={styles.card_label_cvv} >
                        CVV
                    </Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.card_name} >
                        Maria de Fátima da Silva
                    </Text>

                    <Text style={styles.card_validate} >
                        05/10
                    </Text>

                    <Text style={styles.card_cvv} >
                        000
                    </Text>
                </View>

            </View>

            <View style={{
                marginTop: '3%',
                width: '90%',
                // height: '45%',
            }}>
                <Purchase navigation={options.navigation}></Purchase>

            </View>

        </View >
    );
};
export default Payment;