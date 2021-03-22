import { Animated, View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Buttom from '../../atoms/Button';
import { styles } from './styles';
import Helpers from '../../Helps';

const CardPackage = (options) => {
    var item = options.data.item;
    var total_format = Helpers.formatBr(item.price, false);

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{item.name}</Text>
            </View>

            <View style={styles.details}>
                <Text style={styles.detailsText}>{item.description}</Text>
                <View style={styles.detailsSpacing}>
                    <Text>
                        <Text style={[styles.detailsText, styles.detailsDuration]}> Duração: </Text>
                        <Text style={styles.detailsText}>{item.duration}</Text>
                    </Text>

                </View>

            </View>

            <View style={styles.investment}>
                <Text style={styles.investmentTitle}> Investimento: </Text>
                <Text style={styles.dollarSign}>R$ </Text>
                <Text style={styles.investmentValue}>{total_format}</Text>
            </View>

            <Buttom
                title={'Comprar'}
                onPress={
                    () => {
                        options.navigation.navigate('Payment', item);
                    }
                }
                width={'70%'}
            ></Buttom>
        </View>
    );
};
export default CardPackage;