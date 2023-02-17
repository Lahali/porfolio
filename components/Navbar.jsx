import Link from "next/link"
import React, { useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const renderThemeChanger = () => {
    return (
      <button className="self-center p-2 text-gray-700 bg-gray-100 shadow-none hover:ring-2 hover:ring-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
    )
  }

  useEffect(() => {
    const handleShadow = () => {
      globalThis.scrollY >= 90 ? setShadow(true) : setShadow(false)
    }
    globalThis.addEventListener("scroll", handleShadow)
  }, [])

  console.log(shadow)

  const navigation = [
    { label: "home", path: "/" },
    { label: "about", path: "/About" },
    { label: "skills", path: "/Skills" },
    { label: "projects", path: "/Projects" },
    { label: "contact", path: "/Contact" },
  ]

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-md z-[100] bg-gray-700"
          : "fixed w-full h-20 z-[100] bg-gray-800"
      }
    >
      <div className="flex items-center justify-end w-full h-full px-2 2xl:px-16">
        {/* aquí iría el logo o similar */}
        <div>
          <ul className="hidden md:flex">
            {navigation.map((nav) => (
              <Link key={nav.id} href={nav.path}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  {nav.label}
                </li>
              </Link>
            ))}
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* MENÚ LATERAL */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 " : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-gray-800 h-screen p-5 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-8 ease-in duration-300"
          }
        >
          <div className="flex items-center justify-end w-full">
            {/* ESPACIO PARA LOGO */}
            <div
              onClick={handleNav}
              className="border border-[#ecf0f3] hover:rounded-full  hover:border-gray-700 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my4">
            <p className="w-[85%] md:w-[90%] py-4">Let's do things together</p>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              {navigation.map((nav) => (
                <Link key={nav.id} href={nav.path}>
                  <li className="py-4 text-sm hover:border-b ">{nav.label}</li>
                </Link>
              ))}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#BA881D]">
                let's connect
              </p>
              {/* ICONOS */}
              <div className="flex flex-wrap items-center justify-between my-1  sm:my-4 w-full sm:w-[80%]">
                <div className="rounded-full p-6 cursor-pointer border border-[#ecf0f3] hover:border-gray-700">
                  <Link
                    href="https://www.linkedin.com/in/halimeh-habib/"
                    target="_blank"
                  >
                    <FaLinkedinIn size={25} />
                  </Link>
                </div>
                <div className="rounded-full p-6 cursor-pointer border border-[#ecf0f3] hover:border-gray-700">
                  <Link href="https://github.com/Lahali" target="_blank">
                    <FaGithub size={25} />
                  </Link>
                </div>
                <div className="rounded-full p-6 cursor-pointer border border-[#ecf0f3] hover:border-gray-700">
                  <AiOutlineMail size={25} />
                </div>
                <div className="rounded-full p-6 cursor-pointer border border-[#ecf0f3] hover:border-gray-700">
                  <BsFillPersonLinesFill size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
