import React, { Component, PropTypes } from 'react';
import * as constants from "../../../../constans/index";

export default class Todo extends Component {
	static propTypes = {
		todo: constants.Todo,
        onDelete: PropTypes.func,
        onEdit: PropTypes.func
    };

    constructor(props) {
		super(props);
	}

	handleDelete = () => {
        this.props.onDelete(this.props.todo);
    };

    handleEdit = () => {
        this.props.onEdit(this.props.todo);
    };

	render() {
		return (
            <div className="todo-item">
                <div className="info">
                    <h3>{this.props.todo.heading}</h3>
                    <p>{this.props.todo.text}</p>
                </div>
                <div className="buttons">
                    <button onClick={this.handleEdit} className="btn btn-sm btn-blue btn-edit">Edit</button>
                    <button onClick={this.handleDelete} className="btn btn-sm btn-blue btn-remove">Delete</button>
                </div>
            </div>
		);
	}
}