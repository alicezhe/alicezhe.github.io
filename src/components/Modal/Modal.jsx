import React, { useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'
import { MdClose } from 'react-icons/md'
import { FiGithub, FiLink } from 'react-icons/fi'
import './Modal.css'
import '../../theme/GlobalStyles'

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: relative;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`

const Modal = ({
  showModal, setShowModal, images, description, title, technologies, date, link, github,
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
          <div className="col-span-1 sm:col-span-2" />
          <div className="col-span-10 sm:col-span-8 h-screen flex justify-center items-center">
            <div className="p-4 lg:pb-8 lg:pt-0 flex flex-col modal-container w-full h-3/4 relative">
              <div className="md:px-8 md:pt-8 w-full flex justify-between">
                <h3>{title}</h3>
                <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(prev => !prev)} />
              </div>
              <div className="overflow-auto w-full h-full">
                <div className="md:px-8 md:pb-16 h-full flex flex-grow-1 flex-col modal-image-container">
                  <div className="w-full lg:flex justify-between mb-4 pt-1">
                    <div className="flex lg:inline-block flex-wrap">
                      {technologies.map(tag => (
                        <span className="rounded-md bg-[#EBEBEB] text-[#A3A3A3] py-1 px-2 mr-2 mb-2">{tag}</span>
                      ))}
                    </div>
                    <div className="inline-block flex items-center">
                      {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer">
                          <FiGithub className="mr-2" color="#363636" />
                        </a>
                      )}
                      {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer">
                          <FiLink className="mr-2" color="#363636" />
                        </a>
                      )}
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
                  <Carousel className="w-full carousel" height={screen.width > 640 ? 512: 256} indicators={images.length > 1} navButtonsAlwaysInvisible={images.length < 2}>
                    {
                      images.map((image, i) => <div key={i} className="h-[256px] md:h-[512px] w-full modal-image" style={{ backgroundImage: `url(${image})` }} />)
                    }
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2" />
        </div>
      ) : null}
    </>
  )
}

export default Modal
