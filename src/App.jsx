import { useState } from 'react'

import Home from './pages/Home'
import './App.css'
import Cart from './pages/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    <Cart/>
   
    </>
  )
}

export default App
