import React from "react"

type WidgetCardProps = {
  name: string
  amount: number
  percentage: number
  icon: any
}

const WidgetCard = () => {
  return (
    <div className="w-64 border border-1 border-red-600 rounded-lg p-6">
      <h4 className="font-semibold text-black text-xl ">Customers</h4>
      <div className="flex border border-1 border-red-600 justify-between text-center align-center mt-4">
        <p className="font-bold text-4xl">3,781</p>

        <p className="self-center font-medium text-xl">+5.27%</p>
        <span></span>
      </div>
    </div>
  )
}

export default WidgetCard
