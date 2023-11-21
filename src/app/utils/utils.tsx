export type Position = { x: number, y: number }
export type Direction =  "up" | "down" | "left" | "right";
export type ViperState = {
  direction: Direction
  body: Position[]
}
export const CASE_SIZE = 25;
export const CASE_NUMBER = 20; 

export function getIncrement(direction: Direction) {
	const increment: Position = {x: 0, y:0 };
	switch(direction){
		case "up":
			increment.y--;
			break;
		case "down":
			increment.y++;
			break;
		case "left":
			increment.x--;
			break;
		case "right":
			increment.x++;
			break;
		default: throw new Error("Unkown direction");
	}

	return increment;
}

export function getNewBody(oldBody: ViperState){
	const {direction, body} = oldBody
	const { x, y }= getIncrement(direction);
	return { direction, body: [{x: body[0].x + x, y: body[0].y + y }, ...body.slice(0,body.length - 1) ]};
}

export function getRandomPosition(takenPosition: Position[]){
	const availablePositions: Position[]  = [];
	
	for(let i = 0; i < CASE_NUMBER; i++){
		for(let j = 0; j < CASE_NUMBER; j++){
			if(takenPosition.every(el => el.x !== i + 1 && el.y !== j + 1)){
				availablePositions.push({x: i + 1, y: j + 1});
			}
		}
	}

	if(availablePositions.length === 0)
		return {x: 0, y: 0};

	const index = Math.floor(Math.random() * availablePositions.length);
	return availablePositions[index];
}
