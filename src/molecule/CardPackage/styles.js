
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
        marginBottom: 30
    },
    details: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: '12%',
    },
    detailsText: {
        color: "gray",
        fontSize: 20,
    },
    detailsSpacing: {
        marginTop: '7%'
    },
    detailsDuration: {
        fontWeight: "bold"
    },
    investment: {
        marginLeft: '25%',
        marginTop: '5%'
    },
    investmentTitle: {
        color: "gray",
        fontSize: 15
    },
    dollarSign: {
        marginTop: '15%',
        color: "#7BBDF5",
        fontSize: 30,
        marginRight: '10%',
        position: 'absolute',
    },
    investmentValue: {
        color: "#7BBDF5",
        fontWeight: "bold",
        fontSize: 40,
        marginTop: '7%',
        marginLeft: '8%'
    }
});