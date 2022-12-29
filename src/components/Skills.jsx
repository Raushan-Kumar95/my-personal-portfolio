import React from 'react'

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import java from "../assets/java.png";
import cpp from "../assets/cpp.png";
import python from "../assets/python.png";
import mysql from "../assets/mysql.png";
import aws from "../assets/aws.png";
import github from "../assets/github.png";

const Skills = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
            id: 6,
            src: figma,
            title: "Figma",
            style: "shadow-black",
        },
        {
            id: 7,
            src: java,
            title: "Java",
            style: "shadow-red-500",
        },
        {
            id: 8,
            src: cpp,
            title: "C++",
            style: "shadow-blue-900",
        },
        {
            id: 9,
            src: python,
            title: "Python",
            style: "shadow-yellow-900",
        },
        {
            id: 10,
            src: mysql,
            title: "MySql",
            style: "shadow-sky-500",
        },
        {
            id: 11,
            src: aws,
            title: "AWS",
            style: "shadow-red-300",
        },
        
        {
          id: 12,
          src: github,
          title: "GitHub",
          style: "shadow-black",
        },
      ];

    return (
        <div className="w-full h-screen pb-40"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-blue-500 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6">Some of Technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 font-bold">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills