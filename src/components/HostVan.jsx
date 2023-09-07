import { useOutletContext, Link, NavLink } from "react-router-dom"
import filters from "../utils/filters"
import { Edit } from "./Icons"



const Details = () => {
    const hostVan = useOutletContext()
    return (
        <>
            <div className="flex flex-col gap-3 text-sm text-justify">
                <p><span className="font-bold">Name: </span>{hostVan.name}</p>
                <p><span className="font-bold">type: </span>{hostVan.type}</p>
                <p><span className="font-bold">Description: </span>{hostVan.description}</p>
                <p><span className="font-bold">Visibility: </span>Public</p>
            </div>
        </>
    )
}

const Photos = () => {
    const hostVan = useOutletContext()
    return (
        <>
            <div className="flex">
                <img src={hostVan.imageUrl} alt={hostVan.name} className="w-1/3 object-contain px-2 transition-transform hover:scale-95"/>
                <img src={hostVan.imageUrl} alt={hostVan.name} className="w-1/3 object-contain px-2 transition-transform hover:scale-95"/>
                <img src={hostVan.imageUrl} alt={hostVan.name} className="w-1/3 px-2 transition-transform hover:scale-95"/>
            </div>
        </>
    )
}

const Pricing = () => {
    const hostVan = useOutletContext()
    return (
        <>
            <div className="text-xl">
                <p className="text-gray-700"><span className="text-3xl text-black">${hostVan.price}</span>/day</p>
            </div>
        </>
    )
}

const VanItem = ({van, edit}) => {
    return (
    <>
    <section key={van.id} className="bg-white p-2 m-1 flex md:flex-col my-3 hover:shadow-md transition-transform hover:scale-105 items-center">
        <Link  to={`/host/vans/${van.id}`}>
                <div className="flex">
                    <img src={van.imageUrl} alt={van.name} className="max-w-sm w-1/4 rounded" />
                    <div className="flex flex-col p-3 justify-center">
                        <h1 className="font-bold">{van.name}</h1>
                        <p><span className="font-semibold">${van.price}</span>/day</p>
                    </div>
                </div>       
        </Link>
    </section>

                

    </>
    )
}

const HostVanHeader = ({hostVan}) => {
    return (
    <>
        <header  className="flex w-full justify-between items-center"> 
                    <span className={`${filters[hostVan.type]} text-white rounded h-fit px-2`}>{hostVan.type}</span>
                    <h1 className="text-xl font-bold">{hostVan.name}</h1>
                    <p className="mt-2"><span className="font-bold ">${hostVan.price}</span>/day</p>

        </header>    
    </>

    )
}

const HostVanNav = ({links}) => {
    return (
        <>
        <nav id="navVanHeader" className="flex justify-between items-center my-5"> 
                <div className="flex gap-6 w-3/4 ">
                    {links.map(link => {
                        return <NavLink key={link.text} to={link.to} end={link.end} className={({isActive}) => isActive ? 'underline font-bold' : '' }> <span className="hover:underline">{link.text}</span></NavLink>
                    })}
                </div>
                <Link><Edit /></Link>
        </nav>
        </>
    )
}

export {
    Details, 
    Photos, 
    Pricing, 
    VanItem, 
    HostVanHeader, 
    HostVanNav
}