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
            <div className="bg-white rounded lg:p-10 m-5 shadow-sm p-6 flex flex-col lg:flex-row">
            <HostVanHeader hostVan={hostVan} />
            <div className="flex flex-col">

        <HostVanNav links={[
                {text:'Details', to: '.', end: true},
                {text:'Pricing', to: 'pricing', end: false},
                {text:'Photos', to: 'photos', end: false},
            ]}/>
    
        <main className="px-2">
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
    <Link to='..' className="text-[#2d2d2d] flex text-sm items-center px-3 lg:px-10"><p className="hover:underline">&larr; Back to your vans</p></Link>
    
    <Suspense fallback={<Loading />}>
        <Await resolve={van}>
            {renderVanDetails}
        </Await>
    </Suspense>
    
    
    </>
  )
}

export default HostVanDetail