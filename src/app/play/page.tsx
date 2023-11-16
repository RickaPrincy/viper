"use client"

import { useRouter } from "next/navigation";
import { CASE_NUMBER, Position, ViperState, getNewBody, getRandomPosition } from "../utils";
import React, { useEffect, useState } from "react";
import Viper from "../components/Viper";
import { Dots } from "../components/Dots";

function Play(){
  const router = useRouter();
  const [foodPosition, setFoodPosition] = useState<Position>({x: 1, y: 1});
  const [viper, setViper] = useState<ViperState>({
    direction: "up", body: [{x: CASE_NUMBER, y: 18}, {x: CASE_NUMBER, y: 19}, {x: CASE_NUMBER, y: CASE_NUMBER}]
  });
  const head = viper.body[0];

  const walk = ()=> setViper(state => getNewBody(state))
  useEffect(()=>{
    if(viper.body.some(el => el.x > CASE_NUMBER || el.x < 1 || el.y > CASE_NUMBER || el.y < 1)){
      router.push("/gameover");
      return;
    }

    if(head.x === foodPosition.x && head.y === foodPosition.y){
      setViper(state => {
        const { body } = state;
        const newDots = body[body.length - 1];
        return {...state, body: [...body, newDots]};
      })

      setFoodPosition(getRandomPosition(viper.body))
    }

  },[viper.body]) 
  
  useEffect(()=>{
    const action = setInterval(walk,200)
    
    window.addEventListener("keydown", (event: KeyboardEvent)=>{
      switch(event.key){
        case "ArrowDown":
          setViper(state => ({...state, direction : "down"}))
          break;
        case "ArrowUp":
          setViper(state => ({...state, direction : "up"}))
          break;
        case "ArrowLeft":
          setViper(state => ({...state, direction : "left"}))
          break;
        case "ArrowRight":
          setViper(state => ({...state, direction : "right"}))
          break;
        default: break;
      }
    })

    return ()=> { 
      window.removeEventListener("keydown",()=>{});
      clearInterval(action);
    }
  },[])

  return (
    <div className="relative box-content w-[500px] h-[500px] bordered">
      <Viper viper={viper}/>
      <Dots type="food" position={foodPosition}/>
    </div>
  )
}

export default Play;
