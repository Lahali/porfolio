import Navbar from "@/components/Navbar"
import React from "react"
import ProjectItem from "../components/ProjectItem"

const Projects = () => {
  return (
    <>
      <Navbar />
      <div id="projects" className="w-full h-screen pt-8">
        <div className="px-6 py-20 mx-auto max-w-1240px">
          <p className="text-xl tracking-widest uppercase text-[#1caaaf]">
            PROJECTS
          </p>
          <h2 className="text-gray-300">What I've built</h2>
          <div className="">
            <ProjectItem />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
