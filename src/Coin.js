import React, { Component } from 'react';
import Flip from './Flip';

export default class Coin extends Component {
    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                <Flip/>
            </div>
        )
    }
}
