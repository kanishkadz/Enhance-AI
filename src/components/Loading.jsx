import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin border-4 w-[5vmax] h-[5vmax] rounded-full border-red-300"></div>
    </div>
  )
}

export default Loading