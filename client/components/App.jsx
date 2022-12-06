import React from 'react'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'

import style from '../styles/App.module.scss'
import Home from './Home'
import Modal from './Modal'
import SignUp from './SignUp'
import SignIn from './SignIn'

function App() {
  return (
    <main className={style.app}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Modal />
    </main>
  )
}

export default App
