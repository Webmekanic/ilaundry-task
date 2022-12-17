import React, { useState } from "react"
import NotificationItem from "../NotificationItem"
import Bug from "../assets/Bug.svg"
import FeaturedIcon from "../assets/FeaturedIcon.svg"
import Speaker from "../assets/FeaturedIcon.svg"

const NotificationList = () => {
  // Dummy Data for Notifications
  const [notification, setNotification] = useState([
    {
      id: "1",
      description: "You have a bug that needs to be fixed.",
      date: "Email@gmail.com",
      image: Bug,
    },
    {
      id: "2",
      description: "New user registered",
      date: "1:23 AM",
      image: FeaturedIcon,
    },
    {
      id: "3",
      description: "You have a bug that needs to be fixed.",
      date: "0:32 AM",
      image: Bug,
    },
    {
      id: "4",
      description: "Andi Lane subscribed to you",
      date: "Yesterday 12:39 AM",
      image: Speaker,
    },
  ])

  return (
    <div>
      {notification.map((notify) => {
        return (
          <NotificationItem
            key={notify.id}
            description={notify.description}
            image={notify.image}
            date={notify.date}
          />
        )
      })}
    </div>
  )
}

export default NotificationList
