// displays a text (City, Temperature, Pressure, or Humidity). 
// Such a text is underlined if it is the weather attribute that is currently used for sorting the weather data.
// Next to such a text is an icon (upward arrow for ascending or downward arrow for descending depending on the current sorting order).
// TO RENDER UP ARROW
//  <span className="oi oi-chevron-top" aria-hidden="true" />

import React, { Component } from 'react';

class SortColumn extends Component{

   columnSelect = columnName => {
                                    console.log(this.props)
    this.setState(state => ({
        order: "ORDER_DESCENDING"
        }));
        this.props.columnSort(this.props.keyword, this.props.order);
    };
    

    render() {
        return <div onClick={() => this.columnSelect(this.props.title)}>
                    
                    <span>{this.props.title}</span>
                    {this.props.keyword === this.props.sort ? (
                        this.props.order === "ORDER_ASCENDING" 
                            ? (<span className="oi oi-chevron-top" aria-hidden="true" />)
                            : (<span className="oi oi-chevron-bottom" aria-hidden="true" />)
                        ) : null
                    }
                </div>
    }
}

export default SortColumn;