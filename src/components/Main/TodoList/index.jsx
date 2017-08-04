import React, {Component, PropTypes} from 'react';
import Todo from "./Todo/index";
import todoService from '../../../services/todo.service';
import TodoModal from "./TodoModal/index";

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            isModalOpened: false,
            todosTotalCount: 0,
            editedTodo: null
        };
    }

    componentDidMount() {
        this.scrolledList.addEventListener('scroll', this.handleScroll);
        this.getData(0);
        todoService.getTotalCount().then((totalCount) => this.setState({todosTotalCount: totalCount}));
    }

    componentWillUnmount() {
        this.scrolledList.removeEventListener('scroll', this.handleScroll);
    }

    getData(start) {
        todoService.getData(start)
            .then((data) => this.setState({todos: this.state.todos.concat(data)}))
            .catch((error) => console.error(error));
    }

    handleScroll = ({target}) => {
        if (target.scrollHeight - target.scrollTop <= target.offsetHeight) {
            if (this.state.todos.length < this.state.todosTotalCount) {
                this.getData(this.state.todos.length);
            }
        }
    };

    handleAdd = () => {
        this.setState({
            isModalOpened: true
        })
    };

    handleCloseModal = () => {
        this.setState({
            isModalOpened: false
        })
    };

    handleSaveData = (newTodo) => {
        const oldData = this.state.editedTodo;
        if (!oldData) {
            todoService.addData(newTodo)
                .then((newTodoFromBack) => this.setState({
                    todos: [newTodoFromBack, ...this.state.todos],
                    isModalOpened: false
                }));
        } else {
            todoService.editData(oldData, newTodo)
                .then((newTodoFromBack) => {
                    const newTodosBefore = this.state.todos.slice(0, this.state.todos.indexOf(oldData));
                    newTodosBefore.push(newTodoFromBack);
                    const newTodosAfter = this.state.todos.slice(this.state.todos.indexOf(oldData) + 1, this.state.todos.length);
                    const newTodos = newTodosBefore.concat(newTodosAfter);
                    this.setState({
                        todos: newTodos,
                        isModalOpened: false,
                        editedTodo: null
                    })
                })
        }
    };

    handleDelete = (todo) => {
        todoService.deleteData(todo)
            .then((deletedTodo) => {
                const newTodosBefore = this.state.todos.slice(0, this.state.todos.indexOf(deletedTodo));
                const newTodosAfter = this.state.todos.slice(this.state.todos.indexOf(deletedTodo) + 1, this.state.todos.length);
                const newTodos = newTodosBefore.concat(newTodosAfter);
                if (!newTodos.length) {
                    this.getData(0);
                }
                this.setState({
                    todos: newTodos
                })
            });
    };

    handleEdit = (todo) => {
        this.setState({
            isModalOpened: true,
            editedTodo: todo
        });
    };

    render() {
        const todos = this.state.todos;
        return (
            <section className="todo-list">
                <div className="container">
                    <div className="section-description">
                        <h2>Todo List</h2>
                        <button onClick={this.handleAdd} className="btn-blue-inverse btn">Add +</button>
                    </div>
                    <div ref={(div) => this.scrolledList = div} className="todo-list-wrapper">
                        {/*можно навесить onScroll вместо listener*/}
                        {todos && todos.map((todo, index) => <Todo todo={todo}
                                                                   key={index}
                                                                   onDelete={this.handleDelete}
                                                                   onEdit={this.handleEdit}
                        />)}
                    </div>
                </div>
                <TodoModal onSave={this.handleSaveData}
                           onCloseModal={this.handleCloseModal}
                           isOpened={this.state.isModalOpened}
                           editedTodo={this.state.editedTodo}
                />
            </section>
        );
    }
}