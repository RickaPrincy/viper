import { CASE_SIZE, Position } from "../utils"

type DotsProps = {
  type: "Head" | "Food" | "Body",
  position: Position
}

export function Dots(props: DotsProps){
  const { type, position } = props;
  const x = ( position.x - 1 ) * CASE_SIZE, y = ( position.y - 1 ) * CASE_SIZE;

  return(
    <div  className={type.toLocaleLowerCase()} style={{ left: x, top: y }} />
  )
}
