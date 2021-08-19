import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styling.css';

class SearchBar extends Component {
handleFormSubmit=(event)=>{
    event.preventDefault();
}

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
            <div className="form-row mb-5">
                <div className="search2">
                <div className="col-4">

                    <input

                    onChange={this.props.searchCoinProp}
                    type="text"
                    className="form-control"
                    placeholder="Search to win!"/>


                </div>
                </div>


            </div>
            </form>
        );
    }
}

export default SearchBar;