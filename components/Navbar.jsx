import Link from "next/link"
import React, { useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)
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
      <div className="flex items-center justify-end w-full h-full px-2 bg-black 2xl:px-16">
        {/* aquí iría el logo o similar */}
        <div>
          <ul className="hidden md:flex">
            {navigation.map((nav) => (
              <Link key={nav.id} href={nav.path}>
                <li className="ml-10 text-sm text-gray-400 uppercase border-gray-400 hover:border-b">
                  {nav.label}
                </li>
              </Link>
            ))}
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} className="text-gray-300" />
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-black h-screen p-5 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-8 ease-in duration-300"
          }
        >
          <div className="flex items-center justify-end w-full">
            {/* ESPACIO PARA LOGO */}
            <div
              onClick={handleNav}
              className="p-3 cursor-pointer hover:rounded-full hover:border-gray-700"
            >
              <AiOutlineClose size={20} className="hover:text-gray-500" />
            </div>
          </div>
          <div className="border-b border-gray-500 my4">
            <p className="w-[85%] md:w-[90%] py-4 text-gray-300 text-lg">
              Let's do things together
            </p>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              {navigation.map((nav) => (
                <Link key={nav.id} href={nav.path}>
                  <li className="py-4 text-base border-gray-500 hover:border-b ">
                    {nav.label}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#1caaaf]">
                let's connect
              </p>
              {/* ICONOS */}
              <div className="flex flex-wrap text-gray-500 items-center justify-between my-1  sm:my-4 w-full sm:w-[80%]">
                <div className="p-6 border border-black rounded-full cursor-pointer hover:text-gray-300">
                  <Link
                    href="https://www.linkedin.com/in/halimeh-habib/"
                    target="_blank"
                  >
                    <FaLinkedinIn size={25} />
                  </Link>
                </div>
                <div className="p-6 border border-black rounded-full cursor-pointer hover:text-gray-300">
                  <Link href="https://github.com/Lahali" target="_blank">
                    <FaGithub size={25} />
                  </Link>
                </div>
                <div className="p-6 border border-black rounded-full cursor-pointer hover:text-gray-300">
                  <AiOutlineMail size={25} />
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
