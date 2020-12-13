import React, { Component } from 'react';
import PropTypes from 'parse-json';
import { Border } from '../components/TextField/style';
import { getRandomNumber, getNextRoundRobin } from '../lib/utils/math';

class Slider extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    componentDidMount() {
        console.log('inside Componant did Mount');
        let { index } = this.state;
        const { duration, random } = this.props;
        this.id = setInterval(() => {
            if (random) {
                const randomNumber = getRandomNumber();
                this.setState({ index: randomNumber });
            } 
            else {
                const roundRobinNumber = getNextRoundRobin(4, index);
                console.log(index);
                if (index === 4) {
                    index = 0;
                }
                else {
                    index += 1;
                }
                console.log(roundRobinNumber);
                this.setState({ index: roundRobinNumber });
            }
        }, duration);
    }

    componentWillUnmount() {
        console.log('Inside Unmount');
        clearInterval(this.id);
    }

    render() { 

    const { alttext, banners, defaultbanner, height } = this.props;
    const { index } = this.state;
    console.log(banners[index]);

    let image;
    if (banners[index] === undefined) {
        image = <img height={height} src={defaultbanner} alt={alttext} />;
    } 
    else {
        image = <img height={height} src={banners[index]} alt={alttext} />;
    }

        return(
            <>
            <Border primary>
                <div>{image}</div>
            </Border>   
            </>
        )
    }
}

Slider.propTypes = {
    alttext: PropTypes.string,
    banners: PropTypes.array,
    defaultbanner: PropTypes.string,
    duration: PropTypes.number,
    height: PropTypes.number,
    random: PropTypes.bool,
};

Slider.defaultProps = {
    alttext: 'Default Banner',
    defaultbanner: '/images/default.png',
    duration: 2000,
    height: 200,
    random: false,
};

export default Slider;