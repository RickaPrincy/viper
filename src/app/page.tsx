import Link from "next/link"

export default function Home() {
  return (
    <>
      <h2 className="text-[40px]">Welcome to Viper Game !</h2>
      <Link href='/play' className="mt-3">
        <button className="main-button" type="button">
          Play !
        </button>
      </Link>
    </>
  )
}
