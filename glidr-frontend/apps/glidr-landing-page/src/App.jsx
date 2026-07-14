import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { RouterProvider } from 'react-router'
import './App.css'
import Router from './router/router'

function App() {

  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
