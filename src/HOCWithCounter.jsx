import { Component } from "react"

const WithCounter = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        increment = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1
            }))
        }
        decrement = () => {
            this.setState((prevState) => ({
                count: prevState.count - 1
            }))
        }
        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    increment={this.increment}
                    decrement={this.decrement}
                />
            )
        }
    }
}
class CounterDisplay extends Component {
    render() {
        return (
            <div>
                <h1>Counter: {this.props.count}</h1>
                <button
                    onClick={this.props.increment}>Increase</button>
                <button
                    onClick={this.props.decrement}>Decrease</button>
            </div>
        );
    }
}

class DisplayCounter extends Component {
    render() {
        return (
            <div>
                <h2>Counte : {this.props.count}</h2>
                <button
                    onClick={this.props.increment}>Increase</button>
                <button
                    onClick={this.props.decrement}>Decrease</button>
            </div>
        )
    }
}


const EnhancedCounter = WithCounter(DisplayCounter);

class Counter extends Component {
    render() {
        return (
            <div>
                <EnhancedCounter />
            </div>
        );
    }
}
export default Counter;
