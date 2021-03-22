import { Formik, useFormikContext } from 'formik';
import * as yup from 'yup';

import { Animated, View, Text, ScrollView } from 'react-native';
import React, { useEffect, Fragment } from 'react';
import { styles } from './styles';
import { TextInput } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import Helpers from '../../../Helps';
import Buttom from '../../../atoms/Button';
import { connect, useDispatch, useSelector } from "react-redux";

const DispatchFormik = (dispatch, options) => {
    let type = options.type;
    let value = options.value;
    let formik = options.formik;

    formik.setFieldValue(type, value);
    let values = formik.values;

    for (const key in values) {
        if (key == type) {
            values[key] = value;
        }
    }

    dispatch({
        type: "CARD",
        value: values,
    });
}

const save = (options, values) => {
    options.navigation.navigate('PurchaseMade');
}


const Purchase = (options) => {
    const dispatch = useDispatch();

    var item = options.navigation.state.params;
    var descont = (item.price * 10) / 100;
    var total = item.price - descont;

    var descont_format = '- ' + Helpers.formatBr(descont);
    var value_package = Helpers.formatBr(item.price);
    var total_format = Helpers.formatBr(total);


    return (
        <View styles={{
            borderWidth: 15,
            backgroundColor: 'red',
        }}>

            <Formik
                initialValues={{ card_number: '', name: '', validate: '', cvv: '', }}
                onSubmit={(values) => {
                    save(options, values);
                }}
                validationSchema={yup.object().shape({

                    card_number: yup
                        .string()
                        .required('Informe o Número do cartão!')
                        .min(19, 'O Número do cartão deve conter no minimo  16 números!')
                        .max(19, 'O Número do cartão deve conter no máximo 16 números!'),
                    name: yup
                        .string()
                        .required('Informe o Nome impresso no cartão!'),
                    cvv: yup
                        .string()
                        .required('Informe o CVV do cartão!')
                        .min(3, 'O CVV deve conter mais de 3 números!')
                        .max(4, 'O CVV deve conter menos de 4 números!'),

                    validate: yup
                        .string()
                        .required('Informe o Validade do cartão!')
                        .min(5, 'A Validade deve conter no minimo  4 números!')
                        .max(5, 'A Validade deve conter menos  4 números!'),
                })}

            >
                {
                    formik => (
                        <Fragment>

                            <View style={styles.containerInput}>
                                <TextInput
                                    mode={'outlined'}
                                    label="Número do cartão de crédito"
                                    onChangeText={(value) => {
                                        DispatchFormik(dispatch, {
                                            formik: formik,
                                            type: 'card_number',
                                            value
                                        })
                                    }}
                                    onBlur={formik.handleBlur('card_number')}
                                    keyboardType='decimal-pad'
                                    autoCapitalize="words" //verificar oq é 
                                    maxLength={100}
                                    style={!formik.errors.card_number ? styles.textInput : styles.TextInvalid}
                                    value={formik.values.card_number}
                                    render={props =>
                                        <TextInputMask
                                            {...props}
                                            mask="[0000] [0000] [0000] [0000]"
                                        />
                                    }
                                >
                                </TextInput>
                                {formik.errors && formik.errors.card_number ?
                                    <Text style={styles.TextError}>{formik.errors.card_number}</Text>
                                    : null
                                }
                            </View>

                            <View style={styles.containerInput}>
                                <TextInput
                                    mode={'outlined'}
                                    label="Nome"
                                    onChangeText={(value) => {
                                        DispatchFormik(dispatch, {
                                            formik: formik,
                                            type: 'name',
                                            value
                                        })
                                    }}

                                    onBlur={formik.handleBlur('name')}
                                    autoCapitalize="words" //verificar oq é 
                                    maxLength={100}
                                    style={!formik.errors.name ? styles.textInput : styles.TextInvalid}
                                    value={formik.values.name}
                                >
                                </TextInput>
                                {formik.errors && formik.errors.name ?
                                    <Text style={styles.TextError}>{formik.errors.name}</Text>
                                    : null
                                }
                            </View>


                            <View style={styles.sideBySideSpace}>
                                <TextInput
                                    mode={'outlined'}
                                    label="Validade"
                                    onChangeText={(value) => {
                                        DispatchFormik(dispatch, {
                                            formik: formik,
                                            type: 'validate',
                                            value
                                        })
                                    }}
                                    onBlur={formik.handleBlur('validate')}
                                    value={formik.values.validate}
                                    keyboardType='decimal-pad'
                                    autoCapitalize="words" //verificar oq é 
                                    maxLength={100}
                                    style={!formik.errors.validate ? [styles.textInput, styles.inputValidate] : [styles.TextInvalid, styles.inputValidate]}
                                    value={formik.values.validate}
                                    render={props =>
                                        <TextInputMask
                                            {...props}
                                            mask="[00]/[00]"
                                        />
                                    }

                                >
                                </TextInput>

                                <TextInput
                                    mode={'outlined'}
                                    label="CVV"
                                    onChangeText={(value) => {
                                        DispatchFormik(dispatch, {
                                            formik: formik,
                                            type: 'cvv',
                                            value
                                        })
                                    }}
                                    onBlur={formik.handleBlur('cvv')}
                                    value={formik.values.cvv}
                                    keyboardType='decimal-pad'
                                    autoCapitalize="words" //verificar oq é 
                                    maxLength={100}
                                    style={!formik.errors.cvv ? [styles.textInput, styles.inputCvv] : [styles.TextInvalid, styles.inputCvv]}
                                    value={formik.values.cvv}
                                    render={props =>
                                        <TextInputMask
                                            {...props}
                                            mask="[0000]"
                                        />
                                    }

                                >
                                </TextInput>

                            </View>

                            <View style={styles.sideBySideSpace}>
                                <View style={styles.inputValidate}>
                                    {formik.errors && formik.errors.validate &&
                                        <Text style={styles.TextError}>{formik.errors.validate}</Text>
                                    }
                                </View>
                                <View style={styles.inputCvv}>
                                    {formik.errors && formik.errors.cvv &&
                                        <Text style={styles.TextError}>{formik.errors.cvv}</Text>
                                    }
                                </View>

                            </View>

                            <View style={styles.lineOne} />

                            <View style={[styles.sideBySide, styles.desc]}>
                                <Text style={styles.namePrice}>
                                    {options.navigation.getParam('name')}
                                </Text>
                                <Text style={styles.price} >{value_package}</Text>
                            </View>

                            <View style={[styles.sideBySide, styles.desc]}>
                                <Text style={styles.nameDiscount}>
                                    Desconto 10%
                            </Text>
                                <Text style={styles.discount} >{descont_format}</Text>
                            </View>

                            <View
                                style={styles.lineTwo}
                            />

                            <View style={[styles.sideBySide, styles.desc]}>
                                <Text style={styles.nameTotal}>
                                    Total:
                            </Text>
                                <Text style={styles.total} >{total_format}</Text>
                            </View>
                            <View style={styles.divisionBottom}>
                                <Buttom
                                    title={'Pagar'}
                                    onPress={
                                        () => {
                                            formik.handleSubmit();
                                        }
                                    }
                                    padding={'3%'}
                                    width={'100%'}
                                ></Buttom>
                            </View>

                        </Fragment>
                    )}
            </Formik>
        </View >
    );

};
export default Purchase;