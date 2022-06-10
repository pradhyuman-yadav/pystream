import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      {/* <h1>This is Header</h1>
      <h1 className="font-mono">NXTstream</h1> */}

      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title='Home' Icon={HomeIcon}/>
        <HeaderItem title='Popular' Icon={LightningBoltIcon}/>
        <HeaderItem title='Verified' Icon={BadgeCheckIcon}/>
        <HeaderItem title='Collections' Icon={CollectionIcon}/>
        <HeaderItem title='Search' Icon={SearchIcon}/>
        <HeaderItem title='Account' Icon={UserIcon}/>
      </div>

      <Image 
      className="object-contain"
        src="https://links.papareact.com/ua6" 
        width={200} 
        height={100} />
    </header>
  )
}

export default Header