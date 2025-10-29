import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({ href, className, children,style }) {
  return (
    // <a href={href} className={`text-white text-decoration-none ${className || ""}`}>
    //   {children}
    // </a>
    <a 
      href={href} 
      className={className} 
      style={style}
    >
      {children}
    </a>
  )
}
