import { React, useEffect, useState } from "react";
import Project from "./Project";
import { projectData } from "../data/ProjectData";
import ProjectCategories from "./ProjectCategories";

export default function Projects() {
  const [selected, setSelected] = useState("complete");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "complete",
      title: "everything",
    },
    {
      id: "code",
      title: "code",
    },
    {
      id: "design",
      title: "design",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "complete":
        setData(projectData);
        break;
      case "code":
        setData(projectData.filter((entry) => {
          return entry.tags.includes("code");
        }));
        break;
      case "design":
        setData(projectData.filter((entry) => {
          return entry.tags.includes("design");
        }));
        break;
      default:
        setData(projectData);
    }
  }, [selected]);

  return (
    <div class="page projects flex-grow-1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10 d-flex flex-column align-items-center">
            <h1 class="text-center">My projects</h1>
            <ul class="list-group list-group-horizontal"> 
              {list.map((item) => (
                <ProjectCategories
                  title={item.title}
                  active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
                />
              ))}
            </ul>
            <div class="projects-container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {data.map((project) => {
                  return (
                    <div class="my-2">
                      <Project
                      title = {project.title}
                      image = {project.image}
                      tags = {project.tags}
                      description= {project.description}
                      technologies = {project.technologies}
                      date = {project.date}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </div>
  );
}