import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Nav from './components/nav';
import CalcBody from './components/calc-body';
import './App.css';

class App extends Component {
  static propTypes = {};
  state = {
    baseCurrency: null,
    secondeCurrency: null,
    amountOne: null,
    amountTwo: null,
    exchangeRate: null,
    api_url:
      'https://cors-anywhere.herokuapp.com/https://api.exchangerate-api.com/v4/latest/'
  };

  getExchangeRate = async () => {
    try {
      const res = await axios.get(`${this.state.api_url}USD`);
      this.setState({
        ...this.state,
        exchangeRate: res.data.rates[this.state.secondeCurrency]
      });
      console.log(res.data);
      console.log(this.state.exchangeRate);
    } catch (error) {
      console.log(error);
    }
  };

  getInputs = (bC, sC, aO, aT) => {
    this.setState({
      ...this.state,
      baseCurrency: bC,
      secondeCurrency: sC,
      amountOne: aO,
      amountTwo: aT
    });
    this.getExchangeRate();
  };

  calculateExchangeRate = () => {
    console.log(this.state.excchangeRate);
  };

  render() {
    return (
      <div>
        <Nav />
        <CalcBody
          getInputs={this.getInputs}
          exchangeRate={this.state.exchangeRate}
        />
      </div>
    );
  }
}

export default App;
