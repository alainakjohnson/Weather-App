// TO RENDER UP ARROW
//  <span className="oi oi-chevron-top" aria-hidden="true" />

import React, { Component } from 'react';


class SortColumn extends Component{

// this is wrong

   columnSelect = () => {
    this.setState(state => ({
        sort: this.props.sort,
        order: this.props.order
        }));
        this.props.columnSort(this.props.sort, this.props.order);
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