import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './Header'
import Footer from './Footer'
import Vans from './pages/Vans'
const App = () => {
  return (
    <>
    <div className='h-screen bg-[#FFF7ED] flex justify-center'>

    <div className="w-full min-w-md flex flex-col justify-between">
     
     <Header />

     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/vans' element={<Vans />}/>
     </Routes>

     <Footer />
   </div>

    </div>
    

      
    </>
    
  )
}

export default App