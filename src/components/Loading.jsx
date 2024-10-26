import React from 'react'
import loader from '/loader.gif'

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black overflow-hidden'>
        <img className='w-[40vh] h-[30vh]' src={loader} alt="" />
    </div>
  )
}

export default Loading