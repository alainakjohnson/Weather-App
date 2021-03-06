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
                    const temp = cityData.list.map(function temp (weather) {return weather.main.temp});
                    const pressure = cityData.list.map(function pressure (weather) {return weather.main.pressure});
                    const humidity = cityData.list.map(function humidity (weather) {return weather.main.humidity});

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
                
 columnSort = (sort, order, sortKey) => {
        this.props.sortWeather(sort, order, sortKey);
    }
    
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th><SortColumn 
                        columnSort = {this.columnSort}
                        keyword = "sort_by_city"
                        title = "City"
                        sort = {this.props.sort}
                        order = {this.props.order}
                        sortKey = "city.name"
                        />
                        </th>
                        <th><SortColumn 
                        columnSort = {this.columnSort}
                        keyword = "sort_by_temp"
                        title = "Temperature (Kelvin)"
                        sort = {this.props.sort}
                        order = {this.props.order}
                        sortKey = "averageTemp"
                        />
                        </th>
                        <th><SortColumn 
                        columnSort = {this.columnSort}
                        keyword = "sort_by_pressure"
                        title = "Pressure (hPa)"
                        sort = {this.props.sort}
                        order = {this.props.order}
                        sortKey = "averagePressure"
                        />
                        </th>
                        <th><SortColumn 
                        columnSort = {this.columnSort}
                        keyword = "sort_by_humidity"
                        title = "Humidity (%)"
                        sort = {this.props.sort}
                        order = {this.props.order}
                        sortKey = "averageHumidity"
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

function mapStateToProps({ weather, sort_weather }){
    
    // _.orderby(array we're sorting through, [key], order)
    var newWeather = _.orderBy(weather, [sort_weather.sortKey], sort_weather.order);

    console.log("IN WEATHER_LIST --------------")
    console.log("the weather array: ", weather)
    console.log("sort_weather: ", sort_weather)
    console.log("weather.sort: ", [weather.sort])
    console.log("sort_weather.order: ", sort_weather.order)
    console.log("[weather.sortKey]: ", [sort_weather.sortKey])
    console.log("-----------------------------")
    
    return{ weather: newWeather, sort: sort_weather.sort, order: sort_weather.order, sortKey: sort_weather.sortKey };
}

function mapDispatchtoProps(dispatch){
    return bindActionCreators({ sortWeather: sortWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(WeatherList);