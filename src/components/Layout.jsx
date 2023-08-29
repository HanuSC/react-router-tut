import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
const Layout = () => {
  
  return (
<>
    <div className='h-screen bg-[#FFF7ED] flex justify-center'>
        <div className="w-full min-w-md flex flex-col justify-between">

            <Header />

            <Outlet />

            <Footer />
        </div>
    </div>
</>
  )
}

export default Layout