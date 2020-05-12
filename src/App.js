import React from 'react';
import './App.css';

export default class NumberCounter extends React.Component {
  constructor(props){
    super(props);
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
    this.state = {
      count: 0
    }
  }

  handleClickPlus() {
    this.setState({
      count : this.state.count + 1
    });
  }
  handleClickMinus() {
    this.setState({
      count : this.state.count - 1
    });
  }

  render(){
    return(
      <div className='counter'>

        <span>
          {this.state.count}
        </span>

        <br />

        <button onClick={this.handleClickMinus}>-</button>
        <button onClick={this.handleClickPlus}>+</button>
        

      </div>
    );
  }
}
