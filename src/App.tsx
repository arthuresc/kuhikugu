import { BiSearch } from "react-icons/bi"; 
import { useState } from 'react'
import './style/App.css'
import image1 from './assets/Images/img2.jpg'
import Home from "./features/Main/Home";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <header className='bg-lime-400 h-[5dvh]'>
          <div className="cabeçalho">
            <img src="/assets/Logos/Bl/BL.webp" alt="" className="src" />
            <label htmlFor="pesquisa">
              <div className="caixa de pesquisa flex">
                <input type="text" id="pesquisa"/>
                <BiSearch />
              </div>
            </label>
          </div>
          <nav className='bg-lime-300 '></nav>
        </header>
        <Home/>
        {/* resolver o sidebar depois */}
        <footer className='bg-cyan-300 h-[40dvh]'>Footer</footer>
      </div>
    </>
  )
}

export default App
