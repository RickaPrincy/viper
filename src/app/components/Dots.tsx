import { CASE_SIZE, Position } from "../utils"

type DotsProps = {
  type: "head" | "food" | "body",
  position: Position
}

export function Dots(props: DotsProps){
  const { type, position } = props;
  const x = ( position.x - 1 ) * CASE_SIZE, y = ( position.y - 1 ) * CASE_SIZE;

  return(
    <div  className={type} style={{ left: x, top: y }} />
  )
}
