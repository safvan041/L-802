import React, { useState } from 'react';
import App from '../App';

function App() {
    const [count, setCount] = useState(0);
  
    const incrementCount = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={incrementCount}>Increment</button>
      </div>
    );
  }

export default App;