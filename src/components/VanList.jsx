import { Link } from "react-router-dom"
import filters from '../utils/filters'

const VanList = ({vans, search}) => {
  return (
    <>
    <main className="grid grid-cols-2  md:grid-cols-3 mb-5">
        { vans.map(van => {
          
          const tipo = van.type.slice(0, 1).toUpperCase() + van.type.slice(1)
          
          
          return (
          
          <section key={van.id} className="rounded shadow-lg bg-white hover:scale-105 m-4">
            <Link to={`${van.id}`} state={{ search }}> 
          <img className="w-full object-cover" src={van.imageUrl} alt={van.name} />
               <div className="flex flex-col justify-between h-fit">
                  <p className="flex flex-col justify-between my-3 mx-2"> 
                       <span className="font-bold">{van.name}</span> <span className="font-bold">${van.price}/day</span>
                   </p>
                   <span className={`${filters[tipo]} text-center rounded text-white font-bold py-2 item-end`}>{tipo}</span>
               </div>
               </Link>
           </section>    




        )})}
    </main>
    
    </>
  )
}

export default VanList