import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Error from './pages/Error'

function App() {
     return (
          <>
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path='*' element={<Error />}/>
          </Routes>
          </>
     )
}

export default App
