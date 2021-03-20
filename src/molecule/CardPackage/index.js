import { Animated, View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';


const CardPackage = () => {

    return (
        // <View style={{
        //     width: 320,
        //     height: 500,
        //     backgroundColor: "#0000001A",
        //     opacity: 0.9,
        //     marginLeft: 5,
        //     borderRadius: 40,
        // }}
        //     onChange={index => this.setState({ index })}
        // >

        // </View>

        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={{ color: "#707070", fontWeight: "bold", fontSize: 30, marginBottom: 20 }}>Curso básico de agilidade 2</Text>
                </View>
                <View style={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}

                >
                    <Text style={{ color: "gray", fontSize: 20, }}>{'\u2022'} Introdução </Text>
                </View>
            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        padding: 8,
        // justifyContent: 'center',
        // alignItems: "center"
    },
    card: {

        // justifyContent: 'center',
        // alignItems: "center",
        width: 320,
        height: 500,
        backgroundColor: "white",
        borderRadius: 40,
        elevation: 3,
        padding: 10,
    },

    header: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
    }
});




export default CardPackage;