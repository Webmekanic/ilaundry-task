import React from "react"
import Image from "next/image"
import ArrowRise from "./assets/ArrowRise.svg"

type WidgetCardProps = {
  name: string
  amount: number
  percentage: number
  icon: any
}

const WidgetCard = () => {
  return (
    <div className="w-80 rounded-3xl p-10 bg-sky-100 m-4">
      <h4 className="font-semibold text-black text-xl ">Customers</h4>
      <div className="flex justify-between text-center align-center mt-4">
        <p className="font-bold text-4xl">3,781</p>

        <div className="flex gap-2">
          <p className="self-center font-medium text-xl">+5.27%</p>
          <span className="self-center">
            <Image src={ArrowRise} alt={ArrowRise} width={25} height={25} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default WidgetCard
