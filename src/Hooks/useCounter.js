import { useState } from 'react'

export function useCounter(){
  const [count, setCount] = useState(0)

  const discreaseCount = () => {
    if (count > 0 )
      setCount((count) => count - 1) 
}

  const increaseCount = () => {
      setCount((count) => count + 1)
}
return { count, increaseCount, discreaseCount} 
  }