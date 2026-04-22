import drawers from '/images/drawers.jpg'
import './App.css'
import 'tailwindcss'
import CardFooter from './CardFooter'


function App() {

  return (
    <>
      <div className = "bg-white rounded-xl text-start w-75 h-auto md:flex md:h-65 md:w-150 shadow-lg overflow-visible relative">
        <img src={drawers} alt="drawers" className= "rounded-t-xl w-full md:h-full md:w-2/5 md:rounded-s-xl md:rounded-e-none"/>
        <div>
        <div className = "px-5 pt-3 ">
          <h2 className="font-semibold mb-3 mt-4">
            Shift the overall look and feel by adding these wonderful 
            touches to furniture in your home
          </h2>
          <p className=" text-sm mb-3 text-grayish-blue">
            Ever been in a room and felt like something was missing? Perhaps 
            it felt slightly bare and uninviting. I’ve got some simple tips 
            to help you make any room feel complete.
          </p>
        </div>
          <CardFooter />  
        </div> 
      </div>  
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App
