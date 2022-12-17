import React from "react"
import Image from "next/image"
import ArrowRight from "./assets/ArrowRight.svg"

type LinkProp = {
  text: string
  icon: HTMLImageElement
}

const DashBoardLink: React.FC<LinkProp> = ({ text, icon }) => {
  return (
    <div className="flex align-center text-center self-center gap-2 mt-2">
      <Image src={ArrowRight} width={8} height={8} alt="Icon" />
      <Image src={icon} width={25} height={25} alt="Icon" />
      <p className="self-center">{text}</p>
    </div>
  )
}

export default DashBoardLink
