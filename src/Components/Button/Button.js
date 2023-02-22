import React from 'react'
import "../Button/ButtonStyles.css"

export default function Button(prop) {
  return (
    <div>
        <button className='btn'>{prop.text}</button>
    </div>
  )
}
