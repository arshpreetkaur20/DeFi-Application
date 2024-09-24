import React from 'react'

function Paragraph({className,data}) {
  return (
    <>
    <p className={className}>{data}</p>
    </>
  )
}

export default Paragraph