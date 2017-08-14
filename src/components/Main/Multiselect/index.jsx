import React, {Component} from 'react';
import {connect} from 'react-redux';
import countryService from '../../../services/country.service';
import DropdownList from "./DropdownList/index";
import Search from "./Search/index";
import {closeDropdown, openDropdown} from "../../../actions/multiselect";
import bindActionCreators from "redux/es/bindActionCreators";

class Multiselect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: []
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
            .then((data) => this.setState({
                countries: data
            }));
    }

    handleSearchClick = () => {
        this.props.openDropdown();
    };

    handleDocumentClick = (event) => {
        if (!this.checkClick(event)) {
            this.props.closeDropdown();
        }
    };

    handleSearchChange = ({target}) => {
        countryService.searchCountry(target.value)
            .then((countries) => this.setState({
                countries
            }))
            .catch(() => {
                throw new Error('Idi naxui');
            })
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
                    <div className="search-wrapper">
                        <Search onClick={this.handleSearchClick} onChange={this.handleSearchChange}/>
                        {this.props.isOpened && <DropdownList countries={this.props.countries}/>}
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(store) {
    return {
        countries: store.countries,
        isOpened: store.isOpened
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openDropdown: bindActionCreators(openDropdown, dispatch),
        closeDropdown: bindActionCreators(closeDropdown, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiselect);