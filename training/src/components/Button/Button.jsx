import React from 'react';
import PropTypes from 'prop-types';

import { ButStyle } from './style';

class Button extends React.Component {
    render() {
        const { value, color, disabled, style} = this.props;
        return (
            <>
                    <ButStyle color={color} disabled={disabled} style={style}>
                        {value}
                    </ButStyle>
            </>
        );
    }
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    style: PropTypes.string,
}

Button.defaultValue = {
    color: '',
    disabled: false,
}

export default Button;