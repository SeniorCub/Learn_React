import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Error from './pages/Error'
import SignUp from './pages/SignUp'
import Newsletter from './pages/Newsletter'

function App() {
     return (
          <>
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path='/sign' element={<SignUp />} />
               <Route path='/newsletter' element={<Newsletter />} />
               {/* Error 404 Page */}
               <Route path='*' element={<Error />} />
          </Routes>
          </>
     )
}

export default App
