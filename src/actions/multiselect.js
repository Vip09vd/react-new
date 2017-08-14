import countryService from "../services/country.service";

export function getData() {
    return function (dispatch, getState) {
        countryService.getData()
            .then((data) => this.setState({
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

export function handleSearchChange({target}) {
    countryService.searchCountry(target.value)
        .then((countries) => this.setState({
            countries
        }))
        .catch(() => {
            throw new Error('Hello Andrew');
        })
}