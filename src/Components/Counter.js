import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={decrement} disabled={count === 0}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;

