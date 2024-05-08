import React from 'react'

const Contact = () => {
  return (
    <>
      <div id='Contact' className='container mx-auto col-6'>
        <h1 className='text-center text-4xl font-semibold'>Contact me</h1>

        <div className='mx-auto lg:w-[40%] w-[95%] my-3 '>
          <form action="" className='flex flex-col gap-5'>
          <span className='flex gap-5 flex-wrap'>
          <input type="text" className='border border-black px-4 py-2 outline-none mx-auto lg:w-auto w-full' placeholder='Enter your name' required/>
          <input type="email" className='border border-black px-4 py-2 outline-none mx-auto lg:w-auto w-full' placeholder='Enter your email' required />
          </span>
          <input type="number" className='border border-black px-4 py-2 w-full outline-none' placeholder='Enter your phone number' required />
          <textarea type="text" className='border border-black px-4 py-2 w-full outline-none' placeholder='Enter your name' required > </textarea>
          <input type='submit' className="px-5 mx-auto py-2 border w-[25%] border-black hover:bg-black hover:text-white capitalize bg-white text-black font-semibold" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact