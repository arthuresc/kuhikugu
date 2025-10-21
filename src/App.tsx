import { useState } from 'react'
import './style/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-6 grid-rows-[minmax(30px,8vh)_min(100vh)_minmax(100px,30vh)]'>
        <div className='bg-lime-300 col-span-12 row-span-1'></div>
        <div className='bg-pink-500 col-span-12 row-span-1'></div>
        {/* resolver o sidebar depois */}
        <div className='bg-cyan-300 col-span-12 row-span-1'></div>
      </div>
    </>
  )
}

export default App
