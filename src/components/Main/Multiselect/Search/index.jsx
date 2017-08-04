import React, { Component, PropTypes } from 'react';

export default class Search extends Component {
	static propTypes = {
        onClick: PropTypes.func,
        onChange: PropTypes.func
	};

    constructor(props) {
		super(props);
	}

	handleSearchClick = () => {
	    this.props.onClick();
    };

	handleSearchChange = () => {
	    this.props.onChange();
    };

	render() {
		return (
            <input type="search" onClick={this.handleSearchClick} onChange={this.handleSearchChange} className="search-field"/>
		);
	}
}
