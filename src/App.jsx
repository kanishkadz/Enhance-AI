import Home from "./components/Home";
const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4 ">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-gray-800 mb-2">
                    Enhance AI{" "}
                </h1>
                <p className="text-lg text-gray-500">
                    AI-Powered Image Enhancement in Just Seconds.
                </p>
            </div>

            <Home />

            <div className="text-sm text-gray-500 mt-6">
                Made by Kanishka
            </div>
        </div>
    );
};

export default App;