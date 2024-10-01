import React from 'react'
import './notFound.css'

function NotFound() {
  return (
    <div className='error'>
    <h1 className='errorH'>Erorr 404:Not found</h1>
    <p className='errorP'>The page you are trying to reach does not exist.</p>
    <a className='errorA' href="/">Back Home</a>
    </div>
  )
}

export default NotFound
