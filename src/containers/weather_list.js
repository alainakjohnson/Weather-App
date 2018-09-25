import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from "react-sparklines";

class WeatherList extends Component {
    
    renderWeather(cityData){
                    const name = cityData.city.name;
                    const samples =[10.4,20.2,15.0,30.11,18.45,27.9];
                    const temp = [];
                    
                    return(
                        <tr key={ name }>
                            <td>{ name }</td>
                            <td>{ cityData.list[0].main.temp }</td>
                            <td>{ cityData.list[0].main.pressure }</td>
                            <td>{ cityData.list[0].main.humidity }</td>
                            
                            <td>
                            <div>
                            <Sparklines
                                svgHeight={120}
                                svgWidth={180}
                                data={samples}>
                                <SparklinesLine color="red"/>
                            </Sparklines>
                            </div>
                            </td>
                            
                             <td>
                            <div>
                            <Sparklines
                                svgHeight={120}
                                svgWidth={180}
                                data={temp}>
                                <SparklinesLine color="red"/>
                            </Sparklines>
                            </div>
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
        )
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);