import React from "react"

type TitleProps = {
  title: string
}

const sidebarHeader: React.FC<TitleProps> = ({ title }) => {
  return <div className="text-lightgray capitalize text-md px-3">{title}</div>
}

export default sidebarHeader
