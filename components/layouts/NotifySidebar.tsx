import React from "react"
import NotificationList from "./NotificationList"
import ActivitiesList from "./ActivitiesList"

const NotifySidebar = () => {
  return (
    <div className=" border-l-2 border-ash h-screen fixed top-0 right-0 py-4 px-6 hidden lg:w-72 lg:hidden xl:block">
      <h4 className="font-semibold mt-1">Notifications</h4>
      <NotificationList />
      <h4 className="font-semibold mt-4">Activities</h4>
      <ActivitiesList />
    </div>
  )
}

export default NotifySidebar
