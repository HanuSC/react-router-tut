import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-5 px-10 h-20 bg-orange-100 flex justify-between items-center'>
      <Link to={'/'}>{/* <h1 className='font-black text-3xl'>#VANLIFE</h1> */}
        <img src="src/assets/logog.png" alt="logo" className='w-1/3 lg:w-40'/>
      </Link>
      
      <nav className='flex justify-between flex-col'>
        <Link to={'/about'}><span className='text-slate-600 font-bold  hover:underline text-xl'>About</span></Link>
      </nav>
    </header>
  )
}

export default Header