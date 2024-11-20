import { useState, useEffect} from 'react'
import './App.css'
import powerOn from './assets/power-on.png'
import Desktop from './Desktop.jsx'


export default function App() {

  const [off, setPower] = useState(false)
  const [bodyClass, setBodyClass] = useState("")
  const [mainClass, setMainClass] = useState("")

  useEffect(() => {
    document.body.className = bodyClass;
    return () => {
      document.body.className = "";
    };
  }, [bodyClass]);


  const handleClick = () => {
    setBodyClass("body-power-on")
    setMainClass("main-power-on")
    setTimeout(() => {
      setPower(!off)
      
    }, 1300)
  }

  if (off) {

    return (
      <>
      <Desktop/>
      </>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
      <main className={mainClass}>
  <h1>Elián Portfolio</h1>
  <div className='btn-container'>
    <button className='btn-power' onClick={handleClick}>
      <img src={powerOn} alt="Power On" />
      <p>Power On</p>
    </button>
  </div>
</main>
      </header>
    </div>
  )
  
}

