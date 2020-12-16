import React from 'react';
import PropTypes from 'prop-types';

import { Error } from './style';

class RadioGroup extends React.Component {

    render() {
        const { error, onChange, options, onBlur } = this.props;
        return ( 
            <>
                <input 
                    name="sportRole"
                    id="role"
                    type='radio'
                    value={options[0].value}
                    error={error} 
                    onChange={onChange} 
                    options={options[0]}
                    onBlur={onBlur}
                />
                <label htmlFor={options[0].label}>
                    {options[0].value}
                </label><br></br>
                <input
                    name="sportRole"
                    id="role"
                    type='radio'
                    value={options[1].value}
                    error={error} 
                    onChange={onChange} 
                    onBlur={onBlur}
                    options={options[1]}
                />
                <label htmlFor={options[1].label}>
                    {options[1].value}
                </label><br></br>
                <input
                    name="sportRole"
                    id="role"
                    type='radio'
                    value={options[2].value} 
                    error={error} 
                    onChange={onChange}
                    onBlur={onBlur}
                    options={options[2]}
                />
                <label htmlFor={options[2].label}>
                    {options[2].value}
                </label><br></br>
                <input
                    name="sportRole"
                    id="role" 
                    type='radio'
                    value={options[3].value} 
                    error={error} 
                    onChange={onChange}
                    onBlur={onBlur}
                    options={options[3]}
                />
                <label htmlFor={options[3].label}>
                    {options[3].value}
                </label><br></br>
                <Error>{ error }</Error>
            </>
        );
    }
}

RadioGroup.propTypes = {
    error: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.string,
    onBlur: PropTypes.func,
    options: PropTypes.string,
}

RadioGroup.defaultProps = {
    error: '',
    options: [],
  };

export default RadioGroup;