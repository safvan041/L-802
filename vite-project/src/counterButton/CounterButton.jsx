// CounterButton.js
import React from 'react';

function CounterButton({ count, setCount, isCounting }) {
  const incrementCount = () => {
    if (isCounting) {
      setCount(count + 1);
    }
  };

  return (
    <button onClick={incrementCount}>
      Increment
    </button>
  );
}

export default CounterButton;
