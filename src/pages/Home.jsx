import bg from '../assets/image_53.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <main 
      style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat:'no-repeat'}}
      className="mb-auto h-full text-white font-bolder text-justify p-10 flex flex-col justify-around gap-1">
      <h1 className='font-extrabold text-4xl'>You got the travel plans, we got the travel vans.</h1>
    
      <p className='lg:text-3xl text-slate-100 font-semibold'>
        Add adventure to your life by joining the #vanlife movement. <br /> <br />
        Rent the perfect van to make your perfect road trip.
      </p>

      <Link to='vans' className='bg-orange-400 rounded p-5 font-bold w-fit text-center text-xl transition duration-500 hover:scale-105'>
        Find your van
      </Link>


      </main>
    
    </>
    
  )
}

export default Home