import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Components/counter'

function App() {
  const [count, setCount] = useState(0) 

  //  número favorito
  function numeroFavorito() {
    if (count === 11) {
      return <p>El 11 es mi número favorito</p>
    }
    return null
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/*  Counter para que este actualizado */}
      <Counter count={count} setCount={setCount} />
      
      {/* Mostrar mensaje cuando sea 11 */}
      {numeroFavorito()}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
