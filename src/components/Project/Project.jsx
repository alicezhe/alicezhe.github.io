import { React, useState } from 'react'
import './Project.css'
import Modal from '../Modal/Modal'

export default function Project({
  title, image, description, date, technologies, tags, link,
}) {
  const [showModal, setShowModal] = useState(false)
  const list = tags

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className="project">
      <img onClick={openModal} src={image} alt={`${title}`} className="w-full my-2 my-sm-3 cursor-pointer" />
      <div className="w-full flex justify-between">
        <p className="m-0">{title}</p>
        <div className="hidden lg:block flex mt-2">
          {list.map(tag => (
            <span className="rounded-md bg-[#EBEBEB] text-[#A3A3A3] p-1 mr-2">{tag}</span>
          ))}
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} image={image} description={description} date={date} technologies={technologies} title={title} link={link} />
    </div>
  )
}
