import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
	static propTypes = {
		todo: PropTypes.shape({
            heading: PropTypes.string,
            text: PropTypes.string
        })
	};

    constructor(props) {
		super(props);
	}

	render() {
		return (
            <div className="todo-item">
                <input type="checkbox"/>
                <div className="info">
                    <h3>{this.props.todo.heading}</h3>
                    <p>{this.props.todo.text}</p>
                </div>
                <div className="buttons">
                    <button className="btn btn-sm btn-blue btn-edit">Edit</button>
                    <button className="btn btn-sm btn-blue btn-remove">Delete</button>
                </div>
            </div>
		);
	}
}