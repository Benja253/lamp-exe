import React, { useState } from 'react'
import LampGlobal from './LampGlobal'

const GlobalLamps = () => {

  const [isOnGlobal, setIsOnGlobal] = useState('on')

  const switchLightGlobal = () => {
    if(isOnGlobal === 'off'){
      setIsOnGlobal('on')
    } else {
      setIsOnGlobal('off')
    }
  }

  return (
    <div className='global-lamps'>
      <LampGlobal 
        isOn={isOnGlobal} 
        switchLightGlobal={switchLightGlobal} 
      />
      <LampGlobal 
        isOn={isOnGlobal} 
        switchLightGlobal={switchLightGlobal} 
      />
      <LampGlobal 
        isOn={isOnGlobal} 
        switchLightGlobal={switchLightGlobal} 
      />
    </div>
  )
}

export default GlobalLamps