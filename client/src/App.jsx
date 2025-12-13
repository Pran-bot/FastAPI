import { useState } from 'react'
import Login from './components/login'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App
