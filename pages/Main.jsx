"use client"
import React from "react"

const Main = () => {
  return (
    <div
      id="home"
      className="w-full overflow-hidden h-screen text-left bg-[#191D24] "
    >
      <div className="flex max-w-[1240px] w-full h-full mx-auto justify-start pt-6 px-4 items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-200 uppercase">
            Let's do things
          </p>
          <h1 className="py-4 text-gray-300">
            Hi, I'm <span className="text-[#1caaaf]">Halimeh,</span>
          </h1>
          <h1 className="py-2 text-[#daf7f3]">a front-end Developer</h1>
          {/* <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end developer specializing in building exceptional
            digital experiences. Currently I'm focused on building responsive
            front-end web applications while learning more technologies.
          </p> */}
          {/* <div className="flex items-center justify-between max-w-[330px]  py-4">
            <div className="p-6 text-white bg-black border border-black rounded-full cursor-pointer hover:bg-gray-300 hover:text-gray-700">
              <Link
                href="https://www.linkedin.com/in/halimeh-habib/"
                target="_blank"
              >
                <FaLinkedinIn size={25} />
              </Link>
            </div>
            <div className="rounded-full p-6 cursor-pointer  bg-gray-700 border border-[#ecf0f3] text-white  hover:bg-[#ecf0f3] hover:text-gray-700">
              <Link href="https://github.com/Lahali" target="_blank">
                <FaGithub size={25} />
              </Link>
            </div>
            <div className="rounded-full p-6 cursor-pointer  bg-gray-700 border border-[#ecf0f3]  text-white hover:bg-[#ecf0f3] hover:text-gray-700">
              <AiOutlineMail size={25} />
            </div>
            <div className="rounded-full p-6 cursor-pointer  bg-gray-700 border border-[#ecf0f3] text-white  hover:bg-[#ecf0f3] hover:text-gray-700">
              <BsFillPersonLinesFill size={25} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Main
