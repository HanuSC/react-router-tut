import { Link } from 'react-router-dom'
import logo from './assets/logog.png'
const Header = () => {
  return (
    <header className='py-5 px-10 h-20 bg-orange-100 flex justify-between items-center'>
      <Link to='/'>
        <img src={logo} alt="logo" className='w-1/2 lg:w-40'/>
      </Link>
      
      <nav className='flex  justify-end gap-10 w-1/2 '>
        <Link to='/about'><span className='text-slate-600 font-bold  hover:underline text-xl'>About</span></Link>
        <Link to='/vans'><span className='text-slate-600 font-bold  hover:underline text-xl'>Vans</span></Link>
      </nav>
    </header>
  )
}

export default Header