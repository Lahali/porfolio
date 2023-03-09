import React from "react"
import Image from "next/image"
import skills from "@/skillsData"
import SkillsCard from "../components/SkillsCard"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const Skills = () => {
  return (
    <>
      <Navbar />
      <div
        id="skills"
        className="w-full h-screen p-6 pt-24 bg-black lg:h-screen"
      >
        <div className="maw-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p className="text-xl tracking-widest uppercase text-[#1caaaf]">
            skills
          </p>
          <h2 className="text-gray-300">what can I do</h2>
          <div className="flex flex-wrap">
            <SkillsCard />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Skills
