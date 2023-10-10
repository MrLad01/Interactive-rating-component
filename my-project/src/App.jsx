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
        <div className={`h-full w-1/2 xs:max-lg:h-2/3  xs:max-lg:w-4/5 bg-dark-blue rounded-3xl p-10 xs:p-5 sm:p-6 md:p-8 flex flex-col items-${!submitted ? "start" : "center"} lg:max-2xl:gap-6 xs:gap-2 sm:gap-3 md-gap-4`}>
          {
            !submitted ? (
              <>
                <div className="lg:max-2xl:w-10 lg:max-2xl:h-10 flex justify-center items-center rounded-full bg-medium-grey bg-opacity-20 xs:w-6 xs:h-6 xs:p-1 sm:p-1 sm:w-7 sm:h-7 ">
                  <img src={star} alt="" />
                </div>
                <h1 className="text-white lg:max-2xl:pt-4 xs:pt-0 sm:pt-0 md:pt-3">How do we do?</h1>
                <p className="text-light-grey">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className="flex lg:max-2xl:gap-6 lg:max-2xl:py-2 xs:py-0 sm:py-0 md:py-3">
                  <button className="lg:max-2xl:w-12 xs:w-8 sm:w-9 md:w-10 xs:h-8 sm:h-9 md:h-10 rounded-full lg:max-2xl:h-12 bg-medium-grey bg-opacity-20 text-light-grey flex justify-center items-center outline-none hover:bg-orange hover:text-white focus:text-white focus:bg-light-grey" value="1" onClick={() => setValue("1")}>1</button> 
                  <button className="lg:max-2xl:w-12 xs:w-8 sm:w-9 md:w-10 xs:h-8 sm:h-9 md:h-10  rounded-full lg:max-2xl:h-12 bg-medium-grey bg-opacity-20 text-light-grey flex justify-center items-center outline-none hover:bg-orange hover:text-white focus:text-white focus:bg-light-grey" value="2" onClick={() => setValue("2")}>2</button> 
                  <button className="lg:max-2xl:w-12 xs:w-8 sm:w-9 md:w-10 xs:h-8 sm:h-9 md:h-10  rounded-full lg:max-2xl:h-12 bg-medium-grey bg-opacity-20 text-light-grey flex justify-center items-center outline-none hover:bg-orange hover:text-white focus:text-white focus:bg-light-grey" value="3" onClick={() => setValue("3")}>3</button> 
                  <button className="lg:max-2xl:w-12 rounded-full lg:max-2xl:h-12 xs:w-8 sm:w-9 md:w-10 xs:h-8 sm:h-9 md:h-10  bg-medium-grey bg-opacity-20 text-light-grey flex justify-center items-center outline-none hover:bg-orange hover:text-white focus:text-white focus:bg-light-grey" value="4" onClick={() => setValue("4")}>4</button> 
                  <button className="lg:max-xs:w-12 rounded-full lg:max-2xl:h-12 xs:w-8 sm:w-9 md:w-10 xs:h-8 sm:h-9 md:h-10  bg-medium-grey bg-opacity-20 text-light-grey flex justify-center items-center outline-none hover:bg-orange hover:text-white focus:text-white focus:bg-light-grey" value="5" onClick={() => setValue("5")}>5</button> 
                </div>
                <button className="lg:max-2xl:p-3 xs:p-1.5 sm:p-2 md:p-2 bg-orange rounded-3xl hover:bg-white text-white hover:text-orange" onClick={handleClick}>
                  SUBMIT
                </button>
              </>
            ) :
            (
              <>
              <img src={thankYou} alt="an illustration image" />
              <div className="py-1 px-4 rounded-2xl bg-medium-grey bg-opacity-20 text-orange">You selected 4 out of 5</div>
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
