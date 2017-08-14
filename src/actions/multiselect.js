import countryService from "../services/country.service";

export function getCountries() {
    return function (dispatch) {
        dispatch({type: 'COUNTRIES_REQUEST'});
        countryService.getData()
            .then((data) => dispatch({
                type: 'COUNTRIES_SUCCESS',
                countries: data
            }));
    }
}

export function openDropdown() {
    return {
        type: 'TOGGLE_DROPDOWN',
        isOpened: true
    }
}

export function closeDropdown() {
    return {
        type: 'TOGGLE_DROPDOWN',
        isOpened: false
    }
}

export function searchCountries(country) {
    return function (dispatch) {
        dispatch({type: 'SEARCH_COUNTRIES_REQUEST'});
        countryService.searchCountry(country)
            .then((countries) => dispatch({
                type: 'SEARCH_COUNTRIES_SUCCESS',
                countries: countries
            }))
            .catch(() => {
                throw new Error('Hello Andrew');
            })
    }
}

export function toggleCountry(country, isChecked) {
    return {
        type: 'TOGGLE_COUNTRY',
        payload: {country, isChecked}
    }
}