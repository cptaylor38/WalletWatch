import React from 'react';
import NumberFormat from 'react-number-format';

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            decimalScale={2}
            isNumericString
            prefix="$"
        />
    );
}

export default NumberFormatCustom;