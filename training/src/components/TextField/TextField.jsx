import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from './style';

class TextField extends Component {
    render() {
        const { value, disabled, error, pattern } = this.props;
        return (
            <>
                <Input type='text' defaultValue={value} disabled={disabled} error={error} pattern={pattern}/>
            </>
        );
    }
}

TextField.propTypes = { 
  disabled: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  pattern: PropTypes.string,
}

export default TextField;