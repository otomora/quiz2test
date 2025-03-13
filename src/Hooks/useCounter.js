import { useState, useEffect } from 'react'

export function useCounter() {
  const [count, setCount] = useState(() => {
    try {
      return Number(window.localStorage.getItem('count')) || 0
    } catch (error) {
      return 0
    }
  })

  useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])

  const increaseCount = () => setCount(prev => prev + 1)
  const decreaseCount = () => setCount(prev => (prev > 0 ? prev - 1 : 0))
  const resetCount = () => setCount(0) // Nueva función de reset

  return { 
    count, 
    increaseCount, 
    decreaseCount,
    resetCount // Exportamos la nueva función
  }
}