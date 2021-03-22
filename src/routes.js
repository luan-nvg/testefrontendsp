import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import React, { Component } from 'react';

import PurchaseMade from './pages/PurchaseMade';
import VirtualStore from './pages/VirtualStore';
import Counter from './pages/Counter';
import Payment from './pages/Payment';
import Header from './atoms/Header/'
import Cart from './atoms/Cart/'


const buttom = (navigation) => {
    var teste = {
        headerRight: (
            () => (
                <Cart navigation={navigation}></Cart>
            )
        )
    }
    return teste;
}

const Routes = createStackNavigator({
    VirtualStore: {
        screen: VirtualStore,
        navigationOptions: ({ navigation }) => {
            return Object.assign(buttom(navigation), Header({ title: 'Loja Virtual' }))
        },
    },
    Counter: {
        screen: Counter,
        navigationOptions: ({ navigation }) => {
            return Header({ title: 'Carrinho' })
        },
    },
    PurchaseMade: {
        screen: PurchaseMade,
        navigationOptions: ({ navigation }) => {
            return Object.assign(buttom(navigation), Header({ title: 'Pagamento com Cartão' }))
        },
    },

    Payment: {
        screen: Payment,
        navigationOptions: ({ navigation }) => {
            return Object.assign(buttom(navigation), Header({ title: 'Pagamento com Cartão' }))
        },
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