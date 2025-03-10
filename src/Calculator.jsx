import React, { useState } from 'react';
// Calculator Component
const Calculator = () => {
    const [result, setResult] = useState(0);
    const [input, setInput] = useState('');
    const handleInput = (value) => {
        setInput(input + value);
    };
    const clearInput = () => {
        setInput('');
    };
    const calculateResult = () => {
        try {
            setResult(eval(input)); // Use eval to calculate the expression
            setInput('');
        } catch (e) {
            setResult('Error');
        }
    };
    return (
        <div>
            <div>
                <input type="text" value={input} readOnly />
            </div>
            <div>
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button onClick={() => handleInput('+')}>+</button>
            </div>
            <div>
                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                <button onClick={() => handleInput('-')}>-</button>
            </div>
            <div>
                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                <button onClick={() => handleInput('*')}>*</button>
            </div>
            <div>
                <button onClick={() => handleInput('0')}>0</button>
                <button onClick={clearInput}>C</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={() => handleInput('/')}>/</button>
            </div>
            <div>
                <h2>Result: {result}</h2>
            </div>
        </div>
    );
};
export default Calculator;
