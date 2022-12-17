import React from "react"
import Image from "next/image"
import Bug from "./assets/Bug.svg"

type NotificationItemProps = {
  description: string
  date?: string
  image?: HTMLImageElement
}

const NotificationItem = () => {
  return (
    <div className="flex gap-2 mb-2">
      <Image src={Bug} alt="Bug" width={48} height={48} />
      <div className="mt-3">
        <h4 className="font-normal text-2xl">
          You have a bug that needs to be fixed
        </h4>
        <p className="text-gray-400 text-xl mt-1">Email@gmail.com</p>
      </div>
    </div>
  )
}

export default NotificationItem
