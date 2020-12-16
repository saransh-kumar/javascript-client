import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Error } from './style';

class TextField extends Component {
    render() {
        const { value, disabled, error, pattern, onChange, onBlur } = this.props;
        return (
            <>
                <Input 
                    type='text' 
                    value={value} 
                    disabled={disabled}
                    onChange={onChange}
                    error={error}
                    pattern={pattern}
                    onBlur= { onBlur }
                />
                <Error>{ error }</Error>
            </>
        );
    }
}

TextField.defaultValue = {
    value: 'Default Value',
}

TextField.propTypes = { 
  disabled: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  pattern: PropTypes.string,
  onChange: PropTypes.string,
  onBlur: PropTypes.func,
}

export default TextField;