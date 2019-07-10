import React, { Component } from 'react';
import Coin from './Coin';
import './Flip.css';
import heads from './img/heads.jpg';
import tails from './img/tails.jpg';

export default class Flip extends Component {
    static defaultProps = {
        num: 10
    }
    constructor(props) {
        super(props)
    
        this.state = {
             num: 0,
             coin: heads,
             headFlips: 0,
             tailsFlips: 0,
             max: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }


max(){
    let rand = Math.floor(Math.random() *  2 +1);
     let countHeads = this.state.headFlips;
     let countTails = this.state.headFlips;
     let countMax = this.state.max;

  
}

    flipCoin(){
     let rand = Math.floor(Math.random() *  2 +1);
     let countHeads = this.state.headFlips;
     let countTails = this.state.headFlips;
     let countMax = this.state.max;

     this.setState({num:rand, max: ++countMax})
     
     if(rand !== 2 && countMax < 10){
         this.setState({coin:heads, headFlips: ++countHeads})
         
         
     } else if(rand !== 1 && countMax < 10){
         this.setState({coin:tails, tailsFlips: ++countTails})
         
     } else{
         this.setState({max: 10})
         
     }
    }

 
    handleClick(){
     this.flipCoin()
    }
    render() {
        return (
            <div>
                    <img className="heads" src={this.state.coin} />
                <div>
                    <button onClick={this.handleClick} className="flipButton">Flip Meee!</button>
                </div>
                 <p>Out of {this.state.max} flips, there have been {this.state.headFlips} heads and {this.state.tailsFlips} tails.</p>
            </div>
        )
    }
}
