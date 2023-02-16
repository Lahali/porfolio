import React from "react"
import Image from "next/image"
import skills from "@/skillsData"

const SkillsCard = () => {
  return (
    <>
      {skills.map((item, index) => (
        <div
          key={index}
          className="m-4 relative flex items-center justify-center h-auto  rounded-md p-4 group hover:bg-[#BA881D]"
        >
          <div className="flex items-center justify-center">
            <div className="m-auto">
              <Image
                src={item.image}
                width="85"
                height="85"
                alt="logo"
                className="group-hover:opacity-10"
              />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
              <h3 className="tracking-wider text-center text-white ">
                {item.name}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default SkillsCard
