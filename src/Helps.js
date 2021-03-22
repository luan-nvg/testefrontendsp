
const Helpers = {

    formatBr: (value, cifr = true) => {
        var numero = value.toFixed(2).split('.');
        numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
        var format = numero.join(',');

        if (cifr) {
            format = "R$ " + format
        }
        return format;
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