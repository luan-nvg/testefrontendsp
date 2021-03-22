
import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
    },
    card: {
        marginTop: '7%',
        width: '85%',
        height: '25%',
        backgroundColor: "#7BBDF5",
        borderRadius: 20,
        elevation: 3,
    },
    item: {
        alignItems: 'center',
    },
    chip: {
        marginTop: '7%',
        marginLeft: '5%',
        width: '18%',
        height: 45,
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
        marginLeft : '28%'
    }

});