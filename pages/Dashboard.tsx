import React from "react"
import Header from "../components/Header"
import SideBar from "../components/layouts/SideBar"
import NotifySidebar from "../components/layouts/NotifySidebar"

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="">
        <SideBar />
        <div className="mx-56 h-screen">
          <Header />
          <p className="flex m-auto justify-center align-center mt-10 text-red">
            Chart Goes in Here
          </p>
        </div>
        <div>
          <NotifySidebar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
