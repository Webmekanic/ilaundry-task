import React from "react"

type LocationProp = {
  city?: string
  revenue?: string | number
  width?: number
}

const LocationItem: React.FC<LocationProp> = ({ city, revenue, width }) => {
  return (
    <div className="mb-1">
      <div className="w-full flex justify-between text-lg">
        <h4 className="">{city}</h4>
        <p>{revenue}</p>
      </div>
      <div className="bg-lightblue h-1 w-full mt-3 rounded-xl">
        <div className={`w-${width} bg-deepblue h-full rounded-xl`}></div>
      </div>
    </div>
  )
}

export default LocationItem
