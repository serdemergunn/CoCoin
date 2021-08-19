import React, {Component} from 'react';
import './Styling.css';
import {Link} from "react-router-dom";

class CoinList extends Component{
render() {

    return (
        <div className="body">
            <table>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Exchange Rate</th>
                </tr>
                {this.props.coins.map((coin) => (

                    <tr key={coin.id}>

                        <td><img src={coin.image} className="images" alt="coin_image"/></td>
                        <Link className="text" to={"/details/" + coin.id}>
                            <td>{coin.name}</td>
                        </Link>

                        <td>{coin.symbol.toUpperCase()}</td>

                        <td>{!!this.props.exchange_rate && !!this.props.exchange_rate.rates && !!this.props.exchange_rate.rates[coin.symbol] && this.props.exchange_rate.rates[coin.symbol].value}</td>



                    </tr>

                ))}

            </table>
        </div>
    );
}
}

export default CoinList;