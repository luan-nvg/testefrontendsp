
const Helpers = {

    formatBr: (value) => {
        value = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return value;
    },

    formatCardNumber: (value) => {
        var format_card = '•••• •••• •••• •••• ••••';
        if (value && value.length >= 17) {
            var format_card = "•••• •••• •••• " + value.slice(15, 19);
            return format_card;
        }

        return format_card;
    },
}

export default Helpers;