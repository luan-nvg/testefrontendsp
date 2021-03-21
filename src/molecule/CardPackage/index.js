import { Animated, View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Buttom from '../../atoms/Button';
import { styles } from './styles';

const CardPackage = () => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Curso básico de agilidade 2</Text>
            </View>

            <View style={styles.details}>
                <Text style={styles.detailsText}>{'\u2022'} Introdução </Text>
                <Text style={styles.detailsText}>{'\u2022'} 1 </Text>
                <Text style={styles.detailsText}>{'\u2022'} 2 </Text>
                <View style={styles.detailsSpacing}>
                    <Text>
                        <Text style={[styles.detailsText, styles.detailsDuration]}> Duração: </Text>
                        <Text style={styles.detailsText}>45 horas</Text>
                    </Text>

                </View>

            </View>

            <View style={styles.investment}>
                <Text style={styles.investmentTitle}> Investimento: </Text>
                <Text style={styles.dollarSign}>R$</Text>
                <Text style={styles.investmentValue}>  799.9 </Text>
            </View>

            <Buttom
                title={'Comprar'}
                onPress={
                    () => {
                        alert("Ok")
                    }
                }
                width={'70%'}
            ></Buttom>
        </View>
    );
};
export default CardPackage;