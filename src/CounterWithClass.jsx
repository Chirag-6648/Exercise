import React, { Component } from 'react';
class CounterWithClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    increase = () => {
        this.setState({ count: this.state.count + 1 });
    };
    decrease = () => {
        this.setState({ count: this.state.count - 1 });
    };
    reset = () => {
        this.setState({ count: 0 });
    };
    double = () => {
        this.setState({ count: this.state.count * 2 });
    };
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.double}>Double</button>
            </div>
        );
    }
}
export default CounterWithClass;