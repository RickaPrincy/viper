import { useEffect, useState } from "react";
import { Dots } from "./Dots";
import { Direction, Position, ViperState, getIncrement } from "../utils"

function Viper(props: {viper: ViperState }){
  const { viper } = props;
  return(
    <>
    { viper.body.map((el, index) => <Dots key={index} type={index === 0 ? "Head" : "Body"} position={el} />)}
    </>
  )
}

export default Viper;
