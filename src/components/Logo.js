import React from 'react'
import './Logo.css'
import logo from "../img/logo.webp"

const Logo = () => {
  return (
    <div 
    className="Logo"
    style={{
      backgroundImage: `url(${logo})`

    }}
  />
  )
}
export default Logo