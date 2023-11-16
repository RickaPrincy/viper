import Link from "next/link";

function GameOver(){
	return (
    <div className="text-center text-[40px]">
      <h2 className="text-inherit">Game Over !!!</h2>
			<Link href='/play'>
				<button className="main-button mt-3 mx-auto block">Restart</button>
			</Link>    
		</div>
	)
}

export default GameOver;