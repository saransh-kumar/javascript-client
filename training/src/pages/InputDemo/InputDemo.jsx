import React, { Component } from 'react';
import * as yup from 'yup';

import { RadioGroup } from '../../components/RadioGroup/index';
import { SelectField } from '../../components/SelectField/index';
import { Button } from '../../components/Button/index';
import { TextField } from './index';
import * as constants from '../../config/constants';
import { Div } from './style';

class InputDemo extends Component {

    constructor() {
        super();
        this.state = {
            name: '', sports: '', cricket: '', football: '',
            touched: {
                name: false,
                sports: false,
                cricket: false,
                football: false,
        },
        };
    }

    schema = yup.object().shape({
        name: yup.string().required('name is a required field').min(3),
        sports: yup.string().required('sport is a required field'),
        cricket: yup.string().required('select an option'),        // cricket: yup.string().when('sports', { is: 'cricket', then: yup.string().required('What you do is a required field') }),
        football: yup.string().required('select an option'),        // football: yup.string().when('sports', { is: 'football', then: yup.string().required('What you do is a required field') }),
    });

    sportsState() {
        this.setState({
            cricket: '', football: ''
        });
    }
    
    getError(field) {
        const { touched } = this.state;
        if (touched[field] && this.hasErrors()) {
          try {
            this.schema.validateSyncAt(field, this.state);
          } catch (err) {
            return err.message;
          }
        }
    }
  
    hasErrors(){
        try {
            console.log('States',this.state);
          this.schema.validateSync(this.state);
        } catch (err) {
          return true;
        }
        
        return false;
    }
  
    isTouched(field) {
        const { touched } = this.state;
        this.setState({
          touched: {
            ...touched,
            [field]: true,
          },
        });
    }
  
    
    render() {

        const { name, sports, cricket, football } = this.state;

        const handleNameChange = (event) => {
            this.setState ({name: event.target.value}, () => {
                console.log(this.state);
            });
        }

        const handleSportsChange = (event) => {
            this.sportsState();
            this.setState ({sports: event.target.value}, () => {
                console.log(this.state);
            });     
        }

        const handleCricketChange = (event) => {
            this.setState({cricket: event.target.value}, () => {
                console.log(this.state);
            });
        }

        const handleFootballChange = (event) => {
            this.setState({football: event.target.value}, () => {
                console.log(this.state);
            });
        } 

        return (
        <>
            <Div><p><b>Name</b></p></Div>
            <Div>
                <TextField 
                    value={ name }
                    error={ this.getError('name') }
                    onChange={ handleNameChange }
                    onBlur={ () => { this.isTouched('name')} }
                />
            </Div>
            <Div><p><b>Select the game you play</b></p></Div>
            <Div>
                <SelectField
                    value={ sports }
                    error={this.getError('sports')}
                    onChange={ handleSportsChange }
                    onBlur={ () => { this.isTouched('sports')} }
                    defaultText={ constants.defaultText }
                    options={ constants.sport }
                />
            </Div>
            {/* {
                sports === constants.cricket ? (
                    <>
                        <Div><p><b>What you do?</b></p></Div>
                        <Div>
                            <RadioGroup
                                value= { cricket }
                                error={ this.getError('cricket') }
                                onChange={ handleCricketChange }
                                onBlur={ () => { this.isTouched('cricket')} }
                                options={ constants.cricketRole }
                            />
                        </Div>
                    </>
                ) : (<p></p>)
            } */}
            {
                sports === '' ? (<p></p>) :
                (
                    <>
                        <Div><p><b>What you do?</b></p></Div>
                        <Div>
                            <RadioGroup
                                value= { sports === constants.cricket ? cricket : football }
                                error={ sports === constants.cricket ? this.getError(constants.crick) : this.getError(constants.foot) }
                                onChange={ sports === constants.cricket ? handleCricketChange : handleFootballChange }
                                onBlur={ () => { sports === constants.cricket ? this.isTouched(constants.crick) : this.isTouched(constants.foot)} }
                                options={ sports === constants.cricket ? constants.cricketRole : constants.footballRole }
                            />
                        </Div>
                    </>
                )
            }
            <Div primary>
                <Button
                    value='Cancel'
                    disabled=''
                />
                <Button
                    value='Submit'
                    disabled= { true }
                />
            </Div>
        </>
        )
    }
}

export default InputDemo;