// Replace the four plain text table headers with four SortColumn components. All necessary information for updating how the weather data is to be sorted 
// (including the current and new sorting schemes and orders) are passed to these components. 
// One of such information is a function which will fire up the action creator as discussed above.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/google_maps';
import SortColumn from '../components/sort_column';

class WeatherList extends Component {
    
    renderWeather(cityData){
                    const name = cityData.city.name;
                    const temp = cityData.list.map(function temp (state) {return state.main.temp});
                    //console.log(temp)
                    const pressure = cityData.list.map(function pressure (state) {return state.main.pressure});
                    //console.log(pressure)
                    const humidity = cityData.list.map(function humidity (state) {return state.main.humidity});
                    //console.log(humidity)
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
    
    render(){
        
        return(
            <table className="table table-hover">
                <thead>
                    <tr>    //this is where the sorting goes
                        <th>City</th> 
                        <th>Temperature (Kelvin)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
            //this.props.weather.map(this.renderWeather) is an array of items returned by renderWeather
            //store.dispatch( sort("city") )
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

export default connect(mapStateToProps)(WeatherList);