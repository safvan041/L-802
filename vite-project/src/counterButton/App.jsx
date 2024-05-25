
import React, { useState } from 'react';
import CounterButton from './CounterButton';

function App() {
  
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(true);

  
  const toggleCounting = () => {
    setIsCounting(!isCounting);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <CounterButton 
        count={count} 
        setCount={setCount} 
        isCounting={isCounting} 
      />
      <button onClick={toggleCounting}>
        {isCounting ? 'Stop Counting' : 'Start Counting'}
      </button>
    </div>
  );
}

export default App;
