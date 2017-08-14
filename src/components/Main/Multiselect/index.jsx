import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import DropdownList from "./DropdownList/index";
import Search from "./Search/index";
import {closeDropdown, getCountries, openDropdown, searchCountries} from "../../../actions/multiselect";
import bindActionCreators from "redux/es/bindActionCreators";

class Multiselect extends Component {
    static propTypes = {
    	isOpened: PropTypes.bool,
        countries: PropTypes.arrayOf(PropTypes.string),
        openDropdown: PropTypes.func,
        closeDropdown: PropTypes.func,
        getCountries: PropTypes.func,
        searchCountries: PropTypes.func
    };

    componentDidMount() {
        this.props.getCountries();
        document.addEventListener('click', this.handleDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick);
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
        this.props.searchCountries(target.value);
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
        closeDropdown: bindActionCreators(closeDropdown, dispatch),
        getCountries: bindActionCreators(getCountries, dispatch),
        searchCountries: bindActionCreators(searchCountries, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiselect);