import bg from '../../assets/image_53.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <main 
      style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat:'no-repeat'}}
      className="mb-auto h-full text-white font-bolder text-justify p-10 flex flex-col justify-around gap-1">
        <h1 className='font-extrabold text-3xl lg:text-5xl'>You got the travel plans, we got the travel vans.</h1>
      
        <div className='flex flex-col'>
          <p>Add adventure to your life by joining the #vanlife movement.</p>
          <p>Rent the perfect van to make your perfect road trip.</p>
        </div>
        
        <Link to='vans' className='bg-[#FF8C38] rounded p-4 font-bold lg:w-1/3 w-full text-center text-xl transition duration-500 hover:scale-105'>
          Find your van
        </Link>
      </main>
    
    </>
    
  )
}

export default Home