
import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    card: {
        marginTop: '7%',
        width: '65%',
        height: '90%',
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
        marginTop : '5%'

    },
    details: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: '12%',
    },
    detailsText: {
        color: "gray",
        fontSize: 20,
        fontFamily: 'FreeSansLight',
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
        fontFamily: 'FreeSansLight',
    },
    dollarSign: {
        fontFamily: 'FreeSansBold',
        marginTop: '7%',
        color: "#7BBDF5",
        fontSize: 30,
        position: 'absolute',
    },
    investmentValue: {
        fontFamily: 'FreeSansBold',
        color: "#7BBDF5",
        fontWeight: "bold",
        fontSize: 40,
        // marginTop: '1%',
        marginLeft: '20%'
    }
});