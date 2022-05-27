import { useState } from 'react'
import './App.css'
import GlobalLamps from './components/GlobalLamps'
import IndividualLamp from './components/IndividualLamp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <IndividualLamp />
      <GlobalLamps />
    </div>
  )
}

export default App
