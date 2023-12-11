import { useState } from 'react'


function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 15

  const upcheckValue = (value) => {
    if (value >= 6) {
      return false;
    } else {
      return true;
    }
  }
  const dncheckValue = (value) => {
    if (value <= 0) {
      return false;
    } else {
      return true;
    }
  }

  const addValue = () => {
    //counter = counter + 1
    if (upcheckValue(counter)) {
      setCounter(counter + 1)
    }
    //console.log(counter)
  }
  const removeValue = () => {
    if (dncheckValue(counter)) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter} </h2>
      <h3>counter value1: {counter}</h3>
      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button
        onClick={removeValue}
      >remove value</button>

    </>
  )
}

export default App
