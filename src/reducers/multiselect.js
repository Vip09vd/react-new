const initialState = {
    countries: [],
    isOpened: false,
    isLoading: false,
    checkedCountries: {}
};

export default function multiselect(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_DROPDOWN':
            return {
                ...state, isOpened: action.isOpened
            };
        case 'COUNTRIES_REQUEST':
        case 'SEARCH_COUNTRIES_REQUEST':
            return {
                ...state, isLoading: true
            };
        case 'COUNTRIES_SUCCESS':
        case 'SEARCH_COUNTRIES_SUCCESS':
            return {
                ...state, countries: action.countries, isLoading: false
            };
        case 'TOGGLE_COUNTRY':
            return {
                ...state,
                checkedCountries: {...state.checkedCountries, [action.payload.country]: action.payload.isChecked}
            }
        default:
            return state;
    }
}