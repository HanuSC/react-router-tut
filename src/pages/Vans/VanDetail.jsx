import { useLoaderData, Link, useLocation, defer, Await} from "react-router-dom"
import{ getVan } from "../../utils/api"
import filters from '../../utils/filters'
import { Suspense } from "react"
import Loading from "../../components/Loading"

export function loader ({params}){
  return defer({van: getVan(params.id)})
}

const VanDetail = () => {
  const {van} = useLoaderData()
  const { state } = useLocation()
  const search = state?.search || ''
  const place = search === '' || search.split('=').length > 2
                  ? 'all'
                  : search.split('=')[1]
        
                  
  function renderVan (van) {
    return (
      <main className="overflow-auto h-fit  bg-white p-7 flex flex-col md:flex-row">
    <img src={van.imageUrl} alt={van.name} className="rounded-md"/>

    <section className="flex flex-col px-5 justify-around">
      <Link className="text-gray-600 flex hover:underline" to={`..?${search}`}>&larr; return to {place} vans</Link>
      <div className="flex flex-col">
        <h1 className="font-semibold text-3xl md:text-6xl">{van.name}</h1>
        <span
          className={`${filters[van.type]} rounded-sm flex w-fit items-center py-1 text-lg font-semibold text-white px-2`}
        >{van.type}</span>
        <i className="text-xl">${van.price} / <span className="font-semibold">day</span></i>
      </div>
      <p className="text-gray-700 col-span-3 text-justify">
      {van.description}
    </p>

    <Link to='..' className='bg-orange-400 rounded p-5 font-bold w-full text-center text-xl transition duration-500 hover:scale-105 text-white md:w:fit self-end'>
        Rent this van
      </Link>
    </section>
    
    </main>
    )
  }

  return (
   <>
      <Suspense fallback={<Loading />}>
        <Await resolve={van}>
          {renderVan}
        </Await>
      </Suspense>
   </>
  )
}

export default VanDetail