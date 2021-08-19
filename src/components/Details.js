import React from 'react';
import {withRouter} from 'react-router-dom'
import {useParams} from "react-router-dom";
import { Sparklines,SparklinesLine  } from 'react-sparklines';


function Details(props) {
    const {id} = useParams();
    const coin = props.coins;


    return (
        <div className="body">

            <table >
                <tr>

                    <th>Name </th>
                    <th>Symbol</th>
                    <th>Market Cap</th>
                    <th>Supply</th>
                    <th>Price Change (24H)</th>
                    <th>7-day Price Trend</th>
                </tr>
                {coin.filter(co=>co.id===id).map(filteredcoin=>(
                <tr>
                    <td>{filteredcoin.name}</td>
                    <td>{filteredcoin.symbol}</td>
                    <td>{filteredcoin.market_cap}</td>
                    <td>{filteredcoin.total_supply}</td>
                    <td>{filteredcoin.price_change_24h}</td>
                    <td><Sparklines data={filteredcoin.sparkline_in_7d.price}><SparklinesLine color="black" />
                    </Sparklines></td>


                </tr>))}


            </table>
        </div>
    );
}

export default withRouter(Details);