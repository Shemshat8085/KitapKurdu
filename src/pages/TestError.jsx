import React from 'react'
import { Link } from 'react-router-dom'

const TestError = () => {
  return (
    <div className='container py-5 d-flex flex-column justify-content-center text-center align-items-center'>
      <h1>Aradıgınız ürün bulunamadı</h1>
      <img src="/notFound.gif" className='img-fluid image' alt="" />

      <Link className='text-white fs-4 mt-5' to='/Products'>Ürünler Sayfasına Git</Link>
    </div>
  )
}

export default TestError