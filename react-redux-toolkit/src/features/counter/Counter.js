import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from "./counterSlice";



const Counter = () => {
    const [incrementAmount, setIncrementAmount] = useState(0);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset(0));
    }
    const addValue = Number(incrementAmount) || 0;

    return (
        <section>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}> Increment </button>
            <button onClick={() => dispatch(decrement())}> Decrement </button>
            <section>
                <input type="text"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <div>
                    <button onClick={() => dispatch(incrementByAmount(addValue))}> Add Amount </button>
                    <button onClick={resetAll}> Reset </button>
                </div>

            </section>

        </section>
    )
}

export default Counter
