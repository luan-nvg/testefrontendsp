import { Animated, View, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { useSelector } from "react-redux";
import Helpers from '../../Helps';

const CardCredit = (options) => {
    const [activeSlide, setActiveSlide] = useState(0);
    var card = useSelector(state => state.cardcredit.info);
    var format_card = Helpers.formatCardNumber(card.card_number);

    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.chip} />
                <View style={{ marginLeft: '60%', position: "absolute", }}>
                    <View style={styles.circleOne}></View>
                    <View style={styles.circleTwo}></View>
                </View>
            </View>

            <View>
                <Text style={styles.finaly_card} >
                    {format_card}
                </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.card_label_name} >
                    Nome
                    </Text>

                <Text style={styles.card_label_validate} >
                    Validade
                    </Text>

                <Text style={styles.card_label_cvv} >
                    CVV
                    </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.card_name} >
                    {card.name}
                </Text>

                <Text style={styles.card_validate} >
                    {card.validate}
                </Text>

                <Text style={styles.card_cvv} >
                    {card.cvv}
                </Text>
            </View>

        </View>

    );
};
export default CardCredit;