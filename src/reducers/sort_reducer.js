import { SORT_WEATHER } from "../actions/index.js";

const state = {
    sort: "city",
    order: "ORDER_ASCENDING"
};

export default function(state, action){
    switch (action.type){
        case "SORT_WEATHER":
            return {
                sort: action.payload.sort,
                order: action.payload.order
            }
    }
        return null;
}

//complete?