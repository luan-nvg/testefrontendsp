
import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    dotStyle: {
        width: 20,
        height: 20,
        borderRadius: 20,
        marginHorizontal: 8,
        backgroundColor: '#FF8686',
    },
    inactiveDotStyle: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#fff',
        borderColor: '#ED1D27',
    },

    containerPaginate: {
        backgroundColor: '#FFFFFF'
    },
    item: {
        alignItems: 'center',
    },
    containerCarousel : {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
});