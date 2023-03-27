import { useState } from "react";

function LikeCounter() { 
  const [count, setCount] = useState(0); 
 
  const increment = () => { 
    setCount((oldCount) => oldCount + 1); 
  }; 
  const decrement = () => { 
    setCount((oldCount) => oldCount - 1); 
  }; 
 
  return ( 
    <div> 
      <p>Like Count: {count}</p> 
      <button onClick={increment}>Like</button> 
      <button onClick={decrement}>Dislike</button> 
    </div> 
  ); 
}

export default LikeCounter;