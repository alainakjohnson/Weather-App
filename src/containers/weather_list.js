import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Sparklines, SparklinesLine } from "react-sparklines";
import Chart from '../components/chart';

class WeatherList extends Component {
    
    renderWeather(cityData){
                    const name = cityData.city.name;
                    const temp = cityData.list.map(function temp (state) {return state.main.temp});
                    //console.log(temp)
                    const pressure = cityData.list.map(function pressure (state) {return state.main.pressure});
                    //console.log(pressure)
                    const humidity = cityData.list.map(function humidity (state) {return state.main.humidity});
                    //console.log(humidity)
                    
                    return(
                        <tr key={ name }>
                            <td>{ name }</td>
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
                    <tr>    
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