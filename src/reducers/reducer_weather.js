// Every time it receives an action by the type of FETCH_WEATHER, it needs to calculate (using lodash) the average temperature, average pressure, 
// and average humidity of the city that the action brings in. 
//The results will then be packed along with the weather data itself into an object and inserted in the weather array (i.e. the state).

import { FETCH_WEATHER } from "../actions/index";
import _ from 'lodash';


export default function(state = [], action){
    switch (action.type){
        case FETCH_WEATHER:
            const temp = action.payload.data.list.map(function temp (state) {return state.main.temp});
            const averageTemp = _.meanBy(temp);
            console.log(averageTemp)
            
            const pressure = action.payload.data.list.map(function pressure (state) {return state.main.pressure});
            const averagePressure = _.meanBy(pressure);
            console.log(averagePressure)
            
            const humidity = action.payload.data.list.map(function humidity (state) {return state.main.humidity});
            const averageHumidity = _.meanBy(humidity);
            console.log(averageHumidity)
            
            return [ Object.assign({}, action.payload.data, {averageTemp, averagePressure, averageHumidity}), ...state ];
        }
            return state
    }
    