import React from "react"
import Image from "next/image"
import contact from "../public/assets/images/contact.jpeg"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import Link from "next/link"
import Navbar from "@/components/Navbar"

const Contact = () => {
  return (
    <>
      <Navbar />
      <div id="contact" className="w-full pt-8 lg:h-screen">
        <div className="max-w-[1240px] m-auto px-6 py-16 w-full">
          <p className="text-xl tracking-widest uppercase text-[#BA881D]">
            contact
          </p>
          <h2 className="py-4">get in touch</h2>
          <div className="grid gap-8 lg:grid-cols-5">
            {/* ==> LEFT */}
            <div className="h-full col-span-3 p-4 rounded-md shadow-md w-fit lg:col-span-2 shadow-gray-400">
              <div className="h-full lg:p-4">
                <div>
                  <Image
                    src={contact}
                    alt="contact"
                    className="duration-150 ease-in rounded-md hover:scale-105 "
                  />
                </div>
                <div>
                  <h2 className="py-2">Halimeh Habib</h2>
                  <p className="">Front-End Developer</p>
                  <p className="py-4">
                    I am available for freelance or full-time positions. Contact
                    me and let's talk!
                  </p>
                </div>
                <div>
                  <p className="pt-8 uppercase">Connect with me</p>
                  <div className="flex items-center justify-between py-4">
                    <div className="rounded-full p-6 cursor-pointer bg-[#ecf0f3] border border-gray-700 text-gray-700  hover:bg-gray-700 hover:text-[#ecf0f3]">
                      <Link
                        href="https://www.linkedin.com/in/halimeh-habib/"
                        target="_blank"
                      >
                        <FaLinkedinIn size={25} />
                      </Link>
                    </div>
                    <div className="rounded-full p-6 cursor-pointer  bg-[#ecf0f3] border border-gray-700 text-gray-700  hover:bg-gray-700 hover:text-[#ecf0f3]">
                      <Link href="https://github.com/Lahali" target="_blank">
                        <FaGithub size={25} />
                      </Link>
                    </div>
                    <div className="rounded-full p-6 cursor-pointer  bg-[#ecf0f3] border border-gray-700 text-gray-700  hover:bg-gray-700 hover:text-[#ecf0f3]">
                      <AiOutlineMail size={25} />
                    </div>
                    <div className="rounded-full p-6 cursor-pointer  bg-[#ecf0f3] border border-gray-700 text-gray-700  hover:bg-gray-700 hover:text-[#ecf0f3]">
                      <BsFillPersonLinesFill size={25} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ==> RIGHT */}

            <div className="w-full h-auto col-span-3 rounded-md shadow-md shadow-gray-400 lg:p-4">
              <div className="p-4">
                <form>
                  <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                    <div className="flex flex-col">
                      <label className="py-2 text-sm uppercase">Name</label>
                      <input
                        className="flex p-3 border-2 border-gray-300 rounded-md"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="py-2 text-sm uppercase">
                        Phone number
                      </label>
                      <input
                        className="flex p-3 border-2 border-gray-300 rounded-md"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">Email</label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-md"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">Subject</label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-md"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">message</label>
                    <textarea
                      className="flex p-3 border-2 border-gray-300 rounded-md"
                      rows="10"
                    />
                  </div>
                  <button className="w-full p-4 mt-4 text-gray-100">
                    send message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <Link href="/">
              <div className="rounded-full p-4 cursor-pointer  bg-[#ecf0f3]  text-gray-700  hover:bg-gray-700 hover:text-[#ecf0f3]">
                <HiOutlineChevronDoubleUp size={30} className="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
