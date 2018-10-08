// displays a text (City, Temperature, Pressure, or Humidity). 
// Such a text is underlined if it is the weather attribute that is currently used for sorting the weather data.
// Next to such a text is an icon (upward arrow for ascending or downward arrow for descending depending on the current sorting order).
// TO RENDER UP ARROW
//  <span className="oi oi-chevron-top" aria-hidden="true" />

import React, { Component } from 'react';

class SortColumn extends Component{
    //function ("categorySelect" or so) to "select" the title and underline it and then sort by 
    //- so, when title is selected, it will be underlined and the sortWeather action is called
    //function to switch the arrows and then order in the correct direction
    //- nested maybe?? since you pick the category then direction
    //-if up, ascending, if down, descending
    //-by default, it orders it ascending
}

export default SortColumn;

