import { SORT_WEATHER } from "../actions/index.js";
import SortColumn from '../components/sort_column';

const state = {
    sort: "SORT_BY_CITY",
    order: "ORDER_ASCENDING"
};

export default function(state, action){
    switch (action.type){
        case SORT_WEATHER:
            return {
                sort: state.action.sortBy,
                order: state.action.orderBy
            }
    }
        return state;
}

//complete?