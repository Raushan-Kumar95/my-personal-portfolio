import React from 'react'
import HeroImage from "../assets/heroImage.jpg";

const Hero = () => {
    return (

        <div className="h-screen w-full "
        >
            <div className="max-w-screen-lg mx-auto flex flex-col gap-5 items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-3xl sm:text-5xl font-bold">
                        <span className='text-green-600'>I'm</span>
                        <p id='text' className='text-blue-500'>a Web Developer</p>
                    </h2>
                    <p className="text-gray-700 py-4 max-w-md">
                        I have to created many projects in web development using latest technologies like react, Tailwind, JavaScript.
                        I have also good knowledge about HTML and CSS
                    </p>

                    <div>
                        <a href="https://wa.me/917079907765"><button
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-gray-100 font-bold text-xl"
                        >
                            Contact Me
                            <span className="group-hover:p-1 duration-300 text-green-900">
                                {/* <MdOutlineKeyboardArrowRight size={25} className="ml-1" /> */}
                                <i class="fa-brands fa-whatsapp ml-2"></i>
                            </span>
                        </button></a>
                    </div>
                </div>

                <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-96"
                    />
                </div>
            </div>
        </div>

    )
}

export default Hero