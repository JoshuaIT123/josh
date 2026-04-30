import React from 'react'

function About() {
  return (
    <div className='w-full  mini-h-screen item-center justify-center bg-gray-700 flex '>
      <form className='w-full border border-gray-900 bg-grey max-w-md rounded-2xl mb-5 p-5 item-center justify-center mt-5'>
        <h5 className='text-white font-medium  text-center'>REGISTRATION FORM</h5>
        <label className='text-gray-50 block font-medium mb-2 p-2'>firstname</label>
        <input type='text' placeholder='enter firstname' className='w-full p-3 border border-grey-800 rounded-2xl'></input>
                <label className='text-gray-50 block font-medium mb-2 p-2'>
          Email
        </label>
        <input type='email' placeholder='enter an email' className='w-full p-3 border border-grey-800 rounded-2xl'></input>
                <label className='text-gray-50 block font-medium mb-2 p-2'>
          Gender
        </label>
        <input type='text' placeholder='enter your gender' className='w-full p-3 border border-grey-800 rounded-2xl'></input>
        <div className='flex justify-center'>
        <button className='hover:bg-blue-500 text-white bg-grey-400 border border-black rounded-2xl px-2 py-2 flex items-center justify-center mt-2 w-full'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default About