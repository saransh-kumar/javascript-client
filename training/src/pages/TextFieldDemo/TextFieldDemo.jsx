import React, { Component } from 'react';
import { TextField } from '../../components/index';
import { Border, Error, Div  } from '../../components/TextField/style'
import { Slider } from '../../Slider/index';

class TextFieldDemo extends Component {
    render() {
        return (
            <>
            <Div>
            {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> */}
            <Slider 
            alttext=""
            banners={
            ['/images/cloud.jpg', '/images/js.jpg', '/images/load-balancer.png',
            '/images/full-stack-web-development.jpg', '/images/dns-server.png']
            }
            defaultbanner='/banners/default.png'
            duration={1000}
            height={339}
            random={false}/>
            </Div>
            <Border>
                <div><p><b>This is a Disabled Input</b></p></div>
                <div><TextField value="Disabled Input" disabled={true}/></div>
                <div><p><b>A Valid Input</b></p></div>
                <div><TextField value="Accessible" type="text"/></div>
                <div><p><b>An Input with errors</b></p></div>
                <div><TextField value="101" type="text"/></div>
                <div><Error>Could not be greater than </Error></div>
            </Border>
            </> 
        )
    }
}

export default TextFieldDemo;


