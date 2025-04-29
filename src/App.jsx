import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Products from './pages/Products'
import Header from './components/Header'
import Category from './pages/Category'
import Noval from './pages/Noval'
import Story from './pages/Story'
import TestError from './pages/TestError'





function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/details/:id' element={<Details />} />

        <Route path='/category' element={<Category />}>
          <Route path='hikaye' element={<Story />} />
          <Route path='roman' element={<Noval />} />
        </Route>
        <Route path='/TestError' element={<TestError/>}/> 
        <Route path='/TestError' element={<TestError/>}/> 

      </Routes>
      
    </BrowserRouter>

  )
}

export default App