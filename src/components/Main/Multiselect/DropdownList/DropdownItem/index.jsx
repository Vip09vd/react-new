import React, { Component, PropTypes } from 'react';

export default class DropdownItem extends Component {
	static propTypes = {
		country: PropTypes.string
	};

    constructor(props) {
		super(props);
	}
	render() {
		return (
            <div className="dropdown-item">
                <input type="checkbox"/>
                <p className="country">{this.props.country}</p>
            </div>
		);
	}
}