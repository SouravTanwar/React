import { useState } from 'react'
import './App.css'

function App() {

//let counter =5                                      // 
let [counter, setCounter] = useState(5)               // useState(default value) hook ........the first parameter is the variable and second is a function

const addValue = () => {
  
  if(counter < 20){
    setCounter(counter + 1)
  }
  console.log("clicked add", counter);
}
const decValue = () => {
  if(counter != 0){
    setCounter(counter - 1)
  }
  console.log("clicked dec", counter);
}
  return (
    <>
      <h1> HI THERE </h1>
      <h2>Counter value: {counter}</h2>                       {/*we inject variable in between {} */}
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={decValue}>Dec value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
