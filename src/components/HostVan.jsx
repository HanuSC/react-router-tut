import { useOutletContext, Link, NavLink } from "react-router-dom"
import filters from "../utils/filters"
import { Edit } from "./Icons"
const Details = () => {
    const [hostVan] = useOutletContext()
    return (
        <>
            <div className="flex flex-col gap-3 text-sm text-justify">
                <p><span className="font-bold">Name: </span>{hostVan.model}</p>
                <p><span className="font-bold">Category: </span>{hostVan.category}</p>
                <p><span className="font-bold">Description: </span>{hostVan.content}</p>
                <p><span className="font-bold">Visibility: </span>Public</p>
            </div>
        </>
    )
}

const Photos = () => {
    const [hostVan] = useOutletContext()
    return (
        <>
            <div className="flex">
                <img src={hostVan.img} alt={hostVan.model} className="w-1/3 object-contain px-2 transition-transform hover:scale-95"/>
                <img src={hostVan.img} alt={hostVan.model} className="w-1/3 object-contain px-2 transition-transform hover:scale-95"/>
                <img src={hostVan.img} alt={hostVan.model} className="w-1/3 px-2 transition-transform hover:scale-95"/>
            </div>
        </>
    )
}

const Pricing = () => {
    const [hostVan] = useOutletContext()
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
    <section key={van.id} className="bg-white p-2 m-1 flex my-3 hover:shadow-md transition-transform hover:scale-105 items-center">
        <Link  to={`vans/${van.id}`}>
                <div className="flex">
                    <img src={van.img} alt={van.model} className="max-w-sm w-1/4 rounded" />
                    <div className="flex flex-col p-3 justify-center">
                        <h1 className="font-bold">{van.model}</h1>
                        <p><span className="font-semibold">${van.price}</span>/day</p>
                    </div>
                </div>       
        </Link>
        {edit && <Link  to={`vans/${van.id}/edit`}><p className='hover:underline text-md font-bold px-4'>Edit</p></Link>}
    </section>

                

    </>
    )
}

const HostVanHeader = ({hostVan}) => {
    return (
    <>
        <header id="hostVanHeader" className="flex lg:w-1/2"> 
                <img src={hostVan.img} alt={hostVan.model} className="w-1/3 rounded shadow-sm" />
                <div id="host-van-card-info" className="flex flex-col justify-around px-3">
                    <span className={`${filters[hostVan.category]} text-white px-2 py-1 rounded w-fit`}>{hostVan.category}</span>
                    <h1 className="text-xl font-bold">{hostVan.model}</h1>
                    <p><span className="font-bold">${hostVan.price}</span>/day</p>
                </div>
            </header>    
    </>

    )
}

const HostVanNav = ({links}) => {
    return (
        <>
        <nav id="navVanHeader" className=" my-5 lg:my-0 flex justify-between  items-center py-1"> 
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