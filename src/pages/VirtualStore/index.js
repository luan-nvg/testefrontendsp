import { Animated, View, Button, Text, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import CardPackage from '../../molecule/CardPackage'
import MyCarousel from '../../molecule/MyCarousel'

const VirtualStore = () => {
    // useEffect(() => {
    // 	SplashScreen.hide();
    // }, []);

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            justifyContent: "space-between"
        }} >
            <View style={{
                marginLeft: '5%'
            }}
            >
                <Text style={{
                    fontSize: 38,
                    color: "#FF8686"
                }}>Conheça nossos</Text>
                <Text style={{
                    fontSize: 38,
                    color: "#FF8686"
                }}>cursos:</Text>
            </View>


            <MyCarousel></MyCarousel>
            {/* <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <CardPackage>

                </CardPackage>

                <CardPackage>

                </CardPackage>

                <CardPackage>

                </CardPackage>


            </ScrollView > */}





        </View>
    );
};


// VirtualStore.navigationOptions = ({ navigation }) => ({
//     title: 'Editar Placa',
//     headerTintColor: '#ffffff',
//     headerStyle: {
//         backgroundColor: '#2C90FA',
//         borderBottomColor: '#ffffff',
//         // borderBottomWidth: 1,
//     },
//     headerTitleStyle: {
//         fontSize: 18,
//     },
// })



export default VirtualStore;