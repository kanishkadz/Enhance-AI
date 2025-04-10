import React from 'react'
import ImageUpload from "./ImageUpload"
import ImagePreview from "./ImagePreview"

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);



  return (
    <>
      <ImageUpload  />
      <ImagePreview loading={loading} uploaded={uploadImage} enhanced={enhancedImage} />
    </>
  )
}

export default Home