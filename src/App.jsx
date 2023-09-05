import { 
  RouterProvider, 
  createRoutesFromElements, 
  createBrowserRouter, 
  Route,
  Outlet
} from 'react-router-dom'

import Layout from './components/Layout'
/* Public */
import Home from './pages/Vans/Home'
import About from './pages/Vans/About'
import Vans, { loader as VansLoader} from './pages/Vans/Vans'
import VanDetail, { loader as VanLoader } from './pages/Vans/VanDetail'
import Error404 from './pages/Error404'

/* Host */
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans from './pages/Host/HostVans'
import HostLayout, { loader as HostLoader} from './pages/Host/HostLayout'
import HostVanDetail, { loader as VanDetailLoader} from './pages/Host/HostVanDetail'
import { Details, Photos, Pricing } from './components/HostVan'
import Error from './components/Error'
import Login, {loader as LoginLoader, action as LoginAction} from './pages/Vans/Login'
import AuthRequired from './utils/authRequired'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}  >
    <Route errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />} loader={LoginLoader} action={LoginAction}/>
    <Route path='vans' element={<Outlet />}>
      <Route index element={<Vans />} loader={VansLoader} />
      <Route path=':id' element={<VanDetail  />} loader={VanLoader} />
    </Route>


    <Route path='/host' element={<HostLayout/>} 
      loader={HostLoader}
      >
      <Route index element={<Dashboard />} loader={async ({request}) => AuthRequired(request)}/>
      <Route path='income' element={<Income />} loader={async ({request}) => AuthRequired(request)}/>
      <Route path='reviews' element={<Reviews />} loader={async ({request}) => AuthRequired(request)}/>
      <Route path='vans' loader={async ({request}) => AuthRequired(request)}>
        <Route index element={<HostVans/>}/>
        <Route path=':id' element={<HostVanDetail  />} loader={VanDetailLoader}>
          <Route index element={<Details />} loader={async ({request}) => AuthRequired(request)}/>
          <Route path='pricing' element={<Pricing />} loader={async ({request}) => AuthRequired(request)}/>
          <Route path='photos' element={<Photos />} loader={async ({request}) => AuthRequired(request)}/>
        </Route>
      </Route>
    </Route>
    <Route path='*' element={<Error404 />} />
    </Route>
    </Route>
))

const App = () => {
  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}

export default App