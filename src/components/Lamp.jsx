import React, { useState } from 'react'

const Lamp = () => {

  const [isOn, setIsOn] = useState('on')

  const switchLight = () => {
    if(isOn === 'on'){
      setIsOn('off')
    } else {
      setIsOn('on')
    }
  }

  return (
    <div className='lamp-and-btn'>
      <div className={`lamp ${isOn}`}></div>
      <button onClick={switchLight} className='lamp-btn'>{isOn}</button>
    </div>
  )
}

export default Lamp