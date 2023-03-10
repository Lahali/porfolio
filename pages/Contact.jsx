import React from "react"
import Image from "next/image"
import contact from "../public/assets/images/contact-yellow.svg"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const Contact = () => {
  return (
    <>
      <Navbar />
      <div id="contact" className="w-full h-screen pt-8 lg:h-screen">
        <div className="max-w-[2240px] bg-black m-auto px-6 py-16 w-screen">
          <p className="text-xl tracking-widest uppercase text-[#1caaaf]">
            contact
          </p>
          <h2 className="py-4 text-gray-300">get in touch</h2>
          <div className="grid gap-8 lg:grid-cols-5">
            {/* ==> LEFT */}
            <div className="h-full col-span-3 p-4 rounded-sm w-fit lg:col-span-2">
              <div className="h-full lg:p-4">
                <div>
                  <Image
                    src={contact}
                    alt="contact"
                    className="bg-white rounded-sm "
                  />
                  <a
                    href="https://storyset.com/business"
                    className="text-sm text-gray-500"
                  >
                    Business illustrations by Storyset
                  </a>
                </div>
                <div>
                  <h2 className="py-2 text-gray-300">Halimeh Habib</h2>
                  <p className="">Front-End Developer</p>
                  <p className="py-4 text-gray-300">
                    I am available for freelance or full-time positions. Contact
                    me and let's talk!
                  </p>
                </div>
              </div>
            </div>

            {/* ==> RIGHT */}

            <div className="w-full h-auto col-span-3 rounded-sm lg:p-4">
              <div className="p-4">
                <form>
                  <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                    <div className="flex flex-col">
                      <label className="py-2 text-sm uppercase">Name</label>
                      <input
                        className="flex p-3 bg-gray-200 border-2 border-gray-500 rounded-sm"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="py-2 text-sm uppercase">
                        Phone number
                      </label>
                      <input
                        className="flex p-3 bg-gray-200 border-2 border-gray-500 rounded-sm"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">Email</label>
                    <input
                      className="flex p-3 bg-gray-200 border-2 border-gray-500 rounded-sm"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">Subject</label>
                    <input
                      className="flex p-3 bg-gray-200 border-2 border-gray-500 rounded-sm"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">message</label>
                    <textarea
                      className="flex p-3 bg-gray-200 border-2 border-gray-500 rounded-sm"
                      rows="10"
                    />
                  </div>
                  <button className="w-full p-4 mt-4 text-gray-100 shadow-none">
                    send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Contact
