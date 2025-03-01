import React, { useEffect, useState } from 'react'
import './counter.css';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  useEffect(() => {

    console.log("counter:", counterValue)

  }, [counterValue]);

  function resetCounter() {

    setCounterValue(0)

  }


  return (
    <div>
      <h1 className="counter-heading">Counter value {counterValue} times clicked</h1>
      <div className='button'>
        <button onClick={() => setCounterValue(counterValue + 1)}>Increase Count</button>
        <button onClick={() => setCounterValue(counterValue - 1)}>Decrease Count</button>
      </div>
      <button className='reset-button' onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default Counter;
