import React, { useState } from "react"
import Image from "next/image"
import SidebarIcon from "./assets/Sidebar.svg"
import Star from "./assets/Star.svg"
import SearchIcon from "./assets/Search.svg"
import Sun from "./assets/Sun.svg"
import Clock from "./assets/ClockCounterClockwise.svg"
import Bell from "./assets/Bell.svg"
import BarsSolid from "./assets/BarsSolid.svg"
import MobileMenu from "./layouts/MobileMenu"

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <>
      {toggle && (
        <div>
          <MobileMenu />
        </div>
      )}
      <nav className="flex m-auto border-b-2 border-ash justify-between py-4 px-8">
        <div className="flex self-center justify-between align-center text-center gap-2">
          <div
            className="lg:hidden mr-2 cursor-pointer"
            onClick={() => handleClick()}
          >
            <Image src={BarsSolid} alt="sidebar" width={20} height={20} />
          </div>
          <div className="lg:flex gap-2 hidden">
            <Image src={SidebarIcon} alt="sidebar" width={20} height={20} />
            <Image src={Star} alt="sidebar" width={20} height={20} />
          </div>

          <ul className="flex text-center align-center gap-2">
            <li className="text-md text-lightgray">Dashboard</li> <span>/</span>
            <li className="text-md">Default</li>
          </ul>
        </div>

        <div className="flex justify-between gap-2">
          <form className="relative  items-center text-gray-400 focus-within:text-gray-600 mr-5 hidden lg:flex">
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
    </>
  )
}

export default Header
