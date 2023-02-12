import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import db from "../db.json"

const ProjectItem = () => {
  const data = db.projects
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const getData = await data
      setProjects(getData)
    }
    loadData()
  }, [])

  return (
    <>
      {projects.map((item) => (
        <div
          key={item.id}
          className="relative my-3 flex items-center justify-center h-auto w-[80%] shadow-md shadow-gray-400 rounded-md p-4 group hover:bg-[#BA881D]"
        >
          <Image
            className="rounded-md group-hover:opacity-10"
            src={item.img}
            width={400}
            height={450}
            alt="/"
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <h3 className="text-2xl tracking-wider text-center text-white">
              {item.title}
            </h3>
            <p className="pt-2 pb-4 text-center text-white">
              {item.description}
            </p>
            <p className="pt-2 pb-4 text-center text-white">
              Built with: {item.technologies}
            </p>

            <Link href={item.link}>
              <p className="py-2 text-lg font-bold text-center text-gray-700 uppercase bg-white rounded-md cursor-pointer">
                view demo
              </p>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectItem
