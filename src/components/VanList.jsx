import { Link } from "react-router-dom"
import filters from '../utils/filters'

const VanList = ({vans, search}) => {
  return (
    <>
    <main className="grid grid-cols-2  md:grid-cols-3 mb-5">
        { vans.map(van => {
          
          const tipo = van.type.slice(0, 1).toUpperCase() + van.type.slice(1)
          
          
          return (
          
          <section key={van.id} className="rounded shadow-lg bg-white hover:scale-105 m-5"> {/* TODO refactor this */}
            <Link to={`${van.id}`} state={{ search }}> 
          <img className="w-full object-cover h-2/3" src={van.imageUrl} alt={van.name} />
               <div className="flex flex-col justify-between h-1/3 p-5">
                  <p className="flex justify-between"> 
                       <span className="font-bold">{van.name}</span> <span className="font-bold text-lg">${van.price}/day</span>
                   </p>
                   <span className={`${filters[tipo]} text-center rounded text-white font-bold py-3`}>{tipo}</span>
               </div>
               </Link>
           </section>    




        )})}
    </main>
    
    </>
  )
}

export default VanList