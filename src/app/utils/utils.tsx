import { HTMLAttributes } from "react";

export type Position = { x: number, y: number }
export type Direction =  "up" | "down" | "left" | "right";

export const CASE_SIZE = 25;

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