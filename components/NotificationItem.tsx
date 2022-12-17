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
    <div className="flex gap-2 mb-1">
      <Image src={image} alt="Bug" width={25} height={25} />
      <div className="mt-2">
        <h4 className="font-normal text-md line-clamp-1">{description}</h4>
        <p className="text-lightgray text-md">{date}</p>
      </div>
    </div>
  )
}

export default NotificationItem
