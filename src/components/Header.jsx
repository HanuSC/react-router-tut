import { NavLink } from 'react-router-dom'
import logo from '../assets/logog.png'
import Profile from './Icons'
const Header = () => {
  return (
    <header className='py-5 px-10 h-20 bg-[#FFF7ED] flex justify-between items-center text-[#4D4D4D]'>
      <NavLink to='.'>
        <img src={logo} alt="logo" className='w-1/2 lg:w-40'/>
      </NavLink>
      
      <nav className='flex justify-end gap-10 w-1/2 '>
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
        onClick={() => localStorage.clear()}>
          X
        </button>
      </nav>
    </header>
  )
}

export default Header