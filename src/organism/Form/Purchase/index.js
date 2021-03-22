import { Formik } from 'formik';
import * as yup from 'yup';

import { Animated, View, Text, TouchableOpacity } from 'react-native';
import React, { Component, Fragment } from 'react';
import { styles } from './styles';
import { TextInput } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import Helpers from '../../../Helps';
import Buttom from '../../../atoms/Button';

const Purchase = (options) => {
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
                    this.save(values);
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
                {formik => (
                    <Fragment>

                        <View style={styles.containerInput}>
                            <TextInput
                                mode={'outlined'}
                                label="Número do cartão de crédito"
                                onChangeText={formik.handleChange('card_number')}
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
                                onChangeText={formik.handleChange('name')}
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
                                label="validate"
                                onChangeText={formik.handleChange('validate')}
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
                                onChangeText={formik.handleChange('cvv')}
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


                        <View
                            style={{
                                borderBottomColor: '#CCCCCC',
                                borderBottomWidth: 1,
                                marginTop: '9%'
                            }}
                        />

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
                            style={{
                                borderBottomColor: '#CCCCCC',
                                borderBottomWidth: 1,
                                marginTop: '4%'
                            }}
                        />


                        <View style={[styles.sideBySide, styles.desc]}>
                            <Text style={styles.nameTotal}>
                                Total:
                            </Text>
                            <Text style={styles.total} >{total_format}</Text>
                        </View>

                        <Buttom
                            title={'Pagar'}
                            onPress={
                                () => {
                                    console.log(options.data.item);
                                    options.navigation.navigate('Payment', options.data.item);
                                }
                            }
                            padding={'3%'}
                            width={'100%'}
                        ></Buttom>
                    </Fragment>
                )}
            </Formik>

        </View >


    );
};
export default Purchase;