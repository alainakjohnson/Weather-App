import React, { Component } from 'react';

export default class SearchBar extends Component {
    
    constructor(props){
        super(props);
        this.state = { term: '' };
        this.onInputChange=this.onInputChange.bind(this);
        //note: binds the 'this' reference inside the callback function onInputChange 
        //to the SearchBar object so when the callback is called, 'this' has the 
        //correct context. can also use onInputChange = (event) =>{}
    }
    
    onInputChange(event){
        console.log(event.target.value);
    }
    
    onFormSubmit(event){
        event.preventDefault();
        //note: prevents default behavior of the HTML form element
    }
    
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input_group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
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