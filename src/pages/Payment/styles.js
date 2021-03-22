
import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
    },
    card: {
        marginTop: '5%',
        width: '85%',
        height: 200,
        backgroundColor: "#7BBDF5",
        borderRadius: 20,
        elevation: 3,
        marginBottom: '5%'
    },
    item: {
        alignItems: 'center',
    },
    chip: {
        marginTop: '7%',
        marginLeft: '5%',
        width: '18%',
        height: 42,
        backgroundColor: "#FFDC7E",
        borderRadius: 10,
        elevation: 3,
    },
    circleOne: {
        position: "absolute",
        top: 20,
        left: 30,
        width: 42,
        height: 42,
        borderRadius: 42 / 2,
        backgroundColor: "#FF8686",
    },

    circleTwo: {
        position: "absolute",
        top: 20,
        left: 30,
        width: 38,
        height: 42,
        borderRadius: 42 / 2,
        backgroundColor: "#FFDC7E",
        marginLeft: '28%'
    },
    finaly_card: {
        fontFamily: 'FreeSansBold',
        fontSize: 30,
        marginLeft: '5%',
        color: "white",
        marginTop: '5%'
    },

    card_label_name: {
        fontFamily: 'FreeSansLight',
        fontSize: 12,
        color: "white",
        marginLeft: '5%'
    },
    card_label_validate: {
        fontFamily: 'FreeSansLight',
        fontSize: 12,
        color: "white",
        marginLeft: '48%'
    },
    card_label_cvv: {
        fontFamily: 'FreeSansLight',
        fontSize: 12,
        color: "white",
        marginLeft: '10%'
    },

    card_name: {
        fontFamily: 'FreeSansMedium',
        fontSize: 13,
        color: "white",
        marginLeft: '5%'
    },
    card_validate: {
        fontFamily: 'FreeSansMedium',
        fontSize: 13,
        color: "white",
        marginLeft: '15%'
    },
    card_cvv: {
        fontFamily: 'FreeSansMedium',
        fontSize: 13,
        color: "white",
        marginLeft: '10%'
    },

});