import { Animated, View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { styles } from './styles';
import Svg from '../../atoms/Svg'
import Buttom from '../../atoms/Button';

const PurchaseMade = (options) => {
    // useEffect(() => {
    // 	SplashScreen.hide();
    // }, []);

    return (
        <View style={styles.container}>
            <View style={{ marginTop: '20%' }}>
                <Text style={styles.title_success}>Sucesso!</Text>
                <Text style={styles.title}>Compra concluída</Text>
            </View>


            <View style={styles.svg}>
                <Svg
                    width={200}
                    height={200}
                />
            </View>
            <View style={styles.division_desc}>
                <Text style={styles.send_email}>Você receberá um email</Text>
                <Text style={styles.desc}>com os detalhes da sua compra.</Text>
            </View>

            <Buttom
                title={'Ok'}
                onPress={
                    () => {
                        options.navigation.popToTop();
                    }
                }
                padding={'2%'}
                width={340}
            ></Buttom>


        </View>
    );
};



export default PurchaseMade;