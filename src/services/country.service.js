export class CountryService {
    countries = ['USA', 'Ukraine', 'Poland', 'Sweden', 'United Kingdom', 'Armenia', 'Japan', 'China', 'Australia', 'Hungary', 'Czech Republic', 'Georgia', 'Brazil', 'Argentina', 'Canada', 'Iraq', 'Somali', 'Emirates'];

    getData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.countries)
            }, 100)
        })
    }

    getTotalCount() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.countries.length);
            }, 10);
        });
    }

    searchCountry(country) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (country == null) {
                    reject();
                } else {
                    resolve(this.countries.filter((listItem) => {
                        return listItem.toLowerCase().indexOf(country.trim().toLowerCase()) !== -1;
                    }))
                }
            }, 100)
        })
    }

}


export default new CountryService();