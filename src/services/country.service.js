export class CountryService {
    countries = ['USA', 'Ukraine', 'Poland', 'Sweden', 'United Kingdom', 'Armenia', 'Japan', 'China', 'Australia', 'Hungary', 'Czech Republic', 'Georgia', 'Brazil', 'Argentina', 'Canada', 'Iraq', 'Somali', 'Emirates'];

    getData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.countries)
            }, 100)
        })
    }
}


export default new CountryService();