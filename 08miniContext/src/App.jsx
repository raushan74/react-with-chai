import { useState } from 'react'
import UsercontextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
  <UsercontextProvider>
  <h1>React with chai</h1>
  <Login></Login>
  <Profile></Profile>
  </UsercontextProvider>
  )
}

export default App
