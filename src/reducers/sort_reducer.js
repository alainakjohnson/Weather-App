
// Create a new Redux Reducer that is in charge of managing a new state object {sort, order}, where sort indicates the sorting scheme 
// (city name, average temperature, average pressure, or average humidity) and order indicates the sorting direction (ascending or descending).

// Upon receiving an action by the type of say SORT_WEATHER, it simply updates the state accordingly.
import { Sorter } from "../actions/index.js";

const state = {
    sort: "sort_by_city",
    order: "order_ascending"
};

export const sort = (state = "sort_by_city", action) => {
    switch (action.type){
        case Sorter:
            return 
                sort: action.sortBy;
                order: action.orderBy;
        default : 
            return state
    }
}
console.log( sort(state, action) ) 

export default sort;

