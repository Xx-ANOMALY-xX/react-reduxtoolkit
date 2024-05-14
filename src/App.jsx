import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/Reducers/conterSlice'

const App = () => {
  const displatch = useDispatch()
  const { value } = useSelector((state) => state.counter)
  
  const incrementby1handeler = ()=>{
    displatch(increment(value + 1));
  }

  const decrementby1handeler = ()=>{
    displatch(decrement(value - 1));
  }
  
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={incrementby1handeler} style={{padding: "10px", backgroundColor: "green", color: "white", border: "none",}}>Increment By 1</button> <br /><br />
      <button onClick={decrementby1handeler} style={{padding: "10px", backgroundColor: "green", color: "white", border: "none"}}>Decrement By 1</button>
    </div>
  )
}

export default App