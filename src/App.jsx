import { useState } from 'react';
import Description from './components/Description/Description';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Description></Description>
    </>
  )
}

export default App
