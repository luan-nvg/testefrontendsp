import { Animated, View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Buttom from '../../atoms/Button';
import { styles } from './styles';

const CardPackage = (options) => {

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{options.data.item.name}</Text>
            </View>

            <View style={styles.details}>
                <Text style={styles.detailsText}>{options.data.item.description}</Text>
                <View style={styles.detailsSpacing}>
                    <Text>
                        <Text style={[styles.detailsText, styles.detailsDuration]}> Duração: </Text>
                        <Text style={styles.detailsText}>{options.data.item.duration}</Text>
                    </Text>

                </View>

            </View>

            <View style={styles.investment}>
                <Text style={styles.investmentTitle}> Investimento: </Text>
                <Text style={styles.dollarSign}>R$ </Text>
                <Text style={styles.investmentValue}>{options.data.item.price}</Text>
            </View>

            <Buttom
                title={'Comprar'}
                onPress={
                    () => {
                        console.log(options.data.item);
                        options.navigation.navigate('Payment', options.data.item);
                    }
                }
                width={'70%'}
            ></Buttom>
        </View>
    );
};
export default CardPackage;