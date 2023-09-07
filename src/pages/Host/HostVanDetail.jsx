import { Await, Link, Outlet, defer, useLoaderData } from "react-router-dom"
import { getVan } from "../../utils/api"
import Loading from "../../components/Loading"
import { HostVanNav, HostVanHeader } from "../../components/HostVan"
import AuthRequired from "../../utils/authRequired"
import { Suspense } from "react"

export async function loader ({params, request}){
    AuthRequired(request)
    return defer({van: getVan(params.id)})
  }

  function renderVanDetails (hostVan) {

          return (
            <>

          <div className="flex flex-col md:flex-row px-5">
            <img src={hostVan.imageUrl} alt={hostVan.name} className="max-w-md rounded shadow-sm m-4 object-cover" />

            <div className="flex flex-col px-4 md:mt-5 w-full">

            <HostVanHeader hostVan={hostVan} />

            <HostVanNav links={[
                {text:'Details', to: '.', end: true},
                {text:'Pricing', to: 'pricing', end: false},
                {text:'Photos', to: 'photos', end: false},
            ]}/>

              <main className="mb-5">
                  <Outlet context={hostVan} />
              </main>

            </div>
            

        </div>
                
    </>)
  }

const HostVanDetail = () => {
 const {van} = useLoaderData()

  return (
    <>
    <Link to='..' className="text-[#2d2d2d] flex text-sm items-center px-10"><p className="hover:underline">&larr; Back to your vans</p></Link>
    
    <Suspense fallback={<Loading />}>
        <Await resolve={van}>
            {renderVanDetails}
        </Await>
    </Suspense>
    
    
    </>
  )
}

export default HostVanDetail