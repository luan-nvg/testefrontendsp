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
                    <Text style={{ color: "#707070", fontWeight: "bold", fontSize: 30, marginBottom: 30 }}>Curso básico de agilidade 2</Text>
                </View>
                <View style={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
                >
                    <Text style={{ color: "gray", fontSize: 20, }}>{'\u2022'} Introdução </Text>
                    <Text style={{ color: "gray", fontSize: 20, }}>{'\u2022'} 1 </Text>
                    <Text style={{ color: "gray", fontSize: 20, }}>{'\u2022'} 2 </Text>
                    <View style={{
                        marginTop: 25
                    }} >
                        <Text>
                            <Text style={{ color: "gray", fontSize: 20, fontWeight: "bold" }}> Duração: </Text>
                            <Text style={{ color: "gray", fontSize: 20, }}>45 horas</Text>
                        </Text>

                    </View>

                </View>
                <View style={{
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    marginLeft: 45,
                    marginTop: 30
                }}>
                    <Text style={{ color: "gray", fontSize: 15, }}> Investimento: </Text>

                    <View style={{
                        flexDirection: "row",
                    }} >
                        <Text style={{ color: "#7BBDF5", fontSize: 30, marginLeft: 4 }}>R$</Text>
                        <Text style={{
                            color: "#7BBDF5",
                            fontWeight: "bold",
                            fontSize: 40,
                            marginTop: 8
                        }}>  799.9 </Text>
                    </View>

                </View>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginTop: 20
                }}>

                    <View style={{
                        width: 220
                    }}>

                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#FF8686',
                                padding: 15,
                                // marginBottom: 40,
                                borderRadius: 15,
                            }}
                            onPress={() => {

                            }}
                        >

                            <Text style={{ color: '#ffff', fontSize: 20, }}>Comprar</Text>


                        </TouchableOpacity>
                    </View>
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
        height: 470,
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