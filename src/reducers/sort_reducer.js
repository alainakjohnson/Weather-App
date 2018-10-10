const defaultState = {
    sort: "sort_by_temp",
    order: "asc"
};

export default function (state = defaultState, action){
    switch (action.type){
        case "SORT_WEATHER":
            return {
                sort: action.payload.sort,
                order: action.payload.order
            }
    }
        return defaultState;
}