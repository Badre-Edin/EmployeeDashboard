import React from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Employee from './Employee'
import Home from './Home'
import Profile from './Profile'
import AddEmployee from './AddEmployee'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
        <Route path='/' element={<Home />}></Route>
          <Route path='/employee' element={<Employee />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/create' element={<AddEmployee />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
