import { Link } from 'react-router-dom'
import about_img from '../assets/image 54.png'
const About = () => {
  return (
    <>
    <main className="w-full">
        <img id="sub-header" src={about_img} alt="man sitting on van roof looking to the sky" className="w-full"/>
          <div id="info" className="w-full bg-white   py-10 px-8 flex flex-col text-justify gap-y-10">

          <h1 className="font-extrabold text-3xl text-gray-700">Don’t squeeze in a sedan when you could relax in a van.</h1>

          <p className='text-xl text-gray-800'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉) <br /><br />

            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

          <div className="bg-orange-200 w-full rounded-sm p-5 text-gray-900 flex flex-col lg:mx-auto">
            <h1 className="font-black text-xl lg:text-4xl">Your destination is waiting. <br />
              Your van is ready.</h1>
            <Link to='/vans' className="bg-black rounded-md p-5 mt-6 text-white transform font-bold w-fit text-center transition duration-500 hover:scale-105">Explore our vans</Link>
           
          </div>

      </div>
      

    </main>
    </>
    
  )
}

export default About