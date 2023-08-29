import { Link } from "react-router-dom"
import filters from '../utils/filters'

const VanList = ({vans}) => {
  return (
    <>
    <main className="grid grid-cols-2 gap-y-5 gap-x-4 py-4 md:grid-cols-3">
        { vans.map(van => (
          
          <section key={van.id} className="max-w-sm rounded shadow-lg bg-white hover:scale-105">
            <Link to={`/vans/${van.id}`}> 
          <img className="w-full object-cover h-2/3" src={van.img} alt={van.model} />
               <div className="flex flex-col justify-around p-3 h-1/3 lg:justify-between">
                  <p className="flex flex-col lg:flex-row lg:text-xl lg:justify-between lg:px-2"> 
                       <span className="font-bold">{van.model}</span> <span>${van.price}/day</span>
                   </p>
                   <span className={`${filters[van.category]} py-1 my-3 lg:my-0  text-center rounded text-white font-bold`}>{van.category}</span>
               </div>
               </Link>
           </section>    
        ))}
    </main>
    
    </>
  )
}

export default VanList