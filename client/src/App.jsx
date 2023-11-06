
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './common/Navbar'

import './App.css'
import Users from './Users'
import CreateUser from './CreateUser'
import EditUser from './EditUser'

function App() {

  return (
    <div>
      <BrowserRouter >

      <Navbar />

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        

       

      </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
