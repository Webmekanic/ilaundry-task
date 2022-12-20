import React from "react"
import Image from "next/image"
import ArrowRise from "./assets/ArrowRise.svg"

type WidgetCardProps = {
  name: string
  amount: string
  percentage: string
  icon: any
  background: string
}

const WidgetCard: React.FC<WidgetCardProps> = ({
  name,
  amount,
  percentage,
  icon,
  background,
}) => {
  return (
    <div className={`rounded-2xl p-6`} style={{ background: `${background}` }}>
      <h4 className="font-semibold text-black text-xl">{name}</h4>
      <div className="flex justify-between text-center align-center mt-3 gap-1">
        <p className="font-bold text-3xl">{amount} </p>

        <div className="flex gap-2">
          <p className="self-center font-medium text-md">{percentage}</p>
          <span className="self-center">
            <Image src={icon} alt={ArrowRise} width={25} height={25} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default WidgetCard
