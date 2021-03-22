import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import React, { Component } from 'react';

import PurchaseMade from './pages/PurchaseMade';
import VirtualStore from './pages/VirtualStore';
import Counter from './pages/Counter';
import Payment from './pages/Payment';
import Header from './atoms/Header/'
import Cart from './atoms/Cart/'

const Routes = createStackNavigator({
    VirtualStore: {
        screen: VirtualStore,
        navigationOptions: ({ navigation }) => {
            let buttom = {
                headerRight: (
                    () => (
                        <Cart navigation={navigation}></Cart>
                    )
                )
            }
            return Object.assign(buttom, Header({ title: 'Loja Virtual' }))
        },
    },
    Counter: {
        screen: Counter,
        navigationOptions: ({ navigation }) => (Header({ title: 'Contador' })),
    },
    PurchaseMade: {
        screen: PurchaseMade,
        navigationOptions: ({ navigation }) => (Header({ title: 'Pagamento com Cartão' })),
    },

    Payment: {
        screen: Payment,
        navigationOptions: ({ navigation }) => (Header({ title: 'Pagamento com Cartão' })),
    }
});

Routes.navigationOptions = {
    header: null,
    headerStyle: {
        backgroundColor: '#2C90FA',
        borderBottomColor: '#ffffff',
    },
};

export default createAppContainer(Routes);