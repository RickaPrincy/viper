import { useEffect, useState } from "react";
import { Dots } from "./Dots";
import { Direction, Position, getIncrement } from "../utils"

type ViperState = {
  direction: Direction
  body: Position[]
}
function Viper(){
  const [touched, setTouched] = useState(false);
  const [viper, setViper] = useState<ViperState>({
    direction: "up", body: [{x: 20, y: 18}, {x: 20, y: 19}, {x: 20, y: 20}]
  });

  const walk = ()=>{
    setViper(state => {
      const { direction, body } = state;
      const { x, y }= getIncrement(direction);
      const newBody: Position[] = [];
      
      for(let i = body.length - 1 ; i >= 0 ; i--){
        const oldPosition = body[i];
        const newPosition = i === 0 ? { x: oldPosition.x + x, y : oldPosition.y + y } : body[i - 1];
        newBody.unshift(newPosition);
      }
      
      return { direction, body: newBody };
    })
  }
  
  useEffect(()=>{
    const action = setInterval(walk,1000)
    
    return ()=> clearInterval(action);
  },[])

  return(
    <>
    { viper.body.map((el, index) => <Dots key={index} type={index === 0 ? "Head" : "Body"} position={el} />)}
    </>
  )
}

export default Viper;
