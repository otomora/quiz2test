import { useCounter } from "../Hooks/useCounter";
export function Counter(){
    const { count, increaseCount, discreaseCount } = useCounter();
  return(
  <div className="card">
        <p>{count}</p>
        <button onClick={increaseCount} style={{ fontSize: '24px', margin: '5px' }}>
          ➕
        </button>
        <button onClick={discreaseCount} style={{ fontSize: '24px', margin: '5px' }}>
          ➖
        </button>
        
       </div>

);
      
        
}
     

