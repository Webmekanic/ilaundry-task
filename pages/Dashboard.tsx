import React from "react"
import Image from "next/image"
import Header from "../components/Header"
import SideBar from "../components/layouts/SideBar"
import NotifySidebar from "../components/layouts/NotifySidebar"
import WidgetCard from "../components/WidgetCard"
import ArrowRise from "../components/assets/ArrowRise.svg"
import ArrowFall from "../components/assets/ArrowFall.svg"
import WorldMap from "../components/assets/WorldMap.svg"
import Revenue from "../components/layouts/Revenue"

const Dashboard = () => {
  return (
    <div className="w-full pb-24">
      <div className="">
        <SideBar />
        <div className="ml-56 mr-72 h-screen">
          <Header />
          <div className="grid grid-cols-2 border-2 border-red gap-4 mt-8">
            <div className="grid grid-cols-2  gap-6">
              <WidgetCard
                name="Customers"
                amount={3781}
                percentage={5.27}
                icon={ArrowRise}
                background="skyblue"
              />
              <WidgetCard
                name="Orders"
                amount={3219}
                percentage={1.78}
                icon={ArrowRise}
                background="fadeblue"
              />
              <WidgetCard
                name="Revenue"
                amount={695}
                percentage={0.56}
                icon={ArrowFall}
                background="fadeblue"
              />
              <WidgetCard
                name="Growth"
                amount={30.1}
                percentage={1.48}
                icon={ArrowRise}
                background="red"
              />
            </div>
            <div className="border-2 border-black text-red p-8 font-semibold text-3xl">
              Stacked Barchart
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6 mt-4">
            <div className="border-2 border-red col-start-1 col-end-4">
              Line Charts
            </div>
            <div className="col-start-4 col-end-4 rounded-md  justify-center bg-fadeblue p-6">
              <h4 className="flex align-center justify-center font-medium mb-2">
                Revenue by Location
              </h4>
              <Image src={WorldMap} alt="World Map" />
              <Revenue />
            </div>
          </div>
        </div>
        <div>
          <NotifySidebar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
