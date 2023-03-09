import React from "react"
import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="sticky bottom-0 flex items-center justify-center p-4 mt-0 bg-black footer lg:bg-neutral text-neutral-content">
      <div className="flex flex-row py-4">
        <Link
          className="mx-2"
          href="https://www.linkedin.com/in/halimeh-habib/"
          target="_blank"
        >
          <FaLinkedinIn size={25} />
        </Link>
        <Link className="mx-2" href="https://github.com/Lahali" target="_blank">
          <FaGithub size={25} />
        </Link>
        <AiOutlineMail className="mx-2" size={25} />
        <BsFillPersonLinesFill className="mx-2" size={25} />
      </div>
    </footer>
  )
}

export default Footer
