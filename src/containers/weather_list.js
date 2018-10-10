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
        order: "asc" ? "desc" : "asc";
        this.props.sortWeather(sort, order)
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
                        sortingkey = "city"
                        sort = {this.props.sort}
                        order = {this.props.order}
                        />
                        </th>
                        <th><SortColumn 
                        columnSort = {this.columnSort}
                        keyword = "sort_by_temp"
                        title = "Temperature (Kelvin)"
                        sortingkey = "averageTemp"
                        sort = {this.props.sort}
                        order = {this.props.order}
                        />
                        </th>
                        <th><SortColumn 
                        columnSort = {this.columnSort}
                        keyword = "sort_by_pressure"
                        title = "Pressure (hPa)"
                        sortingkey = "averagePressure"
                        sort = {this.props.sort}
                        order = {this.props.order}
                        />
                        </th>
                        <th><SortColumn 
                        columnSort = {this.columnSort}
                        keyword = "sort_by_humidity"
                        title = "Humidity (%)"
                        sortingMethod = "averageHumidity"
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

function mapStateToProps({ weather, sortweather }){
    var newState = weather;
    
    if (sortweather.keyword === "city"){
        _.orderBy(weather, [sortweather.sort], sortweather.order);
    }
    if (sortweather.keyword === "sort_by_temp"){
        _.orderBy(weather, [sortweather.sort], sortweather.order);
    }
    if (sortweather.keyword === "sort_by_pressure"){
        _.orderBy(weather, [sortweather.sort], sortweather.order);
    }
    if (sortweather.keyword === "sort_by_humidity"){
        _.orderBy(weather, [sortweather.sort], sortweather.order);
    }
    
     console.log("the weather array: ")
        console.log(weather)
        
    console.log("the sortweather reducer: sortweather.sort: ")
        console.log(sortweather.sort)

    console.log("the sortweather reducer: ")
    
    return{ weather: newState, sort: sortweather.sortingkey, order: sortweather.order};
}

function mapDispatchtoProps(dispatch){
    return bindActionCreators({ sortWeather: sortWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(WeatherList);