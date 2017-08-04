import React, {Component} from 'react';
import countryService from '../../../services/country.service';
import DropdownList from "./DropdownList/index";
import Search from "./Search/index";

export default class Multiselect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            isOpened: false,
        }
    }

    componentDidMount() {
        this.getData();
        document.addEventListener('click', this.handleDocumentClick);
    }

    componentWillUnmount() {
    	document.removeEventListener('click', this.handleDocumentClick);
    }

    getData() {
        countryService.getData()
            .then((data) => this.setState({countries: data}));
    }

    handleSearchClick = () => {
        this.setState({
            isOpened: true
        })
    };

    handleDocumentClick = (event) => {
        if (!this.checkClick(event)) {
            this.setState({
                isOpened: false
            })
        }
    };

    handleSearchChange = () => {
        //todo
    };

    checkClick = (event) => {
        return event.path.some(({className}) => className === 'search-field' || className === 'dropdown-wrapper');
    };

    render() {
        return (
            <section className="dropdown">
                <div className="container">
                    <div className="section-description">
                        <h2>Multiselect</h2>
                    </div>
                    <Search onClick={this.handleSearchClick} onChange={this.handleSearchChange}/>
                    {this.state.isOpened && <DropdownList countries={this.state.countries}/>}
                </div>
            </section>
        );
    }
}