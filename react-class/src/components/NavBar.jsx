// import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className='bg-slate-500 p-3 text-white flex justify-between'>
          <div className='text-2xl'><Link to={'/'}>SnrCub</Link></div>
          <ul className='flex gap-16'>
               <Link to={'/'}>Home</Link>
               <Link to={'/About'}>About</Link>
               <Link to={'/Services'}>Services</Link>
               <Link to={'/Contact'}>Contact</Link>
               <Link to={'/Profile'}>Profile</Link>
          </ul>
      </nav>
    </>
  )
}

export default NavBar
