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
      <div>

        <span className='counter'>
          {this.state.count}
        </span>

        <br />

      <span className='rowButtons'>
        <button className='buttons button1' onClick={this.handleClickMinus}>-</button>
        <button className='buttons button2' onClick={this.handleClickPlus}>+</button>
      </span>

      </div>
    );
  }
}
