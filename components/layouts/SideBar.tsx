import React from "react"
import Image from "next/image"
import SidebarHeader from "../sidebarHeader"
import Avatar from "../assets/Avatar.svg"
import Ellipse from "../assets/Ellipse.svg"
import DashBoardLink from "../DashBoardLink"
import ChartPieSlice from "../assets/ChartPieSlice.svg"
import ShoppingBagOpen from "../assets/ShoppingBagOpen.svg"
import FolderNotch from "../assets/FolderNotch.svg"
import BookOpen from "../assets/BookOpen.svg"
import IdentificationBadge from "../assets/IdentificationBadge.svg"
import IdentificationCard from "../assets/IdentificationCard.svg"
import UsersThree from "../assets/UsersThree.svg"
import Notebook from "../assets/Notebook.svg"
import ChatsTeardrop from "../assets/ChatsTeardrop.svg"

const SideBar = () => {
  return (
    <div className="hidden lg:block border-r-2 border-ash  h-full fixed py-4 px-4 scroll-auto">
      <div className="flex gap-3 align-center text-center px-4">
        <Image src={Avatar} alt={Avatar} width={36} height={36} />
        <p className="self-center text-black text-lg">ByeWind</p>
      </div>
      <div className="flex gap-2 mt-6">
        <SidebarHeader title="Favorites" />
        <SidebarHeader title="Recently" />
      </div>
      <div className="flex gap-3 text-center align-center mt-2 px-4">
        <Image src={Ellipse} width={6} height={6} alt={Ellipse} />
        <p className="text-md">Overview</p>
      </div>
      <div className="flex gap-3 text-center align-center mt-2 px-4">
        <Image src={Ellipse} width={6} height={6} alt={Ellipse} />
        <p className="text-md text-black">Projects</p>
      </div>
      <div className="mt-4">
        <SidebarHeader title="dashboard" />
      </div>
      <DashBoardLink text="Default" icon={ChartPieSlice} />
      <DashBoardLink text="eCommerce" icon={ShoppingBagOpen} />
      <DashBoardLink text="Projects" icon={FolderNotch} />
      <DashBoardLink text="Online Courses" icon={BookOpen} />
      <div className="mt-4">
        <SidebarHeader title="pages" />
      </div>
      <div>
        <DashBoardLink text="User Profile" icon={IdentificationBadge} />
      </div>

      <DashBoardLink text="Account" icon={IdentificationCard} />
      <DashBoardLink text="Corporate" icon={UsersThree} />
      <DashBoardLink text="Blog" icon={Notebook} />
      <DashBoardLink text="Social" icon={ChatsTeardrop} />
    </div>
  )
}

export default SideBar
