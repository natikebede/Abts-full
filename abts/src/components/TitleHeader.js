
import React from 'react'
import "./TitleHeader.css"
function TitleHeader({title}) {
  return (
    <div className='container p-2 '>
        
        <h4 className='header_title'>
            {title}
        </h4>
    </div>
  )
}

export default TitleHeader