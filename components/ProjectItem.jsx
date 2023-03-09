import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import projects from "../db.js"

const ProjectItem = () => {
  const [itemId, setItemId] = useState(1)
  console.log("datos", projects)

  const handleNext = () => {
    if (itemId >= projects.length) {
      return
    }
    setItemId(itemId + 1)
  }

  const handlePrev = () => {
    if (itemId <= 1) {
      return
    }
    setItemId(itemId - 1)
  }
  console.log("id", itemId)

  return (
    <>
      <div className="w-full mt-5 carousel">
        {projects.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="relative justify-center w-full carousel-item my-3 flex items-center rounded-md h-auto group hover:bg-[#1caaaf]"
          >
            <Image
              className="self-center h-auto rounded-md group-hover:opacity-10"
              src={item.img}
              width={400}
              height={300}
              alt="/"
            />

            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
              <h3 className="text-xl tracking-wider text-center text-white">
                {item.title}
              </h3>
              <p className="pt-2 pb-4 text-sm text-center text-white">
                {item.description}
              </p>
              <p className="pt-2 pb-4 text-sm text-center text-white">
                Built with: {item.technologies}
              </p>

              <Link href={item.link} target="_blank">
                <p className="py-2 text-lg font-semibold text-center text-gray-700 uppercase bg-white rounded-md cursor-pointer">
                  view demo
                </p>
              </Link>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#${itemId}`}
                onClick={handlePrev}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#${itemId}`}
                className="btn btn-circle"
                onClick={handleNext}
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectItem
