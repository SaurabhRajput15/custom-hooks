import React from 'react'
import useCounter from '../customHooks/useCounter'

function CounterTwo() {
  const [count, incrementCount, decrementCount, reset] = useCounter(10, 10)

  return (
    <div>
        <h2>Counter Two : {count}</h2>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo