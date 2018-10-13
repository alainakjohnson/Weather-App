// TO RENDER UP ARROW
//  <span className="oi oi-chevron-top" aria-hidden="true" />

import React, { Component } from 'react';


const invert = {
    asc: "desc",
    desc: "asc"
};

class SortColumn extends Component{

    columnSelect = (columnName) => {
       this.setState(state => {
        var order = this.props.order === "asc" ? invert[this.props.order] : "asc" ;
        this.props.columnSort(this.props.keyword, order, this.props.sortKey);
       })
        
    console.log("IN SORT COLUMN --------------")
    console.log("order: ", this.props.order)
    console.log("sort: ", this.props.sort)
    console.log("-----------------------------")
        
    };
    

    render() {
        //need to add underline and make the arrow flip
        return <div onClick={() => this.columnSelect(this.props)} >
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