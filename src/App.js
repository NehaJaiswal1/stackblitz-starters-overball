import React,{useState} from 'react';
import './style.css';

export default function App() {
  let [countBall, setCountBall] = useState(0);
  const [overBall, setOverBall] = useState(0);
  function handleCountBall (){
      setCountBall(countBall+1)
      if(countBall === 6){
        setCountBall(0)
        setOverBall(overBall+1)
      }
  }
  return (
    <div>
      <p>{overBall}</p>
      <button onClick={handleCountBall}>ball{countBall}</button>
    </div>
  );
}
