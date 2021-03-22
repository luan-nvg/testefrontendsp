
const Helpers = {

    formatBr: (value) => {
        value = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return value;
    },
}

export default Helpers;