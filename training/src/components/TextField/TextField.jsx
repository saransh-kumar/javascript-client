import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from './style';

class TextField extends Component {
    render() {
        const { value, disabled, error, pattern, onChange } = this.props;
        return (
            <>
                <Input 
                    type='text' 
                    value={value} 
                    disabled={disabled}
                    onChange={onChange}
                    error={error}
                    pattern={pattern}
                />
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
}

export default TextField;