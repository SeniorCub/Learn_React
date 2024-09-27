import './App.css'
import ListView from "./pages/ListView"
import Error from './pages/Error'
import { Routes, Route } from 'react-router-dom'

function App() {
     return (
     <>
      <Routes>

          <ListView />
          {/* Error 404 Page */}
          <Route path='*' element={<Error />} />
      </Routes>
     </>
     )
}

export default App
