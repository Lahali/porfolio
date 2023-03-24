import React from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import rocket from "../public/assets/images/cohete-amarillo.png"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="items-center w-full p-6 pt-24 md:h-screen">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#1caaaf]">
              About
            </p>
            <h2 className="py-4 text-gray-300">Who I Am</h2>

            <p className="py-2 text-gray-400">
              Hi! My name is Halimeh and I'm a web developer specializing in
              React. I've been living in Barcelona since 2013 and, like many
              people, I found in the pandemic an opportunity to reinvent myself
              and start studying programming.
            </p>
            <p className="py-2 text-gray-400">
              In 2021, I decided to take a big leap and specialize in React
              through an intensive bootcamp. Since then, I've been working on
              various projects where I've applied my knowledge of React,
              TypeScript, JavaScript, Styled Components, GitHub, Figma, Tailwind
              and Next.js.
            </p>
            {/* <p className="py-2 text-gray-400">
              I'm passionate about creating high-quality web applications with
              excellent user experience. I'm always learning and keeping
              up-to-date with the latest trends and tools in the market.
            </p> */}
            <p className="py-2 text-gray-400">
              {" "}
              If you're looking for someone with my skills and experience, don't
              hesitate to get in touch with me!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-auto p-4 m-auto">
            <Image src={rocket} alt="rocket-tech" />
            <a
              href="https://storyset.com/business"
              className="text-xs text-gray-500"
            >
              Business illustrations by Storyset
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
