"use client"
import Footer from "@/components/Footer"
import React from "react"
import Link from "next/link"

// bg-[#191D24]
const Main = () => {
  return (
    <div
      id="home"
      className="bg-center bg-black bg-cover w-full h-screen overflow-hidden text-left lg:bg-[url('../public/assets/images/background.png')]"
    >
      <div className="flex max-w-[1240px] w-full h-full mx-auto justify-start pt-6 px-4 items-center">
        <div>
          {/* <p className="text-sm tracking-widest text-gray-400 uppercase">
            Let's do things
          </p> */}
          <h1 className="py-4 text-gray-300">
            Hi, I'm <span className="text-[#1caaaf]">Halimeh,</span>
          </h1>
          <h1 className="py-2 text-[#daf7f3]">a front-end Developer</h1>
          <div className="py-5 text-gray-500">
            <Link href="/About">
              <h2 className="transition-transform duration-300 ease-in-out hover:translate-x-8 hover:text-gray-300">
                A bit about me
              </h2>
            </Link>
            <Link href="/Skills">
              <h2 className="transition-transform duration-300 ease-in-out hover:translate-x-8 hover:text-gray-300">
                My skills
              </h2>
            </Link>
            <Link href="/Projects">
              <h2 className="transition-transform duration-300 ease-in-out hover:translate-x-8 hover:text-gray-300">
                Some of my work
              </h2>
            </Link>
            <Link href="/Contact">
              <h2 className="transition-transform duration-300 ease-in-out hover:translate-x-8 hover:text-gray-300">
                Let's get in touch!
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
