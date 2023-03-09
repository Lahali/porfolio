import React from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

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
            <p className="py-2 text-gray-400"> Lorem ipsum </p>
            <p className="py-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              sequi mollitia sit recusandae porro atque, eveniet fugiat
              perferendis ex. Est eaque eius ut doloribus ipsa nemo tenetur
              asperiores quos perferendis?
            </p>
            <p className="py-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              repudiandae obcaecati ut veniam voluptates eligendi harum eos,
              ullam perspiciatis. Expedita dolores nulla quis doloribus
              consectetur repellendus quo cum harum dicta.
            </p>
            {/* <p className="py-2 text-gray-400 underline cursor-pointer">
              Check out some things I did
            </p> */}
          </div>
          <div className="flex items-center justify-center w-full h-auto p-4 m-auto">
            <img
              className="duration-100 ease-in hover:scale-105"
              src="https://placeimg.com/470/480/tech"
              alt="/"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
