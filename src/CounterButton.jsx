import { useState } from "react";

const CounterButton = () => {
    const [count, setCount] = useState(0)

    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)
    const double = () => setCount(count * 2)
    const reset = () => setCount(0)

    return (
        <div>
            <h1>Counter With Multiple button</h1>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={double}>Double</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default CounterButton;