import React from 'react'

function Header ({className,title}) {
  return (
    <>
    <div className={className}>
    <h1>{title}</h1>
    </div>
    </>
  )
}

export default Header;