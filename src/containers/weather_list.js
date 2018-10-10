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
                
                

   
// errors: 
// - not actually sorting. possibly the sorting is in the wrong place
// - need to sort by the average values. so prob needs to hit that reducer
// - the arrow and underline thing



 columnSort = (sort, order) => {
        this.props.sortWeather(sort, order);
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
                        />
                        </th>
                        <th><SortColumn 
                        columnSort = {this.columnSort}
                        keyword = "sort_by_temp"
                        title = "Temperature (Kelvin)"
                        sort = {this.props.sort}
                        order = {this.props.order}
                        />
                        </th>
                        <th><SortColumn 
                        columnSort = {this.columnSort}
                        keyword = "sort_by_pressure"
                        title = "Pressure (hPa)"
                        sort = {this.props.sort}
                        order = {this.props.order}
                        />
                        </th>
                        <th><SortColumn 
                        columnSort = {this.columnSort}
                        keyword = "sort_by_humidity"
                        title = "Humidity (%)"
                        sort = {this.props.sort}
                        order = {this.props.order}
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

// function mapStateToProps({ weather }){
//     return { weather };

function mapStateToProps({ weather, sort_weather }){
    
    // _.orderby(array we're sorting through, [key], order)
    var newWeather = weather;
    
    if (sort_weather.sort === "sort_by_city"){
        newWeather = _.orderBy(weather, [weather.city.name], sort_weather.order);
    }
    if (sort_weather.sort === "sort_by_temp"){
        newWeather = _.orderBy(weather, [sort_weather.averageTemp], sort_weather.order);
    }
    if (sort_weather.sort === "sort_by_pressure"){
        newWeather = _.orderBy(weather, [sort_weather.averagePressure], sort_weather.order);
    }
    if (sort_weather.sort === "sort_by_humidity"){
        newWeather = _.orderBy(weather, [sort_weather.averageHumidity], sort_weather.order);
    }
    
    //the problem is..................HOW DO I GET THESE VALUES.....AAAAAA
    
    console.log("IN WEATHER_LIST --------------")
    console.log("the weather array: ", weather)
    console.log("sort_weather: ", sort_weather)
    console.log("sort_weather.averageHumidity: ", [sort_weather.averageHumidity])
    console.log("sort_weather.sort: ", [sort_weather.sort])
    console.log("-----------------------------")
    
    return{ weather: newWeather, sort: sort_weather.sort, order: sort_weather.order};
}

function mapDispatchtoProps(dispatch){
    return bindActionCreators({ sortWeather: sortWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(WeatherList);