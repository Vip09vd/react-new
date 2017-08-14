import React, {Component, PropTypes} from 'react';

export default class DropdownItem extends Component {
    static propTypes = {
        country: PropTypes.string,
        isChecked: PropTypes.bool,
        onInputChange: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    handleInputChange = () => {
        this.props.onInputChange(this.props.country, !this.props.isChecked);
    };

    render() {
        return (
            <label className="dropdown-item">
                <input type="checkbox" checked={this.props.isChecked || false} onChange={this.handleInputChange}/>
                <p className="country">{this.props.country}</p>
            </label>
        );
    }
}