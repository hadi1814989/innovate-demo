import { useState } from 'react'

import Layout from './components/Layout'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


function App() {
 let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index  element={<Home />}></Route>
  </Route>
 ))

  return (
    <>
    <RouterProvider router={router}  />
    </>
  )
}

export default App
