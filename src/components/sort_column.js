// displays a text (City, Temperature, Pressure, or Humidity). 
// Such a text is underlined if it is the weather attribute that is currently used for sorting the weather data.
// Next to such a text is an icon (upward arrow for ascending or downward arrow for descending depending on the current sorting order).
// TO RENDER UP ARROW
//  <span className="oi oi-chevron-top" aria-hidden="true" />

import React, { Component } from 'react';
import { selectCategory } from '../actions/index';

class SortColumn extends Component{
    //function ("categorySelect" or so) to "select" the title and underline it and then sort by 
    //- so, when title is selected, it will be underlined and the sortWeather action is called
    //function to switch the arrows and then order in the correct direction
    //- nested maybe?? since you pick the category then direction
    //-if up, ascending, if down, descending
    //-by default, it orders it ascending
   constructor(props) {
      super(props);
      this.state = {
         title: this.props.title
      }
      this.categorySelect = this.categorySelect.bind(this);
   }
   
      categorySelect() {
      this.setState({ 
          title: <u>{this.props.title}</u>
      });
   }
   
   orderSelect() {
      this.setState({ 
          descending: <span className="oi oi-chevron-down" aria-hidden="true" />
      });
   }

render() {
      //const selected = this.props.selectedCategory === this.props.title ? <u>{this.props.title}</u> : this.state.title;
      const ascending = <span className="oi oi-chevron-top" aria-hidden="true" />;
      return <div>
            <div onClick={this.categorySelect}>{this.state.title}</div>
            <div onClick={this.orderSelect}>{this.state.ascending}</div>
            </div>
   }

}

export default SortColumn;

