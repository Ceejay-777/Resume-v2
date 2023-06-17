import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import Navbar from './navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<></>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
