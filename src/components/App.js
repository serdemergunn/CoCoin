import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CoinList from "./CoinList";
import axios from 'axios';
import Details from "./Details";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {

    state={
        coin:[],
        search:"",
        exchange_rates:[]
    }


    async componentDidMount(){
        const response= await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true',{
            headers:{"Access-Control-Allow-Origin": '*'}
        })
        this.setState({coin:response.data})

        const ex= await axios.get('https://api.coingecko.com/api/v3/exchange_rates',{
            headers:{"Access-Control-Allow-Origin": '*'}
        })
        this.setState({exchange_rates:ex.data})

}

searchCoin =(event)=>{
this.setState({search: event.target.value})
}



render() {
        let filteredCoins= this.state.coin.filter((coin)=>{
            return coin.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1
        })

  return (
      <Router>
      <div>
      <Route path="/" exact render={()=>(
          <React.Fragment>
          <SearchBar searchCoinProp={this.searchCoin}/>
          <CoinList coins={filteredCoins} exchange_rate={this.state.exchange_rates}/>
          </React.Fragment>
          )}>
      </Route>

          <Route path="/details/:id" >
              <Details coins={this.state.coin}/>
          </Route>
      </div>
      </Router>
  );
}
}


export default App;