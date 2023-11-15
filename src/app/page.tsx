import Link from "next/link"

export default function Home() {
  return (
    <>
      <h2 className="text-[40px]">Welcome to Viper Game !</h2>
      <Link href='/play' className="mt-3">
        <button
          className="px-10 py-[7px] border-white hover:bg-[rgba(255,255,255,.3)] border-[1px] rounded-md"
          type="button"
        >
          Play !
        </button>
      </Link>
    </>
  )
}
