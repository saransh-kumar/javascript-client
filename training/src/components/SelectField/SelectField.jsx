import React from 'react';

import { Select, Error } from './style';
import PropTypes from 'prop-types';
import * as constants from '../../config/constants';
// import Input from '../TextField/index';

class SelectField extends React.Component {

    render() {
        const { value, error, onChange, options, onBlur } = this.props;
        return ( 
            <>
                <Select value={value} error={error} onChange={onChange} options={options} onBlur={onBlur}>
                    <option value=''>
                    { constants.defaultText }
                    </option>
                    <option value={options[0].label}>
                    {options[0].value}
                    </option>
                    <option value={options[1].label}>
                    {options[1].value}
                    </option>
                </Select>
                <Error>{ error }</Error>
            </>
        );
    }
}

SelectField.propTypes = {
    error: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.string,
    options: PropTypes.instanceOf(Array),
    onBlur: PropTypes.func,
}

SelectField.defaultProps = {
    error: '',
    options: [],
    defaultText: 'Select',
  };
  
export default SelectField;