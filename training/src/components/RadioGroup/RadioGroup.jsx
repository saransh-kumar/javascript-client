import React from 'react';

import PropTypes from 'prop-types';

class RadioGroup extends React.Component {

    render() {
        const { error, onChange, options } = this.props;
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
                    options={options[3]}
                />
                <label htmlFor={options[3].label}>
                    {options[3].value}
                </label><br></br>
            </>
        );
    }
}

RadioGroup.propTypes = {
    error: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.string,
    options: PropTypes.string,
}

export default RadioGroup;