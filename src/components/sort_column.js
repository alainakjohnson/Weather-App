// TO RENDER UP ARROW
//  <span className="oi oi-chevron-top" aria-hidden="true" />

import React, { Component } from 'react';


class SortColumn extends Component{

   columnSelect = () => {
    this.setState(state => ({
        sort: this.props.sort,
        order: this.props.order
        }));
        this.props.columnSort(this.props.title, this.props.order);
        
        console.log("in the sort column: ")
        console.log(this.props)
    };
    

    render() {
        //need to add underline and make the arrow flip
        return <div onClick={() => this.columnSelect(this.props.title)}>
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