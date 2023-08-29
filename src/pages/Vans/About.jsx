import { Link } from 'react-router-dom'
import about_img from '../../assets/image 54.png'
const About = () => {
  return (
    <>
    <main className="w-full h-full bg-white lg:flex text-gray-600 overflow-auto">
        <img id="sub-header" src={about_img} alt="man sitting on van roof looking to the sky" className="lg:object-cover lg:w-1/2"/>
          <div id="info" className="flex flex-col text-justify justify-around items-center  p-5 overflow-auto">

            <h1 className="font-bold text-4xl my-3">Don’t squeeze in a sedan when you could relax in a van.</h1>

            <p className='text-md my-5'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
              (Hitch costs extra 😉) <br /><br />

              Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

            <div className="bg-orange-200 w-full rounded-sm text-gray-900 flex flex-col p-4">
              <h1 className="font-bold text-xl lg:text-3xl">Your destination is waiting. <br />
                Your van is ready.</h1>
              <Link to='/vans' className="bg-black rounded-md p-5 mt-6 text-white transform font-bold w-fit text-center transition duration-500 hover:scale-105">Explore our vans</Link>
           
          </div>

      </div>
      

    </main>
    </>
    
  )
}

export default About