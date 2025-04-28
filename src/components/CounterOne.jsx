import React from 'react'
import useCounter from '../customHooks/useCounter'

function CounterOne() {
  const [count, incrementCount, decrementCount, reset] = useCounter(0, 1)

  return (
    <div>
        <h2>Counter One : {count}</h2>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne