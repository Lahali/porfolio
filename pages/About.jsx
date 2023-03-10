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
