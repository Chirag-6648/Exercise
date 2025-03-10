import React, { Component } from 'react';
class CalculatorWithClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            result: 0,
        };
    }
    handleInput = (value) => {
        this.setState({ input: this.state.input + value });
    };
    clearInput = () => {
        this.setState({ input: '' });
    };
    calculateResult = () => {
        try {
            this.setState({
                result: eval(this.state.input),
                input: ''
            });
        } catch (e) {
            this.setState({ result: 'Error', input: '' });
        }
    };
    render() {
        return (
            <div>
                <input type="text" value={this.state.input} readOnly
                />
                <div>
                    <button onClick={() =>
                        this.handleInput('1')}>1</button>
                    <button onClick={() =>
                        this.handleInput('2')}>2</button>
                    <button onClick={() =>
                        this.handleInput('3')}>3</button>
                    <button onClick={() =>
                        this.handleInput('+')}>+</button>
                </div>
                <div>
                    <button onClick={() =>
                        this.handleInput('4')}>4</button>
                    <button onClick={() =>
                        this.handleInput('5')}>5</button>
                    <button onClick={() =>
                        this.handleInput('6')}>6</button>
                    <button onClick={() => this.handleInput('-')}>-
                    </button>
                </div>
                <div>
                    <button onClick={() =>
                        this.handleInput('7')}>7</button>
                    <button onClick={() =>
                        this.handleInput('8')}>8</button>
                    <button onClick={() =>
                        this.handleInput('9')}>9</button>
                    <button onClick={() =>
                        this.handleInput('*')}>*</button>
                </div>
                <div>
                    <button onClick={() =>
                        this.handleInput('0')}>0</button>
                    <button onClick={this.clearInput}>C</button>
                    <button onClick={this.calculateResult}>=</button>
                    <button onClick={() =>
                        this.handleInput('/')}>/</button>
                </div>
                <h2>Result: {this.state.result}</h2>
            </div>
        );
    }
} export default CalculatorWithClass;
