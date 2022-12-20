import React, { useState } from "react"
import Image from "next/image"
import Header from "../components/Header"
import SideBar from "../components/layouts/SideBar"
import StackedBarChart from "../components/StackedBarChart"
import NotifySidebar from "../components/layouts/NotifySidebar"
import WidgetCard from "../components/WidgetCard"
import ArrowRise from "../components/assets/ArrowRise.svg"
import ArrowFall from "../components/assets/ArrowFall.svg"
import WorldMap from "../components/assets/WorldMap.svg"
import Revenue from "../components/layouts/Revenue"
import LineChart from "../components/layouts/LineChart"

const Dashboard = () => {
  return (
    <div className="w-full lg:pb-64 pb-20">
      <div>
        <SideBar />
        <div className="lg:ml-56 lg:h-screen lg:mr-0 xl:mr-72">
          <Header />
          <div className=" grid lg:grid lg:grid-cols-2 px-4 gap-4 mt-8">
            <div className="grid sm:grid sm:grid-cols-2 gap-6">
              <WidgetCard
                name="Customers"
                amount="$3,781"
                percentage="+5.27%"
                icon={ArrowRise}
                background="#E3F5FF"
              />
              <WidgetCard
                name="Orders"
                amount="3,219"
                percentage="+1.78%"
                icon={ArrowRise}
                background="#F7F9FB"
              />
              <WidgetCard
                name="Revenue"
                amount="$695"
                percentage="-0.56%"
                icon={ArrowFall}
                background="#F7F9FB"
              />
              <WidgetCard
                name="Growth"
                amount="30.1%"
                percentage="+1.48%"
                icon={ArrowRise}
                background="#E5ECF6"
              />
            </div>
            <div className="bg-fadeblue p-4 rounded-2xl">
              <StackedBarChart />
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-4 gap-6 mt-6 px-4">
            <div className="col-start-1 col-end-4 bg-fadeblue rounded-2xl pl-6">
              <LineChart />
            </div>
            <div className="col-start-4 col-end-4 rounded-2xl justify-center bg-fadeblue p-6 mt-6 lg:mt-0">
              <h4 className="flex align-center justify-center font-medium mb-4">
                Revenue by Location
              </h4>
              <div>
                <Image
                  src={WorldMap}
                  alt="World Map"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>

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
