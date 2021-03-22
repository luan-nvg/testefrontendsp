import { View } from 'react-native';
import React, { useState, useEffect } from 'react';

const Svg = (options) => {
    let [icon, setIcon] = useState(<View></View>);

    useEffect(async () => {
        var teste = 'Success';
        let importedIcon = await import('./IndexView');
        setIcon(importedIcon[teste](options));
    }, []);

    return (
        <View>
            {icon}
        </View>
    );
}

export default Svg;