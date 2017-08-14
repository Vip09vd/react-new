import React, {Component, PropTypes} from 'react';
import DropdownItem from './DropdownItem';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {toggleCountry} from "../../../../actions/multiselect";


class DropdownList extends Component {
    static propTypes = {
        countries: PropTypes.arrayOf(PropTypes.string)
    };

    constructor(props) {
        super(props);
    }

    render() {
        const countries = this.props.countries;
        return (
            <div className="dropdown-wrapper">
                {countries.map((country, index) => <DropdownItem
                    country={country}
                    key={index}
                    isChecked={this.props.checkedCountries[country]}
                    onInputChange={this.props.toggleCountry}
                />)}
            </div>
        );
    }
}


function mapStateToProps(store) {
    return {
        checkedCountries: store.checkedCountries,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleCountry: bindActionCreators(toggleCountry, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownList);