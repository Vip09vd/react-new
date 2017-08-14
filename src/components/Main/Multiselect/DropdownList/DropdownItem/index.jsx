import React, { Component, PropTypes } from 'react';

export default class DropdownItem extends Component {
	static propTypes = {
		country: PropTypes.string,
		onCheck: PropTypes.func
	};

    constructor(props) {
		super(props);
	}

	handleCheck = () => {
    	this.props.onCheck();
	};

	render() {
		return (
            <label className="dropdown-item">
                <input checked={this.handleCheck} type="checkbox"/>
                <p className="country">{this.props.country}</p>
            </label>
		);
	}
}