import React from 'react'

const LampGlobal = ({isOn, switchLightGlobal}) => {
  return (
    <div className='lamp-and-btn'>
      <div className={`lamp ${isOn}`}></div>
      <button onClick={switchLightGlobal} className='lamp-btn'>{isOn}</button>
    </div>
  )
}

export default LampGlobal