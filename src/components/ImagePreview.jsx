import React from 'react'

const ImagePreview = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">Original Image</h2>
        <img src="" alt="" className="w-full h-full object-cover" />
      </div>

      <div></div>
    </div>
  )
}

export default ImagePreview