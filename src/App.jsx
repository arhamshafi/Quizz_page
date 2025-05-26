import React from 'react'
import { quizData } from "./Data";
function App() {

  console.log(quizData);
  

  return (
    <div className='py-1'>
      <h1 className='text-2xl  mt-6 cursor-context-menu text-center font-bold tracking-[1px]'>Quizz App With Pagination</h1>
      <div className='w-[700px] h-max px-3 py-3 bg-red-500 mx-auto mt-12 rounded-lg'>
           {
            quizData.map(( ele , idx )=>{
             
              let allanswers = [ ...ele.incorrect , ele.correct]

              return(
                  <div key={idx}>
                     <p className='text-white font-bold text-xl mt-8 '> Q : {ele.question} </p>
           
            <div className='w-max mt-6 '>
            <input type="radio" id=' ' />
            <label htmlFor=" " className='ml-2 cursor-pointer text-white font-bold'></label>
            </div>

                  </div>
              )
            })
           }
      </div>
    </div>
  )
}

export default App