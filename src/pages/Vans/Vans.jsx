import { Await, defer, useLoaderData, useSearchParams} from "react-router-dom"
import VanList from "../../components/VanList"
import filters from "../../utils/filters"
import { getVans } from "../../utils/api"
import { Suspense } from "react"
import Loading from "../../components/Loading"


export function loader () { 
    return defer({vans: getVans()})
}

const Vans = () => {
 
  const [searchParams, setSearchParams] = useSearchParams()
  const {vans} = useLoaderData()
  
  const vansfilter = searchParams.getAll('type')

  function renderVans (vans) {
    const displayedVans = vansfilter.length !== 0 
              ? vans.filter(van => vansfilter.includes(van.type.toLowerCase()) 
              ) : vans

      return <VanList vans={displayedVans} search={searchParams.toString()} />
  }
  
    function handleClick (name, value)  {
      
      setSearchParams(prevParams => {

      if (vansfilter.includes(value)) { 
        prevParams.delete(name) 
        vansfilter.forEach(v => {
          if (v !== value) {
            prevParams.append(name, v)
          }
        })
      } else { 
        prevParams.append(name, value)
      }
        return prevParams
      })


    }

  return (
    <>
      <main className="mb-auto overflow-auto px-6 h-full flex flex-col">

        <h1 className="text-3xl font-bold text-black my-5">
          Explore our van options
        </h1>
        <div className="flex mb-5 justify-start gap-3 items-center">

          {Object.keys(filters).map(type => {
            return <button 
                      key={type} 
                      className={`${vansfilter.includes(type.toLowerCase()) ? 'bg-orange-300' : '' } border rounded border-transparent px-2 hover:border-black`} 
                      onClick={() => handleClick('type', type.toLowerCase())}>{type}
                    </button>
          })}

          {
            vansfilter.length ? <button className="hover:underline" onClick={() => setSearchParams({})}>Clear All</button>
                              : null
          }

        </div>
       <Suspense fallback={<Loading />}>
         <Await resolve={vans}>
          {renderVans}
         </Await>
       </Suspense>

      </main>
    </>
  )
}

export default Vans