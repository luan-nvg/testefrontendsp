
import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    card: {
        marginTop: '2%',
        width: '65%',
        height: '95%',
        backgroundColor: "white",
        borderRadius: 40,
        elevation: 3,
    },
    header: {
        justifyContent: 'center',
        alignItems: "center",
    },
    headerTitle: {
        color: "#707070",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 30,
        fontFamily: 'FreeSansBold',

    },
    details: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: '12%',
    },
    detailsText: {
        color: "gray",
        fontSize: 20,
        fontFamily: 'FreeSansBold',
    },
    detailsSpacing: {
        marginTop: '7%'
    },
    detailsDuration: {
        fontWeight: "bold",
        fontFamily: 'FreeSansBold',
    },
    investment: {
        marginLeft: '25%',
        marginTop: '5%'
    },
    investmentTitle: {
        color: "gray",
        fontSize: 15,
        fontFamily: 'FreeSansBold',
    },
    dollarSign: {
        fontFamily: 'FreeSansBold',
        marginTop: '15%',
        color: "#7BBDF5",
        fontSize: 30,
        position: 'absolute',
    },
    investmentValue: {
        fontFamily: 'FreeSansBold',
        color: "#7BBDF5",
        fontWeight: "bold",
        fontSize: 40,
        marginTop: '7%',
        marginLeft: '19%'
    }
});