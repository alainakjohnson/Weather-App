// Replace the four plain text table headers with four SortColumn components. All necessary information for updating how the weather data is to be sorted 
// (including the current and new sorting schemes and orders) are passed to these components. 
// One of such information is a function which will fire up the action creator as discussed above.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/google_maps';
import SortColumn from '../components/sort_column';
import { sortWeather } from "../actions/index.js";
import _ from 'lodash';

class WeatherList extends Component {
    
    renderWeather(cityData){
                    const name = cityData.city.name;
                    const temp = cityData.list.map(function temp (state) {return state.main.temp});
                    const pressure = cityData.list.map(function pressure (state) {return state.main.pressure});
                    const humidity = cityData.list.map(function humidity (state) {return state.main.humidity});

                    const { lon, lat } = cityData.city.coord;
                    
                    return(
                        <tr key={ name }>
                            <td><GoogleMaps lon={lon} lat={lat} /></td>
                            <td>
                                <Chart data={temp} color="red" units="Kelvin" />
                            </td>
                            <td>
                                <Chart data={pressure} color="blue" units="hPa" />
                            </td>
                            <td>
                                <Chart data={humidity} color="green" units="%" />
                            </td>
                        </tr>
                    )
                }
                
                
//basic plan:
//make a function that actually takes in the type of sorting and order then perform the sorting action
//and i guess implement the sort column components
// so basically a column looks like:
//  - just has the name and arrow physically
//  - the keyword for the reducer?
//  - the keywords for the sorting and order (the order is just going to be the arrow, maybe true/false)
//  - "function which will fire up the action creator" so the function is called
//should maybe write the sort column first

    
        sorter (sort, order){
        return this.props.sortWeather(sort, order);
    }
    
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th><SortColumn 
                        title="City"
                        key="city"
                        sort={this.props.sort}
                        order={this.props.order}
                        sorter = {this.sorter}
                        />
                        </th>
                        <th><SortColumn 
                        title="Temperature (Kelvin)"
                        key="averageTemp"
                        sort={this.props.sort}
                        order={this.props.order}
                        sorter = {this.sorter}
                        />
                        </th>
                        <th><SortColumn 
                        title="Pressure (hPa)"
                         key="averagePressure"
                        sort={this.props.sort}
                        order={this.props.order}
                        sorter = {this.sorter}
                        />
                        </th>
                        <th><SortColumn 
                        title="Humidity (%)"
                        key="averageHumidity"
                        sort={this.props.sort}
                        order={this.props.order}
                        sorter = {this.sorter}
                        />
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
            //this.props.weather.map(this.renderWeather) is an array of items returned by renderWeather
        )
    }
}

    // ES6 syntax for the following
    // function mapStateToProps(state){
    //  return { weather:state.weather };
    // }
    // note: this is prob important

function mapStateToProps({ weather }){
    return { weather };
}

function mapDispatchtoProps({ dispatch }){
    return bindActionCreators({ sortWeather: sortWeather }, dispatch);
}

//mapDispatchtoProps
export default connect(mapStateToProps)(WeatherList);