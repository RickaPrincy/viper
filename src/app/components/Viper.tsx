import { Dots } from "./Dots";
import { ViperState } from "../utils"

function Viper(props: {viper: ViperState }){
  const { viper } = props;
  return(
    <>
      { viper.body.map((el, index) => <Dots key={index} type={index === 0 ? "head" : "body"} position={el} />)}
    </>
  )
}

export default Viper;
