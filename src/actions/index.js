//actions index

import axios from 'axios';

const API_KEY = '79ba55c402c38a4b6d534ab0a35e44ac';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SORT_WEATHER = 'SORT_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    
    //axios.get(url) returns a promise
    const request = axios.get(url);
    
    //console.log('Request (pre middleware):', request);
    
    return{
        type: FETCH_WEATHER,
        payload: request
    }
}

export function sortWeather(sort, order, sortKey){
    return { 
        type: SORT_WEATHER, 
        payload: { sort, order, sortKey } 
    }
}