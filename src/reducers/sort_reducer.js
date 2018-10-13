const defaultState = {
    sort: "sort_by_city",
    order: "asc",
    sortKey: "city.name"
};

export default function (state = defaultState, action){
    switch (action.type){
        case "SORT_WEATHER":
            return {
                sort: action.payload.sort,
                order: action.payload.order,
                sortKey: action.payload.sortKey
            }
    }
        return defaultState;
}
