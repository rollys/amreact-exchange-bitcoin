import React, { Component } from "react";

class Select extends Component {
  constructor() {
    super();
    this.state = {
      currencyCode: ""
    };
  }

  componentDidUpdate(){
      // console.log('componentDidUpdate')
      //console.log(this.state)
      //this.props.getCurrencyCode(this.state.currencyCode)
  }

  handleChange = (e) =>{
    // console.log(e.target.value)
    /*this.setState({
        currencyCode: e.target.value
    })*/
    this.props.getCurrencyCode(e.target.value)
  }

  render() {
    return (
      <div>
        <select onChange={this.handleChange} name="" id="" >
          <option value="">- Seleccione Moneda -</option>
          <option value="USD">DOLAR</option>
          <option value="GBP">LIBRAS ESTERLINAS</option>
          <option value="EUR">EUROS</option>
        </select>
      </div>
    );
  }
}

export default Select;
