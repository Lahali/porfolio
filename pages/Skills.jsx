import React from "react"
import Image from "next/image"
import skills from "@/skillsData"
import SkillsCard from "../components/SkillsCard"
import Navbar from "@/components/Navbar"

const Skills = () => {
  return (
    <>
      <Navbar />
      <div id="skills" className="w-full p-6 pt-24 lg:h-screen">
        <div className="maw-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p className="text-xl tracking-widest uppercase text-[#BA881D]">
            skills
          </p>
          <h2>what can I do</h2>
          <div className="flex flex-wrap">
            <SkillsCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
