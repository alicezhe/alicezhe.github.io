import React, { useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { FiGithub } from 'react-icons/fi'
import './Modal.css'

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: relative;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`

const Modal = ({
  showModal, setShowModal, image, description, title, technologies, date, link,
}) => {
  const modalRef = useRef()

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  const keyPress = useCallback(e => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false)
    }
  }, [setShowModal, showModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <>
      {showModal ? (
        <div className="w-full grid grid-cols-12 flex items-center justify-center background overflow-hidden" ref={modalRef} onClick={closeModal}>
          <div className="col-span-2" />
          <div className="col-span-8 h-screen flex justify-center items-center">
            <div className="p-4 lg:pb-8 lg:pt-0 flex flex-col modal-container w-full h-3/4 relative">
              <div className="md:px-8 md:pt-8 w-full flex justify-between p-2">
                <h3>{title}</h3>
                <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(prev => !prev)} />
              </div>
              <div className="overflow-auto w-full h-full">
                <div className="md:px-8 md:pb-16 h-full flex flex-grow-1 flex-col modal-image-container">
                  <div className="min-h-[50%] md:min-h-[90%] w-full modal-image" style={{ backgroundImage: `url(${image})` }} />
                  <div className="w-full lg:flex justify-between my-4">
                    <div className="flex lg:inline-block flex-wrap">
                      {technologies.map(tag => (
                        <span className="rounded-md bg-[#EBEBEB] text-[#A3A3A3] py-1 px-2 mr-2 mb-2">{tag}</span>
                      ))}
                    </div>
                    <div className="inline-block">
                      <p>
                        Created
                        {' '}
                        {date}
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    {description.map(paragraph => (
                      <div dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2" />
        </div>
      ) : null}
    </>
  )
}

export default Modal
