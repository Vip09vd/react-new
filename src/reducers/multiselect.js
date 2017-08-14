const initialState = {
    countries: [],
    isOpened: false
};

export default function multiselect(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_DROPDOWN': return {
            ...state, isOpened: action.isOpened
        };
        default: return state;
    }
}