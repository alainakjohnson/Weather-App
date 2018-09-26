import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
 
    constructor(props){
        super(props);
        
        this.state = { term: '' };
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
        //note: binds the 'this' reference inside the callback function to 
        //the SearchBar object so when the callback is called, 'this' has the 
        //correct context. can also use onInputChange = (event) =>{}
    }
    
    onInputChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }
    
    onFormSubmit(event){
        event.preventDefault();
        //note: prevents default behavior of the HTML form element
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ' ' });
    }
    
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    //note: the following makes SearchBar a controlled component.
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}
    
export default connect(null, mapDispatchToProps)(SearchBar);
