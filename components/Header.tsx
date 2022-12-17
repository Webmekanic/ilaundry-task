import React from "react"
import Image from "next/image"
import SidebarIcon from "./assets/Sidebar.svg"
import Star from "./assets/Star.svg"
import SearchIcon from "./assets/Search.svg"
import Sun from "./assets/Sun.svg"
import Clock from "./assets/ClockCounterClockwise.svg"
import Bell from "./assets/Bell.svg"

const Header = () => {
  return (
    <nav className="flex m-auto border-b-2 border-ash justify-between py-4 px-8">
      <div className="flex self-center justify-between align-center text-center gap-2">
        <Image src={SidebarIcon} alt="sidebar" width={20} height={20} />
        <Image src={Star} alt="sidebar" width={20} height={20} />
        <ul className="flex text-center align-center gap-2">
          <li className="text-md">Dashboard</li> <span>/</span>
          <li className="text-md">Default</li>
        </ul>
      </div>

      <div className="flex justify-between gap-2">
        <form className="relative flex items-center text-gray-400 focus-within:text-gray-600 mr-5">
          <div className="w-5 h-5 absolute ml-3 pointer-events-none">
            <Image src={SearchIcon} alt="sidebar" width={20} height={20} />
          </div>
          <input
            type="text"
            name="search"
            placeholder="search"
            autoComplete="off"
            className="pr-3 pl-10 py-1 text-lg placeholder-gray-400 text-black bg-ash focus:border-ash rounded-lg outline-ash"
          />
        </form>
        <Image src={Sun} alt="clock" width={20} height={20} />
        <Image src={Clock} alt="clock" width={20} height={20} />
        <Image src={Bell} alt="clock" width={20} height={20} />
        <Image src={SidebarIcon} alt="sidebar" width={20} height={20} />
      </div>
    </nav>
  )
}

export default Header
