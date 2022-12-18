import React, { useState } from "react"
import NotificationItem from "../NotificationItem"
import EveLorey from "../assets/EveLorey.svg"
import AliahLane from "../assets/AliahLane.svg"
import Drew from "../assets/Drew.svg"
import Kate from "../assets/Kate.svg"
import Lana from "../assets/Lana.svg"

const ActivitiesList = () => {
  // Dummy Data for Notifications
  const [activities, setActivities] = useState([
    {
      id: "1",
      description: "Edited the details of Project X",
      date: "Email@gmail.com",
      image: EveLorey,
    },
    {
      id: "2",
      description: "ByeWind",
      date: "1:32 AM",
      image: AliahLane,
    },
    {
      id: "3",
      description: "Submitted a bug",
      date: "Yesterday 12:39 AM",
      image: Drew,
    },
    {
      id: "4",
      description: "Modified A data in Page X",
      date: "Last Thursday 3:34 AM",
      image: Kate,
    },
    {
      id: "5",
      description: "Deleted a page in Project X",
      date: "Aug 11",
      image: Lana,
    },
  ])

  return (
    <div>
      {activities.map((notify) => {
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

export default ActivitiesList
