import { useState } from "react"

function App() {

  const [submitted, SetSubmitted] = useState(null); 

  return (
    <main className="w-scren h-screen flex justify-center items-center">
      <div className="h-2/3 w-3/5 flex justify-center items-center">
        <div className="h-full w-1/2 bg-black rounded-3xl p-10 flex flex-col justify-start gap-8">
          {
            !submitted ? (
              <>
                <img src="" alt="" />
                <h1 className="text-white">How do we do?</h1>
                <p className="text-white">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className="flex gap-6">
                  <span className="w-12 rounded-full h-12 bg-white flex justify-center items-center">1</span>
                  <span className="w-12 rounded-full h-12 bg-white flex justify-center items-center">2</span>
                  <span className="w-12 rounded-full h-12 bg-white flex justify-center items-center">3</span>
                  <span className="w-12 rounded-full h-12 bg-white flex justify-center items-center">4</span>
                  <span className="w-12 rounded-full h-12 bg-white flex justify-center items-center">5</span>
                </div>
                <button className="p-3 bg-orange-500 rounded-3xl ">
                  <h3 className="text-white">SUBMIT</h3>
                </button>
              </>
            ) :
            (
              <>
              </>
            )
          }
        </div>
      </div>
    </main>
  )
}

export default App
