import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    <div className="container ">
        <nav className="flex-row rounded-md bg-slate-950 h-8 mb-8">
      <center className='space-x-4 text-orange-50'>
      <Link  to="/Tp1">Tp1</Link>
      <Link  to="/Tp2">Tp2</Link>
      <Link  to="/Tp3">Tp3</Link>
      <Link  to="/Tp4">Tp4</Link>
      <Link  to="/Tp5">Tp5</Link>
      <Link  to="/Tp6">Tp6</Link>
      </center>
      </nav>
    </div>
  )
}
