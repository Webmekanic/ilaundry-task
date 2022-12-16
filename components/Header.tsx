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
    <nav className="flex border-b-2 w-full m-auto justify-between py-5 px-8">
      <div className="flex self-center justify-between align-center text-center gap-4">
        <Image src={SidebarIcon} alt="sidebar" width={25} height={25} />
        <Image src={Star} alt="sidebar" width={25} height={25} />
        <ul className="flex text-center align-center gap-2">
          <li>Dashboard</li> <span>/</span>
          <li>Default</li>
        </ul>
      </div>

      <div className="flex justify-between gap-4">
        <form className="relative flex items-center text-gray-400 focus-within:text-gray-600 mr-5">
          <div className="w-5 h-5 absolute ml-3 pointer-events-none">
            <Image src={SearchIcon} alt="sidebar" width={25} height={25} />
          </div>
          <input
            type="text"
            name="search"
            placeholder="search"
            autoComplete="off"
            className="pr-3 pl-10 py-2 text-lg placeholder-gray-400 text-black bg-gray-50 focus:border-gray-400 rounded-lg outline-gray-200"
          />
        </form>
        <Image src={Sun} alt="clock" width={25} height={25} />
        <Image src={Clock} alt="clock" width={25} height={25} />
        <Image src={Bell} alt="clock" width={25} height={25} />
        <Image src={SidebarIcon} alt="sidebar" width={25} height={25} />
      </div>
    </nav>
  )
}

export default Header
