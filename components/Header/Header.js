import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import HeaderItem from "./HeaderItem"
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'

function Header() {
  const router = useRouter()
  return (
    <header className="flex flex-col md:flex-row m-5 justify-between items-center h-auto">
      {/* <h1>This is Header</h1>
      <h1 className="font-mono">NXTstream</h1> */}

      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title='Home' Icon={HomeIcon} href='/'/>
        <HeaderItem title='Popular' Icon={LightningBoltIcon} href='/'/>
        <HeaderItem title='Verified' Icon={BadgeCheckIcon} href='/'/>
        <HeaderItem title='Collections' Icon={CollectionIcon} href='/'/>
        <HeaderItem title='Search' Icon={SearchIcon} href='/'/>
        <HeaderItem title='Account' Icon={UserIcon} href='/'/>
      </div>

      <Image 
      className="object-contain"
        src={require("../../utils/assets/img/logo_White.png")} 
        width={200} 
        height={100} />
    </header>
  )
}

export default Header