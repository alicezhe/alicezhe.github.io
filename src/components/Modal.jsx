import React, {useRef, useEffect, useCallback} from 'react';
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import "./Modal.css"

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: relative;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal, image, description, title, technologies, date, link }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  }

  const keyPress = useCallback(e => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false);
    }
  }, [setShowModal, showModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div class="w-100 row d-flex align-items-center justify-content-center background" ref={modalRef} onClick={closeModal}>
          <div class="col-2"></div>
          <div class="col-8 vh-100 d-flex justify-content-center align-items-center">
            <div class="p-2 pb-4 d-flex flex-column modal-container w-100 h-75 position-relative">
              <div class="w-100 d-flex justify-content-between p-2">
                <h3 class="mx-5 my-3">{title}</h3>
                <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} /> 
              </div>
              <div class="overflow-auto w-100 h-100">
                <div class="h-100 mx-5 d-flex flex-grow-1 flex-column  modal-image-container">
                  <div class="w-100 px-5 modal-image" style={{ backgroundImage: `url(${image})` }}>
                  </div>
                  <div class="modal-info w-100 my-3 d-flex justify-content-between">
                    <div class="d-inline-block">
                      {technologies.map((tag) => {
                        return (
                          <span class="tag py-1 px-2 mx-1">{tag}</span>
                        )
                      })}
                    </div>
                    <div class="d-inline-block">
                      <p>Created {date}</p>
                    </div>
                  </div>
                  <div class="mb-5">
                    {description.map((paragraph) => {
                        return (
                          <div dangerouslySetInnerHTML={ { __html: paragraph } }></div>
                        )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
      ) : null}
    </>
  )
}