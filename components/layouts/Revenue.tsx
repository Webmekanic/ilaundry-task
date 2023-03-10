import React, { useState } from "react"
import LocationItem from "../LocationItem"

const Revenue = () => {
  const [revenue, setRevenue] = useState([
    {
      id: "1",
      city: "New York",
      revenue: "72k",
      width: "70%",
    },
    {
      id: "2",
      city: "San Francisco",
      revenue: "39K",
      width: "50%",
    },
    {
      id: "3",
      city: "Sydney",
      revenue: "25K",
      width: "45%",
    },
    {
      id: "4",
      city: "Singapore",
      revenue: "61K",
      width: "70%",
    },
  ])

  return (
    <div>
      {revenue.map((item) => {
        return (
          <LocationItem
            key={item.id}
            city={item.city}
            revenue={item.revenue}
            width={item.width}
          />
        )
      })}
    </div>
  )
}

export default Revenue
