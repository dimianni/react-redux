import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';
import './App.css';



function App() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <main>
      <h1>Count: {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </main>
  );
}

export default App;
