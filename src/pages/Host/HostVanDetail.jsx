import { useParams, Link, Outlet, NavLink } from "react-router-dom"
import getData from "../../utils/getData"
import { useEffect, useState } from "react"
import { Edit } from "../../components/Icons"

import filters from "../../utils/filters"
import Loading from "../../components/Loading"
const HostVanDetail = () => {
    const {id} = useParams()
    const [hostVan, setHostVan] = useState(null)
    useEffect(() => {
      (async () => {
        try {

            const {van} = await getData(`/api/host/vans/${id}`)
            setHostVan(van)
            
        } catch (error) {
            console.error(error);
        }
        
        
      })()
    }, [])
    

  return (
    <>
    <Link to='..' className="text-[#2d2d2d] flex text-sm items-center px-3 lg:px-10"><p className="hover:underline">&larr; Back to all vans</p></Link>
    {
        hostVan ? 

        <div className="bg-white rounded lg:p-10 m-5 shadow-sm p-6 flex flex-col lg:flex-row">
            <div id="hostVanHeader" className="flex lg:w-1/2"> {/* TODO refactor this to a header component */}
                <img src={hostVan.img} alt={hostVan.model} className="w-1/3 rounded shadow-sm" />
                <div id="host-van-card-info" className="flex flex-col justify-around px-3">
                    <span className={`${filters[hostVan.category]} text-white px-2 py-1 rounded w-fit`}>{hostVan.category}</span>
                    <h1 className="text-xl font-bold">{hostVan.model}</h1>
                    <p><span className="font-bold">${hostVan.price}</span>/day</p>
                </div>
            </div>
            <div className="flex flex-col">

            <nav id="navVanHeader" className=" my-5 lg:my-0 flex justify-between  items-center py-1"> {/* TODO refactor this to a nav component */}
                <div className="flex gap-6 w-3/4 ">
                    <NavLink to='.' end className={({isActive}) => isActive ? 'underline font-bold' : '' }> <span className="hover:underline">Details</span></NavLink>
                    <NavLink to='pricing' className={({isActive}) => isActive ? 'underline font-bold' : '' }> <span className="hover:underline">Pricing</span></NavLink>
                    <NavLink to='photos' className={({isActive}) => isActive ? 'underline font-bold' : '' }> <span className="hover:underline">Photos</span></NavLink>
                </div>
                <Link><Edit /></Link>
            </nav>

            <main className="px-2">
                <Outlet context={[hostVan, setHostVan]} />
            </main>

            </div>
            
            
        </div>
        
        
        
        
        
        
        
        : <Loading />
    }
    
    
    </>
  )
}

export default HostVanDetail