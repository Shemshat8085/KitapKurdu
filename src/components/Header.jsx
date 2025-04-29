import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-body text-dark'>
      <div className='container d-flex align-items-center justify-content-between py-2'>
        <h2>Kitap Kurdu</h2>

        <nav className='d-flex gap-4'>
          <NavLink to='/'>AnaSayfa</NavLink>
          <NavLink to='/products'>Ürünler</NavLink>
          <NavLink to='/category'>Kategori</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header