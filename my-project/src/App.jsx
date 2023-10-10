import { useState } from "react"
import star from "../src/assets/icon-star.svg"

function App() {

  const [value, setValue] = useState(null);
  const [submitted, SetSubmitted] = useState(null); 
  console.log(value);
  console.log(submitted);

  return (
    <main className="w-scren h-screen flex justify-center items-center">
      <div className="h-2/3 w-3/5 flex justify-center items-center">
        <div className="h-full w-1/2 bg-black rounded-3xl p-10 flex flex-col justify-start gap-7">
          {
            !submitted ? (
              <>
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
                  <img src={star} alt="" />
                </div>
                <h1 className="text-white">How do we do?</h1>
                <p className="text-white">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className="flex gap-6">
                  <button className="w-12 rounded-full h-12 bg-white flex justify-center items-center outline-none" value="1" onClick={() => setValue("1")}>1</button> 
                  <button className="w-12 rounded-full h-12 bg-white flex justify-center items-center outline-none" value="2" onClick={() => setValue("2")}>2</button> 
                  <button className="w-12 rounded-full h-12 bg-white flex justify-center items-center outline-none" value="3" onClick={() => setValue("3")}>3</button> 
                  <button className="w-12 rounded-full h-12 bg-white flex justify-center items-center outline-none" value="4" onClick={() => setValue("4")}>4</button> 
                  <button className="w-12 rounded-full h-12 bg-white flex justify-center items-center outline-none" value="5" onClick={() => setValue("5")}>5</button> 
                </div>
                <button className="p-3 bg-orange-500 rounded-3xl" onClick={() => SetSubmitted(value)}>
                  <h3 className="text-white" >SUBMIT</h3>
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
