import { React, useEffect, useState } from 'react'
import Project from '../Project/Project'
import projectData from '../../data/ProjectData'
import ProjectCategories from '../Project/ProjectCategories'

export default function Projects() {
  const [selected, setSelected] = useState('complete')
  const [data, setData] = useState([])
  const list = [
    {
      id: 'complete',
      title: 'everything',
    },
    {
      id: 'code',
      title: 'code',
    },
    {
      id: 'design',
      title: 'design',
    },
  ]

  useEffect(() => {
    switch (selected) {
      case 'complete':
        setData(projectData)
        break
      case 'code':
        setData(projectData.filter(entry => entry.tags.includes('code')))
        break
      case 'design':
        setData(projectData.filter(entry => entry.tags.includes('design')))
        break
      default:
        setData(projectData)
    }
  }, [selected])

  return (
    <div className="page projects flex-grow-1">
      <div className="grid grid-cols-12">
        <div className="col-span-1" />
        <div className="col-span-10 flex flex-col items-center">
          <h1 className="text-center">My projects</h1>
          <div className="flex items-center m-4">
            {list.map(item => (
              <ProjectCategories
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </div>
          <div className="projects-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              {data.map(project => (
                <div className="my-2">
                  <Project
                    title={project.title}
                    images={project.images}
                    tags={project.tags}
                    description={project.description}
                    technologies={project.technologies}
                    date={project.date}
                    link={project.link}
                    github={project.github}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1" />
      </div>
    </div>
  )
}
