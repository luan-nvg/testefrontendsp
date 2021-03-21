import React, { useEffect } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';

const Button = (item) => {
    return (
        <View style={styles.container}>
            <View style={{
                width: item.width
            }}>
                <TouchableOpacity
                    style={styles.opacity}
                    onPress={() => {
                        item.onPress();
                    }}
                >
                    <Text style={styles.Text}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default Button;