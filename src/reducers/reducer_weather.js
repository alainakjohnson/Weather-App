import { FETCH_WEATHER } from "../actions/index";
import _ from 'lodash';


export default function(state = [], action){
    switch (action.type){
        case FETCH_WEATHER:
            const temp = action.payload.data.list.map(function temp (state) {return state.main.temp});
            const averageTemp = _.meanBy(temp);
            console.log("average temperature: ", averageTemp)
            
            const pressure = action.payload.data.list.map(function pressure (state) {return state.main.pressure});
            const averagePressure = _.meanBy(pressure);
            console.log("average pressure: ", averagePressure)
            
            const humidity = action.payload.data.list.map(function humidity (state) {return state.main.humidity});
            const averageHumidity = _.meanBy(humidity);
            console.log("average humidity: ", averageHumidity)
            
            return [ Object.assign({}, action.payload.data, {averageTemp, averagePressure, averageHumidity}), ...state ];
     }
   return state;
}