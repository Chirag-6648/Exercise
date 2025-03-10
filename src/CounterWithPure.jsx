import React, { Component, PureComponent } from 'react';
class CounterWithPure extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    increment = () => {
        console.log("increased");
        this.setState({ count: this.state.count + 1 });
    };
    decrement = () => {
        console.log("Decreased");
        this.setState({ count: this.state.count - 1 });
    };
    render() {
        console.log('Counter rendered');
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrement}>Decrease</button>
            </div>
        );
    }
}
export default CounterWithPure;