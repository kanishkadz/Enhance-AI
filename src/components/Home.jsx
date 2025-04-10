import React from 'react'
import ImageUpload from "./ImageUpload"
import ImagePreview from "./ImagePreview"

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);



  return (
    <>
      <ImageUpload />
      <ImagePreview />
    </>
  )
}

export default Home