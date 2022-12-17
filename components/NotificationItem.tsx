import React from "react"
import Image from "next/image"

type NotificationItemProps = {
  description: string
  date?: string
  image: HTMLImageElement
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  description,
  date,
  image,
}) => {
  return (
    <div className="flex gap-2 mb-2">
      <Image src={image} alt="Bug" width={48} height={48} />
      <div className="mt-3">
        <h4 className="font-normal text-md">{description}</h4>
        <p className="text-gray-400 text-xl mt-1">{date}</p>
      </div>
    </div>
  )
}

export default NotificationItem
