import React, { Component } from 'react';

const invert = {
    asc: "desc",
    desc: "asc"
};

class SortColumn extends Component{

    columnSelect = (selectedColumn) => {
        selectedColumn = this.props;
        this.setState(state => {
            var order = this.props.order ? invert[this.props.order] : "asc" ;
            this.props.columnSort(this.props.keyword, order, this.props.sortKey);
            });

        
    console.log("IN SORT COLUMN --------------")
    console.log("columnName: ", selectedColumn)
    console.log("order: ", this.props.order)
    console.log("sort: ", this.props.sort)
    console.log("sortKey: ", this.props.sortKey)
    console.log("-----------------------------")
        
    };

    render() {
        return <div onClick={() => this.columnSelect(this.props)} >
                    {this.props.title}
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