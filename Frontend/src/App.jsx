import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventComponent from './EventComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <EventComponent/>
    </div>
  )
}

export default App
