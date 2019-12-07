import React from "react";
import "./App.css";
import Select from "./components/select";
import Info from "./components/info";


class App extends React.Component {
  state = {
    currencyCode: "",
    exchangeData: {}
  };

  getCurrencyCode = code => {
    console.log("code", code);
    this.setState({
      currencyCode: code
    })
  };

  getExchangeBitcoin = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(r => {
        return r.json();
      })
      .then(data => {
        console.log("data", data);
        this.setState({
          exchangeData: data.bpi
        });
      });
  };

  UNSAFE_componentWillMount() {
    console.log("--> componentWillMount");
    this.getExchangeBitcoin();
  }

  /*componentDidMount(){
    console.log('--> componentDidMount')
    // this.getExchangeBitcoin()
  }*/

  render() {
    // console.log("render");
    return (
      <div className="App">
        <h1>TIPO DE CAMBIO - BITCOIN</h1>
        <Select getCurrencyCode={this.getCurrencyCode} />
        <Info currencyCode={this.state.currencyCode} dataApi={this.state.exchangeData} />
      </div>
    );
  }
}

export default App;
