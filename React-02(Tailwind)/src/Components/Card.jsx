import React from 'react'

const Card = (props) => {
  return (
    <div className='w-40px h-100px'>
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
        src='https://yt3.googleusercontent.com/O0mMM5E1ynLDCKCP125bREm2wNcFAaAAc10AUnTw4NlgJwhqNIHKOcthJ6nigWNL5I5FMokT6w=s900-c-k-c0x00ffffff-no-'
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.jobName}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          {props.sal}
        </p>
      </div>
    </div>
  )
}

export default Card