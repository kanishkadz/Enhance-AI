import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
        <div className="text-center mb-8">
          <h1>EnhanceAI : AI Image Enhancer</h1>
          <p>Upload your Image and let AI enhance it in seconds !</p>
        </div>

        <Home />

        <div className="text-lg text-gray-500">
          Made by Kanishka                    
        </div>
      </div>
    </>
  )
}

export default App
