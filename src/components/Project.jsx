import { React, useState } from "react";
import "./Project.css"
import { Modal } from "./Modal";

export default function Project(props) {
  const [showModal, setShowModal] = useState(false);
  const list = props.tags;

  const openModal = () => {
    setShowModal(prev => !prev);
  }
  
  return (
    <div class="project">
      <img onClick={openModal} src={props.image} alt="{title}" class="w-100 my-2 my-sm-3"/>
      <div class="w-100 d-flex justify-content-between">
        <p class="m-0">{props.title}</p>
        <div class="d-none d-lg-block">
          {list.map((tag) => {
            return (
              <span class="tag p-1 mx-1">{tag}</span>
            )
          })}
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} image={props.image} description={props.description} date={props.date} technologies={props.technologies} title={props.title} link={props.link}/>
    </div>
  );
}