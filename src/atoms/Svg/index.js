import { View } from 'react-native';
import React, { useState, useEffect } from 'react';

const Svg = (options) => {
    var [icon, setIcon] = useState(<View></View>);
    console.log(options);
    useEffect(async () => {
        console.log(options.name);
        var name = options.name != undefined ? options.name : '';
        let importedIcon = await import('./IndexView');

        if (typeof importedIcon[name] == 'function') {
            setIcon(importedIcon[name](options));
        }
    }, []);

    return (
        <View>
            {icon}
        </View>
    );
}

export default Svg;