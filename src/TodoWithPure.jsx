import React, { Component, PureComponent } from 'react';
class TodoItem extends PureComponent {
    render() {
        const { todo, toggleCompletion } = this.props;
        return (
            <div>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleCompletion(todo.id)}
                />
                <span style={{
                    textDecoration: todo.completed ?
                        'line-through' : 'none'
                }}>{todo.text}</span>
            </div>
        );
    }
}
class TodoWithPure extends Component {
    state = {
        todos: [
            { id: 1, text: 'Learn React', completed: false },
            { id: 2, text: 'Build an App', completed: false },
        ],
    };
    toggleCompletion = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) =>
                todo.id === id ? {
                    ...todo, completed: !todo.completed
                } : todo
            ),
        });
    };
    render() {
        return (
            <div>
                {this.state.todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleCompletion={this.toggleCompletion} />
                ))}
            </div>
        );
    }
}
export default TodoWithPure;    
