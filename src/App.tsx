import { useState } from 'react'
import MainScene from "./scenes/main";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <MainScene/>
      </div>
  )
}

export default App
