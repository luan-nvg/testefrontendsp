import React, { Component } from 'react';
import { styles } from './styles';

const Header = (options) => {
    return {
        title: options.title ? options.title : '',
        headerTitleAlign: 'center',
        tabBarVisible: true,
        headerMode: "screen",
        headerTintColor: "#fff", //cor do texto cabeçalho
        headerStyle: {
            backgroundColor: "#FF8686" //cor do cabeçalho
        },

    }
};
export default Header;