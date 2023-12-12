
import './App.css'
import Card from './component/card'
function App() {
  let myObj = {
    username: "raushan",
    age: 22
  }

  let newArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-500 text-black-300'>tailwind test</h1>
      <Card username="chaiaurcode" btntext="click me" />
      <Card username="raushan" btntext="visit me"/>

    </>
  )
}

export default App
