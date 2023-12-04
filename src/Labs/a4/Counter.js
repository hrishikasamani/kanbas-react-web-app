import { useState } from "react";

function Counter() {
    let [count, setCount] = useState(7);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h2>Count: {count}</h2>
            <button className="btn btn-success" onClick={increment}>Up</button>
            <button className="btn btn-danger" onClick={decrement}>Down</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
export default Counter;