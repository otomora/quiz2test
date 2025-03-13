import { useCounter } from "../Hooks/useCounter"

export function Counter() {
  const { count, increaseCount, decreaseCount, resetCount } = useCounter()

  return(
    <div className="card" style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '3em', margin: '20px 0' }}>{count}</h2>
      
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        margin: '20px 0'
      }}>
        <button 
          onClick={decreaseCount}
          style={buttonStyle}
          title="Decrementar"
        >
          ➖
        </button>
        
        <button 
          onClick={resetCount}
          style={buttonStyle}
          title="Resetear"
        >
          🔄
        </button>
        
        <button 
          onClick={increaseCount}
          style={buttonStyle}
          title="Incrementar"
        >
          ➕
        </button>
      </div>
      
      {count === 11 && (
        <p style={{ 
          color: '#2ecc71',
          fontSize: '1.2em',
          marginTop: '15px',
          fontWeight: '500'
        }}>
          ⚽ ¡11 es mi número favorito!
        </p>
      )}
    </div>
  )
}

// Estilos minimalistas
const buttonStyle = {
  fontSize: '24px',
  padding: '10px 20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  cursor: 'pointer',
  background: 'none',
  transition: 'all 0.2s ease',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  backgroundColor: 'transparent'
}