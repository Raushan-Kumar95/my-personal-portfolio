import React from 'react'

import forshare from "../assets/project/forshare.png";
import college from "../assets/project/college.png";
import sparePart from "../assets/project/sparePart.png";
import reactWeather from "../assets/project/reactWeather.jpg";

const Projects = () => {
    const portfolios = [
        {
            id: 1,
            src: forshare,
        },
        {
            id: 2,
            src: college,
        },
        {
            id: 3,
            src: sparePart,
        },
        {
            id: 4,
            src: reactWeather,
        },
    ];


    return (
        <div className="w-full md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-40">
                <div className="pt-14">
                    <p className="text-4xl font-bold inline border-b-4 border-blue-500">
                        My Projects
                    </p>
                    <p className="py-6">Some of my Project Work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:underline hover:rounded-lg">
                                    Live
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:underline hover:rounded-lg">
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects