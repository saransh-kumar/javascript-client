import React, { Component } from 'react';

import { RadioGroup } from '../../components/RadioGroup/index';
import { SelectField } from '../../components/SelectField/index';
import { TextField } from './index';
import * as constants from '../../config/constants';
import { Div } from './style';

class InputDemo extends Component {

    constructor() {
        super();
        this.state = {
            name: '', sports: '', cricket: '', football: ''
        };
    }

    sportsState() {
        this.setState({
            cricket: '', football: ''
        });
    }
    
    render() {

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

        const { name, sports, cricket, football } = this.state;

        return (
        <>
        
            
            <Div><span><b>Name</b></span></Div>
                <Div>
                    <TextField 
                        value={ name }
                        errors=''
                        onChange={ handleNameChange }
                    />
                </Div>
            <Div><span><b>Select the game you play</b></span></Div>
            <Div>
                <SelectField
                    value={ sports }
                    erros='no error'
                    onChange={ handleSportsChange }
                    defaultText={ constants.defaultText }
                    options={ constants.sport }
                />
            </Div>
            {
                sports === constants.cricket ? (
                    <Div>
                        <RadioGroup
                            value= { cricket }
                            error=''
                            onChange={ handleCricketChange }
                            options={ constants.cricketRole }
                        />
                    </Div>
                ) : (<p></p>)
            }
            {
                sports === constants.football ? (
                    <Div>
                        <RadioGroup
                            value= { football }
                            error=''
                            onChange={ handleFootballChange }
                            options={ constants.footballRole }
                        />
                    </Div>
                ) : (<p></p>)
            }
        </>
        )
    }
}

export default InputDemo;