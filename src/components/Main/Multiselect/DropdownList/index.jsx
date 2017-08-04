import React, {Component, PropTypes} from 'react';
import DropdownItem from './DropdownItem';

export default class DropdownList extends Component {
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
                {countries.map((country, index) => <DropdownItem country={country} key={index}/>)}
            </div>
        );
    }
}