import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    View,
    Image,
    PixelRatio
} from 'react-native';

const avatarHolder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAA8FBMVEXp8Peat8+jwNidutKhvtagvdWcudGfu9Kpwteiv9ecudCsxNifvNTM2+ieu9PE1eSdudDO3OmkvtSyyNu/0eKhvNOivdPm7vWlv9WeutHI2Oa5zd+dudG+0eHn7/bG1+Xi6/SzydzT4Ozc5vDe6PLY5O/a5e/P3eqmv9WmwNW6zt/j7PTX4+6uxtno8Pff6fLh6vPW4u280ODg6fLC1OObuM+buNDD1eTU4eza5fDd5/GhvNKowdarw9jA0+K1y93k7PTk7fXl7fW7zt/F1uXc5/DZ5O/R3+vB0+OnwNXg6vKcuNDM2+mtxNjO3eq3zN1UQ75QAAACR0lEQVR4Xu3W1a7cMBAG4PnHDi4zMx5mxiLD+79Ne7YXq6hKHMU+Ui/8XVpKfo0nMwr9hyzLsizLsqx5ZTfX9DyvmXtXOaNXsd+rYqs9mJFx454HiLwMXsi8CzTO35JZ0x1ABLwlBZAzW0yhAzfgKOmiekLmVEII/peAd22u5ZGMSEpzSWYc30cyoim+oe4/wuU4LgZkwq0HyXEkPCMX9hmC4wmcHpK2VhWS40ncHZG2KcBJBAom2l7kJA6eSFsNDicJsB5qt8SH5EToz0nT1zUCRUi4IE3zqjLkm/aaPGsrQ8oz0nSkDgm1Z750AU4mtL/hYQ1FThZgZ4+0HH9BoAzx9knL8hKsoL9YChCsksdAd3PlWcXBhHSM15CsEqCsNY49uKwm4Lcos5MyAk7BRYmyOpxAcBoOqkca/1sBpyKyl1KH4HQc5J4pmzYkpwQsKJsQnFYRI8qmnD7EwdPrh0gcZA9xio76piBY4iFziACUMw+EcLNXEgKd7o5qVtD52UYeu5RNB3iiifIP0qcRgAplU4N/TNdILsVFgVq/0My6Vxa9lyeTF5jAwzPRsF4gLbfNhBSJ/pRMKPThxGbgkcy4iu19HqdkxN7oR2wlDmqrQ9K39JPm8RLYbZGu8T1cJ3mp1ElXJVqGLAKI7DOJxpA0Le8gJP8VSIGN7RE7Lmr6XfneACCKfwgAjfPFdP8qcpSbk76bgX+BDe+gPqMXs3quj43OQekNGTH+WBmV3nc/fdi+b+9m1S2VuqvZM6lZlmVZlmVZvwEAnS9LHbI74gAAAABJRU5ErkJggg==";

/**
 * Avatar Component
 * @example
 * <Avatar src="xxxxx" size={50} />
 */
export default class Avatar extends Component {
    /**
     * This is Avatar constructor.
     * @param {object} props
     * @param {string} props.src - Image src
     * @param {number} [props.size=40] - Avatar size
     */
    constructor(props) {
        super(props);
    };

    static defaultProps = {
        size: 40,
        color: '#fff',
        backgroundColor: '#bdbdbd'
    };

    static propTypes = {
        src: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string,
        backgroundColor: PropTypes.string
    };

    render() {
        const {
            src,
            size,
            color,
            backgroundColor
        } = this.props;

        var avatarStyle = {
            width:size,
            height:size,
            borderRadius: size / 2
        };

        if (src) {
            return (
                <Image style={avatarStyle}
                        source={{uri:avatarHolder}}
                >
                    <Image style={avatarStyle} source={{uri:this.props.src}}/>
                </Image>
            );
        }

    }
}
