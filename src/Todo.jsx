import React, { Component } from "react";

class Todo extends Component {
    render() {
        const { task, onDelete, onToggleComplete } = this.props
        return (
            <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                <span>{task.name}</span>
                <button onClick={() =>
                    onToggleComplete(task.id)}>Complete</button>
                <button onClick={() =>
                    onDelete(task.id)}>Delete</button>
            </div>
        );
    }
}
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            taskName: '',
        };
    }
    addTask = () => {
        if (this.state.taskName.trim() === "") return;
        const newTask = {
            id: Date.now(),
            name: this.state.taskName,
            completed: false
        }
        this.setState({
            tasks: [...this.state.tasks, newTask],
            taskName: ""
        })
        // console.log(newTask);
    }
    removeTask = (id) => {
        this.setState({
            tasks: this.state.tasks.filter((task) => task.id !== id)
        })
    }
    toggleComplete = (id) => {
        this.setState({
            tasks: this.state.tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
        })
    }
    handleChange = (e) => {
        this.setState({
            taskName: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.taskName}
                    onChange={this.handleChange}
                    placeholder="New task"
                />
                <button onClick={this.addTask}>Add Task</button>
                <div>
                    {this.state.tasks.map((task) => (
                        <Todo
                            key={task.id}
                            task={task}
                            onDelete={this.removeTask}
                            onToggleComplete={this.toggleComplete}
                        />
                    ))}
                </div>
            </div>
        )
    }

}
export default TodoList