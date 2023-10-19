import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calculation></Calculation>
    </div>
  );
}

function Calculation() {

  const [count, setCount] = useState(0);

  // Number increasing
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  // const increaseCount = () => setCount(count + 1);


  // Number decreasing
  const decreaseCount = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  // const decreaseCount = () => setCount(count - 1)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className='increase' onClick={increaseCount}>Increase</button>
      <br />
      <button className='decrease' onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;
