import React from 'react'

function Button() {
  return (
    <div>
      <a href="signup">Sign Up</a> 
      {/* need this href to be sent by the App.jsx so it can be reused */}
    </div>
  )
}

export default Button