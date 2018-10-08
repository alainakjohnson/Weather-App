// The existing WeatherReducer needs to be updated.

// Every time it receives an action by the type of FETCH_WEATHER, it needs to calculate (using lodash) the average temperature, average pressure, 
// and average humidity of the city that the action brings in. The results will then be packed along with the weather data itself into an 
// object and inserted in the weather array (i.e. the state).

import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action){
    //console.log('Action received (post middleware) :', action);
    switch (action.type){
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];
        }
   return state;
}