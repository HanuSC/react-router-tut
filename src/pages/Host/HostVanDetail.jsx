import { useParams, Link, Outlet, NavLink } from "react-router-dom"
import getData from "../../utils/getData"
import { useEffect, useState } from "react"
import { Edit } from "../../components/Icons"

import Loading from "../../components/Loading"
import { HostVanHeader, HostVanNav } from "../../components/HostVan"
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
                <HostVanHeader hostVan={hostVan} />
            <div className="flex flex-col">

            <HostVanNav links={[
                    {text:'Details', to: '.', end: true},
                    {text:'Pricing', to: 'pricing', end: false},
                    {text:'Photos', to: 'photos', end: false},
                ]}/>

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