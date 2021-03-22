import React from 'react';
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

const Success = (options) => {
    var height = options.height != undefined ? options.height : 40;
    var width = options.width != undefined ? options.width : 40;

    return (
        <Svg height={height} width={width} version="1.1" id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" space="preserve">
            <G>
                <Circle fill='#FFFFFF' cx="256" cy="256" r="246.154" />
                <Ellipse fill='#FFFFFF' cx="256" cy="256" rx="216.615" ry="246.154" />
                <Path fill='#FFFFFF' d="M39.385,256C39.385,120.053,136.367,9.846,256,9.846C120.053,9.846,9.846,120.053,9.846,256
		S120.053,502.154,256,502.154C136.367,502.154,39.385,391.947,39.385,256z"/>
                <G>
                    <Path fill='#7BBDF5' d="M256,512C114.615,512,0,397.385,0,256S114.615,0,256,0s256,114.615,256,256
			C511.842,397.319,397.319,511.842,256,512z M256,19.692C125.491,19.692,19.692,125.491,19.692,256S125.491,492.308,256,492.308
			S492.308,386.509,492.308,256C492.158,125.553,386.447,19.842,256,19.692z"/>
                    <Path fill='#7BBDF5' d="M226.457,344.615c-2.233,0.001-4.4-0.759-6.144-2.154l-98.462-78.769
			c-4.23-3.401-4.91-9.584-1.521-13.824c3.389-4.24,9.57-4.938,13.819-1.561l91.163,72.933l151.327-170.24
			c3.611-4.065,9.834-4.433,13.899-0.822s4.433,9.834,0.822,13.899L233.822,341.308
			C231.953,343.414,229.272,344.618,226.457,344.615z"/>
                </G>
            </G>
        </Svg>

    );
}

export default Success;