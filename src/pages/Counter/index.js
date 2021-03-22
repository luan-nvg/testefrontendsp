// Imports: Dependencies
import React, { Component } from 'react'; import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
// Screen: Counter
const Counter = () => {
    return (
        <View></View>
        // <SafeAreaView style={styles.container}>
        //     <Text style={styles.counterTitle}>Counter</Text>
        //     <View style={styles.counterContainer}>
        //         <TouchableOpacity onPress={this.props.reduxIncreaseCounter}>
        //             <Text style={styles.buttonText}>+</Text>
        //         </TouchableOpacity>
        //         {/* <Text style={styles.counterText}>{this.props.counter}</Text> */}
        //         <TouchableOpacity onPress={this.props.reduxDecreaseCounter}>
        //             <Text style={styles.buttonText}>-</Text>
        //         </TouchableOpacity>
        //     </View>
        // </SafeAreaView>
    )
}
// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterTitle: {
        fontFamily: 'System',
        fontSize: 32,
        fontWeight: '700',
        color: '#000',
    },
    counterText: {
        fontFamily: 'System',
        fontSize: 36,
        fontWeight: '400',
        color: '#000',
    },
    buttonText: {
        fontFamily: 'System',
        fontSize: 50,
        fontWeight: '300',
        color: '#007AFF',
        marginLeft: 40,
        marginRight: 40,
    },
});

// Exports
export default Counter;