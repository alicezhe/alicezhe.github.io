import React from 'react'
import './Project.css'

export default function ProjectCategories({
  id, title, active, setSelected,
}) {
  return (
    <div
      className={active ? 'text-[#3B3B3B]' : 'text-[#A3A3A3]'}
      onClick={() => setSelected(id)}
    >
      <button type="button" className="bg-[#EBEBEB] rounded-md p-1 m-2 transition ease-in-out duration-200 hover:text-[#3B3B3B] hover:shadow-sm">{title}</button>
    </div>
  )
}
