import React, { Component } from 'react'

import { Border, Input, InputBrown, InputRed, Error } from './style';


class TextField extends Component {
    
    render() {
        return (
                <body> 
                    <Border>
                        <div><p><b>This is a Disabled Input</b></p></div>
                        <div><Input value="Disabled Input" disabled={true}></Input></div>
                        <div><p><b>A Valid Input</b></p></div>
                        <div><InputBrown value="Accessible" type="text"/></div>
                        <div><p><b>An Input with errors</b></p></div>
                        <div><InputRed value="101" type="text"/></div>
                        <div><Error>Could not be greater than </Error></div>
                    </Border>
                </body>
        );
    }
}

export default TextField;