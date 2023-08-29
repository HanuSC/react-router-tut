import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
/* Public */
import Home from './pages/Vans/Home'
import About from './pages/Vans/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'

/* Host */
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans from './pages/Host/HostVans'
import HostLayout from './pages/Host/HostLayout'
import HostVanDetail from './pages/Host/HostVanDetail'
import { Details, Photos, Pricing } from './pages/Host/HostVan'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />

          {/* Protected */}

          <Route path='/host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans'>
              <Route index element={<HostVans/>}/>
              <Route path=':id' element={<HostVanDetail />}>
                <Route index element={<Details />}/>
                <Route path='pricing' element={<Pricing />}/>
                <Route path='photos' element={<Photos />}/>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App