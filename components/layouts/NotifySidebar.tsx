import React from "react"
import NotificationList from "./NotificationList"

const NotifySidebar = () => {
  return (
    <div className="w-72 border-l-2 border-ash  h-screen fixed top-0 right-0 py-4 px-6">
      <h4 className="font-semibold mt-1">Notifications</h4>
      <NotificationList />
      <h4 className="font-semibold mt-4">Activities</h4>
    </div>
  )
}

export default NotifySidebar
