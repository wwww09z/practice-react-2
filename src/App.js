import React, { useMemo, useState, useCallback } from 'react';
import './style.css';
import UseCallbackChild from './components/UseCallbackChild';
import List from './components/list/List';

const masiveCalculation = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  console.log('Calculation re-proceed!');
  return result;
};

export default function App() {
  const [n, setN] = useState(1);
  const [manualReloadTime, setManualReloadTime] = useState(0);
  const calculateResult = useMemo(() => masiveCalculation(n), [n]);

  const onButtonClick = useCallback(() => {
    setManualReloadTime(manualReloadTime + 1);
  }, [manualReloadTime]);
  console.log('App re-rendered!');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>
        Masive calculation for N: {n}, the result is: {calculateResult}
      </p>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
      />
      <p>Manually rerendered the page {manualReloadTime} times.</p>
      <UseCallbackChild onButtonClick={onButtonClick} />
      <List n={n} />
    </div>
  );
}
