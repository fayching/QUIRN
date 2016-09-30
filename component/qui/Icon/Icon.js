
import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
    PixelRatio
} from 'react-native';

import iconfont from "../font/FontIconQuiConf";

const urlBase = "http://i.gtimg.cn/vipstyle/frozenui/rn/icon/";
const iconInfo = {
    "arrow" : {
        "name": 'arrow.png',
        "width": 9,
        'height': 15
    },
    "close" : {
        "name": 'close.png',
        "width": 14,
        'height': 14
    },
    "info" : {
        "name": 'info-n.png',
        "width": 22,
        'height':22
    },
    "fresh" : {
        "name": 'fresh.png',
        "width": 22,
        'height': 22
    },
    "infoWarn" : {
        "name": 'info-w.png',
        "width": 22,
        'height': 22
    },
    "search" : {
        "name": 'search.png',
        "width": 14,
        'height': 14
    }
};
const DEFAULT_ICONFONT_SIZE = 44;
const DEFAULT_ICONFONT_FAMILY = "FontIconQui";

/**
 * Icon Component
 * @example
 * <Icon name="arrow" />
 * <Icon type="iconfont" name="arrow" />
 */
export default class Icon extends Component {
    /**
     * This is Icon constructor.
     * @param {object} props
     * @param {string}  props.name - icon name, one of arrow, close, info, fresh, infoWarn, search
     */
    constructor(props) {
        super(props);
    };


    /**
     * This is Icon default props.
     * @param {object} props
     * @param {numble} props.size - icon size, just used in  iconType == iconfont
     * @param {string} props.fontFamily - font family, just used in iconType == iconfont, default is FontIconQui
     * @param {string} props.color - font color, just used in iconType == iconfont, default is #777
     * @param {string} props.iconType - icon type, default is normal, if use iconfont need set to "iconfont"
     */
    static defaultProps = {
        size: DEFAULT_ICONFONT_SIZE,
        fontFamily: DEFAULT_ICONFONT_FAMILY,
        iconType: "normal",
        color: "#777"
    };

    static propTypes = {
        name: PropTypes.string
    };

    render() {
        const {
            name,
            size,
            fontFamily,
            iconType,
            color,
            style,
            ...props
        } = this.props;

        if(iconType == "normal") {  // normal icon
            var iconConf = iconInfo[name] || '',
                iconStyle = {};
            if(typeof iconConf === 'object') {
                iconStyle = {
                    width:iconConf['width'],
                    height:iconConf["height"]
                };
            }

            if (iconConf) {
                var src = urlBase + iconConf['name'];
                return (
                    <Image style={iconStyle} source={{uri:src}} />
                );
            }
        } else { // iconfont

            // var glyph = iconfont.map[name] || '?';
            // if(typeof glyph !== 'number') {
            //     name = String.fromCharCode(glyph);
            // }

            var defaultStyle:Object = {
                fontSize: size,
                fontFamily: fontFamily,
                fontWeight: 'normal',
                fontStyle: 'normal',
                color: color
            };

            props.style = [defaultStyle, style];

            return (
                <Text {...props}>
                    {iconfont(name)}
                </Text>
            );
        }


    }
}
