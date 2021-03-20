import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import React, { Component } from 'react';
import { Animated, View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PurchaseMade from './pages/PurchaseMade';
import VirtualStore from './pages/VirtualStore';
import Counter from './pages/Counter'

const Routes = createStackNavigator({

    VirtualStore: {
        screen: VirtualStore,
        navigationOptions: ({ navigation }) => ({
            title: 'Loja Virtual',
            headerTitleAlign: 'center',
            tabBarVisible: true,
            headerMode: "screen",
            headerTintColor: "#fff", //cor do texto cabeçalho
            headerStyle: {
                backgroundColor: "#FF8686" //cor do cabeçalho
            },
            headerRight: (
                () => (
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: 120
                    }}>
                        <TouchableOpacity activeOpacity={0.7}
                            onPress={() => {
                                navigation.navigate('Counter');
                            }}>
                                <Text>Icone</Text>
                        </TouchableOpacity>
                    </View>
                )
            ),

        }),
    },



    Counter: {
        screen: Counter,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerMode: "screen",
            headerTintColor: "#fff", //cor do texto cabeçalho
            headerStyle: {
                backgroundColor: "#202020" //cor do cabeçalho
            }
        }),
    },


    PurchaseMade: {
        screen: PurchaseMade,
        navigationOptions: ({ navigation }) => ({
            // header: null,
            tabBarVisible: true,
            headerMode: "screen",
            headerTintColor: "#fff", //cor do texto cabeçalho
            headerStyle: {
                backgroundColor: "#202020" //cor do cabeçalho
            }
        }),
    },


});




Routes.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null,

    headerStyle: {
        backgroundColor: '#2C90FA',
        borderBottomColor: '#ffffff',
        // borderBottomWidth: 1,
    },
};

export default createAppContainer(Routes);