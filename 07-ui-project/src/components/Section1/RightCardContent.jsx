import React from 'react'

const RightCardContent = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-start'>
            <h1 className='bg-white text-xl font-bold rounded-full flex justify-center items-center h-12 w-12 '>1</h1>
            <div className='flex-1 flex flex-col justify-end'>
                <p className='text-xl leading-relaxed text-white mb-14'> Reprehenderit laboris ea officia cupidatat laborum exercitation  </p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full
                    '> Satisfied </button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full
                    '><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
