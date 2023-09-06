import { NavLink } from 'react-router-dom'
import logo from '../assets/logog.png'
import Profile from './Icons'
const Header = () => {
  return (
    <header className='py-3 bg-[#FFF7ED] md:flex-row justify-between items-center text-[#4D4D4D] flex flex-col md:px-10 md:pb-2'>
      <NavLink to='.'>
        <h1 className='text-3xl font-black text-black pb-2'>#VANLIFE</h1>
      </NavLink>
      
      <nav className='flex justify-center gap-10 w-1/2 md:justify-end'>
        <NavLink to='/about' className={({isActive}) => isActive? 'underline text-black' : ''}>
          <span className=' font-bold  hover:underline text-xl'>About</span>
        </NavLink>

        <NavLink to='/vans' className={({isActive}) => isActive? 'underline text-black' : ''}>
          <span className=' font-bold  hover:underline text-xl'>Vans</span>
        </NavLink>

        <NavLink to='/host' className={({isActive}) => isActive? 'underline text-black' : ''}>
          <span className=' font-bold  hover:underline text-xl'>Host</span>
        </NavLink>

        <NavLink to='/login' className={({isActive}) => isActive? 'underline text-black' : ''}>
          <Profile />
        </NavLink>

        <button className='border border-black px-2 py-0' 
        onClick={() =>{ 
          localStorage.clear()
          window.location.reload()
          }}>
          X
        </button>
      </nav>
    </header>
  )
}

export default Header