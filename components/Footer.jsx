import React from "react"
import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const Footer = ({ background }) => {
  return (
    <footer
      className={` sticky bottom-0 flex items-center justify-center p-4 mt-0 footer ${
        background ? background : "bg-black"
      } text-neutral-content`}
    >
      <div className="flex flex-row py-4 text-gray-500">
        <Link
          className="mx-3 cursor-pointer hover:text-gray-300"
          href="https://www.linkedin.com/in/halimeh-habib/"
          target="_blank"
        >
          <FaLinkedinIn size={30} />
        </Link>
        <Link
          className="mx-3 cursor-pointer hover:text-gray-300"
          href="https://github.com/Lahali"
          target="_blank"
        >
          <FaGithub size={30} />
        </Link>
        <Link
          className="mx-3 cursor-pointer hover:text-gray-300"
          href="mailto:matamua82@gmail.com"
        >
          <AiOutlineMail size={30} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
