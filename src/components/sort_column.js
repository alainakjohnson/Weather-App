// TO RENDER UP ARROW
//  <span className="oi oi-chevron-top" aria-hidden="true" />

import React, { Component } from 'react';


const invert = {
    asc: "desc",
    desc: "asc"
};

class SortColumn extends Component{

// this is wrong

   columnSelect = (columnName) => {
        var order = this.props.order === "asc" ? invert[this.props.order] : "asc" 
        this.props.columnSort(this.props.keyword, order);
    };
    

    render() {
        //need to add underline and make the arrow flip
        return <div onClick={() => this.columnSelect(this.props.title) || console.log(this.props)} >
                    <span>{this.props.title}</span>
                    {this.props.keyword === this.props.sort ? (
                        this.props.order === "asc" 
                            ? (<span className="oi oi-chevron-top" aria-hidden="true" />)
                            : (<span className="oi oi-chevron-bottom" aria-hidden="true" />)
                        ) : null
                    }
                </div>
                
                
    }
}

export default SortColumn;