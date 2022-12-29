import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} /> LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/raushankumar75/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} /> GitHub
        </>
      ),
      href: "https://github.com/Raushan-Kumar95",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} /> Mail
        </>
      ),
      href: "mailto:raushankp75@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} /> Resume
        </>
      ),
      href: "https://drive.google.com/file/d/1X0hApwKhkkosnnPXFAQgLilP8L19PntW/view?usp=sharing",
      style: "rounded-br-md",
      download: true,
    },
  ];



  return (
    <div className="lg:flex flex-col top-[62%] right-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-36 h-12 px-4 mr-[-90px] hover:ml-[-80px] hover:rounded-md duration-300 bg-blue-400 rounded-xl" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks