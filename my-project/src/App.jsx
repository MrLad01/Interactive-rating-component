import { useState } from "react"
import star from "../src/assets/icon-star.svg"
import thankYou from "../src/assets/illustration-thank-you.svg"

function App() {

  const [value, setValue] = useState(null);
  const [submitted, SetSubmitted] = useState(null); 
  const handleClick = (e) => {
    e.preventDefault();
    SetSubmitted(value);
  }
  console.log(value);
  console.log(submitted);

  return (
    <main className="w-scren h-screen flex justify-center items-center">
      <div className="h-2/3 w-3/5 flex justify-center items-center xs:max-lg:scale-90 xs:max-sm:w-full lg:scale-90">
        <div className={`h-full w-1/2 xs:max-lg:h-2/3  xs:max-lg:w-4/5 bg-black rounded-3xl p-10 xs:p-5 sm:p-6 md:p-8 flex flex-col items-${!submitted ? "start" : "center"} gap-5 xs:gap-2 sm:gap-3 md-gap-4`}>
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
                <button className="p-3 bg-orange-500 rounded-3xl" onClick={handleClick}>
                  <h3 className="text-white" >SUBMIT</h3>
                </button>
              </>
            ) :
            (
              <>
              <img src={thankYou} alt="an illustration image" />
              <div className="py-1 px-4 rounded-2xl bg-slate-500">You selected 4 out of 5</div>
              <h1 className="text-white">Thank you!</h1>
              <p className="text-white text-center">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
              </>
            )
          }
        </div>
      </div>
    </main>
  )
}

export default App
