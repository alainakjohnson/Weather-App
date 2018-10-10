//reducer index

import {combineReducers} from 'redux';
import WeatherReducer from './reducer_weather';
import SortReducer from './sort_reducer';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    sort_weather: SortReducer
});

export default rootReducer;

//complete?