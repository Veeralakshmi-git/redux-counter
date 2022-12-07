import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementByAmount } from './counterSlice'
import { useState } from 'react'

const Counter = () => {
const count =  useSelector((state) => state.counter.count);
const dispatch = useDispatch();

const [incrementValue,setIncrementValue] = useState(0);
const addvalue = Number(incrementValue) ||  0;

const resetAll = () => {
    setIncrementValue(0);
    dispatch(reset());
}

return (
    <section>
    <p>{count}</p>
    <div>
        <button className="add" onClick={() =>  dispatch(increment())}>+</button>
        <button className="reset" onClick={() =>  dispatch(decrement())}>-</button>
    </div>
    <input 
        type="text" 
        value={incrementValue}
        onChange={(e) => setIncrementValue(e.target.value)}    
    />
    <div>
        <button className="add" onClick={() => dispatch(incrementByAmount(addvalue))}>Add Amount</button>
        <button className="reset" onClick={resetAll}>Reset</button>

    </div>
    </section>
  )
}

export default Counter