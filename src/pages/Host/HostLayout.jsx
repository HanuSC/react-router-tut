import { Outlet, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
const HostLayout = () => {
  const [hostVans, setHostVans] = useState([])

      useEffect(
    () => {
      const fetchVans = async () => {
        const response = await fetch('/api/host/vans')
        const result = await response.json()
        setHostVans(result.vans)
      }
      fetchVans()
      
    }
  , [])
  return (
    <>
      <div className="overflow-auto flex flex-col h-full">
        <header className='px-10 py-4 flex justify-between items-center text-[#4D4D4D]'>
          <nav className='flex justify-start gap-10 w-fit'>
            <NavLink to='.' end className={({isActive}) => isActive? 'underline text-black' : ''}><span className='font-bold hover:underline'>Dashboard</span></NavLink>


            <NavLink to='income' className={({isActive}) => isActive? 'underline text-black' : ''}><span className='font-bold  hover:underline'>Income</span></NavLink>


            <NavLink to='reviews' className={({isActive}) => isActive? 'underline text-black' : ''}><span className='font-bold  hover:underline'>Reviews</span></NavLink>


            <NavLink to='vans' className={({isActive}) => isActive? 'underline text-black' : ''}><span className='font-bold  hover:underline'>My Vans</span></NavLink>
          </nav>
        </header>
        
        <Outlet context={[hostVans, setHostVans]}/>
      </div>
    
    </>
  )
}

export default HostLayout