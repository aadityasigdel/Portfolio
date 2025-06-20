import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './Components/Profile'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
