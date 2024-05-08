import React, { useState } from "react";

const About = () => {
  return (
    <>
      <div id="About" className="container mx-auto">
        <h1 className="text-center font-semibold text-4xl text-black">
          About Me
        </h1>

        <div className="text-center my-3 flex flex-wrap gap-10 mx-auto lg:w-[60%] w-[95%] ">
          <p className="text-md font-medium capitalize text-gray-800 ">
            <span>
            Rajiv, a frontend developer, proficient in HTML, CSS, JavaScript,
            and React, is on a journey to master full-stack development.
            </span> <br />
            <span>
            Currently, he's expanding his skills with Node.js. With a passion
            for innovation and learning, Rajiv creates dynamic digital
            experiences while constantly striving to enhance his expertise.
            </span>
          </p>
          <span className="px-5 py-2 text-lg border border-black bg-gray-300 font-medium ">
            Name: Rajiv kumar
          </span>
          <span className="px-5 py-2 text-lg border border-black bg-gray-300 font-medium ">
            Age: 21
          </span>
          <span className="px-5 py-2 text-lg border border-black bg-gray-300 font-medium ">
            Email: rajiv.kr0829@gmail.com
          </span>
          <span className="px-5 py-2 text-lg border border-black bg-gray-300 font-medium ">
            Phone: 8207838227
          </span>
          <span className="px-5 py-2 text-lg border border-black bg-gray-300 font-medium ">
            Experience: Fresher
          </span>
        </div>
      </div>

      <div className="container mx-auto my-10">
        <h1 className="text-center font-semibold text-4xl text-black">Skill</h1>

        <div className="text-center my-3 flex flex-col flex-wrap gap-10 mx-auto lg:w-[40%] w-[95%] ">
          <div className="border-2 border-black w-[100%]  p-2">
            <div
              className={`w-[80%] bg-yellow-400 h-[2rem] flex justify-between pl-3 pr-3`}
            >
              <span className="my-auto capitalize">html</span>
              <span className="my-auto">80%</span>
            </div>
          </div>
          <div className="border-2 border-black w-[100%]  p-2">
            <div
              className={`w-[50%] bg-yellow-400 h-[2rem] flex justify-between pl-3 pr-3`}
            >
              <span className="my-auto capitalize">css</span>
              <span className="my-auto">50%</span>
            </div>
          </div>
          <div className="border-2 border-black w-[100%]  p-2">
            <div
              className={`w-[40%] bg-yellow-400 h-[2rem] flex justify-between pl-3 pr-3`}
            >
              <span className="my-auto capitalize">javascript</span>
              <span className="my-auto">40%</span>
            </div>
          </div>
          <div className="border-2 border-black w-[100%]  p-2">
            <div
              className={`w-[30%] bg-yellow-400 h-[2rem] flex justify-between pl-3 pr-3`}
            >
              <span className="my-auto capitalize">React js</span>
              <span className="my-auto">30%</span>
            </div>
          </div>

          {/* <div className='border-2 border-black w-[100%]  p-2' >
                            <div className='w-[30%] bg-yellow-400 h-[2rem] flex justify-between pl-3'>
                                <span className='my-auto capitalize'>javascript</span>
                                <span className='my-auto'>40%</span>
                            </div>
                            </div>

                            <div className='border-2 border-black w-[100%]  p-2' >
                            <div className='w-[20%] bg-yellow-400 h-[2rem] flex justify-between pl-3'>
                                <span className='my-auto capitalize'>reactjs</span>
                                <span className='my-auto'>20%</span>
                            </div>
                            </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
