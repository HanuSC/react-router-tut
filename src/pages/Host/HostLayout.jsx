import { Outlet, NavLink, useLoaderData, Await, defer } from "react-router-dom"
import { getHostVans } from "../../utils/api";
import AuthRequired from "../../utils/authRequired";
import { Suspense } from "react";
import Loading from "../../components/Loading";

export async function loader({ request }) {
  AuthRequired(request)

  return defer({ hostVans: getHostVans() })

}
const HostLayout = () => {
  const { hostVans } = useLoaderData()

  return (
    <>
      <div className="overflow-auto flex flex-col h-full">
        <header className='px-10 py-4 flex justify-between items-center text-[#4D4D4D]'>
          <nav className='flex justify-start gap-10 w-fit'>
            <NavLink to='.' end className={({ isActive }) => isActive ? 'underline text-black' : ''}><span className='font-bold hover:underline'>Dashboard</span></NavLink>

            <NavLink to='income' className={({ isActive }) => isActive ? 'underline text-black' : ''}><span className='font-bold  hover:underline'>Income</span></NavLink>

            <NavLink to='reviews' className={({ isActive }) => isActive ? 'underline text-black' : ''}><span className='font-bold  hover:underline'>Reviews</span></NavLink>

            <NavLink to='vans' className={({ isActive }) => isActive ? 'underline text-black' : ''}><span className='font-bold  hover:underline'>My Vans</span></NavLink>
          </nav>
        </header>

        <Suspense fallback={<Loading />}>
          <Await resolve={hostVans}>
            {vans => <Outlet context={vans} />}
          </Await>
        </Suspense>

      </div>

    </>
  )
}

export default HostLayout