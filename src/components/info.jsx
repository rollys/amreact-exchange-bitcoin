import React, { Component } from 'react';

class Info extends Component {
    render() {
        const {currencyCode, dataApi } = this.props
        console.log(dataApi)
        // const { USD = {}} = dataApi
        // const { rate, description } = USD
        const {rate, description} = dataApi[currencyCode] || {}
        console.log(rate , description) 
        const exchange = description !== undefined || rate !== undefined ? `Tipo de cambio de ${description} es ${rate}`: 'No hay cambio'
        return (
            <div>
                {exchange}
            </div>
        );
    }
}

export default Info;