import React, {Component, PropTypes} from 'react';
import Todo from "./Todo/index";
import todoService from '../../../services/todo.service';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: null
        };
    }

    componentDidMount() {
        this.scrolledList.addEventListener('scroll', this.handleScroll);
        todoService.getData(0)
            .then((data) => this.setState({todos: data}))
            .catch((error) => console.error(error));
    }

    componentWillUnmount() {
        this.scrolledList.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = ({target}) => {
        if (target.scrollHeight - target.scrollTop <= target.offsetHeight) {
            todoService.getData(this.state.todos.length)
                .then((data) => this.setState({todos: this.state.todos.concat(data)}))
                .catch((error) => console.error(error));
        }
    };

    render() {
        const todos = this.state.todos;
        return (
            <section className="todo-list">
                <div className="container">
                    <div className="section-description">
                        <h2>Todo List</h2>
                        <button id="add-btn" className="btn-blue-inverse btn">Add +</button>
                    </div>
                    <div ref={(div) => this.scrolledList = div} className="todo-list-wrapper">
                        {todos && todos.map((todo, index) => <Todo todo={todo} key={index}/>)}
                    </div>
                </div>
            </section>
        );
    }
}