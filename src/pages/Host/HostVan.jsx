import { useOutletContext } from "react-router-dom"

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

export {
    Details, Photos, Pricing
}