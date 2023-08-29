/* Dashboard*/
import { Link, useOutletContext } from 'react-router-dom'
import { Star } from '../../components/Icons'

const Dashboard = () => {
  const [hostVans] = useOutletContext()
  return (
    <>
      <div className='bg-[#FFEAD0] p-6'>
          <h1 className="text-2xl font-bold mb-3">Welcome!</h1>
          {/* Income resume */}
          <div id="income" className='flex flex-col gap-5'>
              <div className='flex justify-between text-gray-800'>
                <p className='text-sm'>Income last <span className='underline font-semibold'>30 days</span></p>
                <Link to="income"><p className='underline text-sm'>Details</p></Link>
              </div>
              <h1 className='text-4xl font-extrabold'>${2260}</h1>
          </div>
      </div>
      {/* Reviews resume */}
      <div id='reviews' className='bg-[#fcd4a0] flex justify-between p-6'>
        <div className=' flex gap-6'>
        <h1 className='font-bold text-lg'>Review score</h1>
          <div className='flex'>
            <Star/><span><span className='font-bold'>5.5</span>/5</span>
          </div>
          
        </div>
        <div>
          <Link to="reviews"><p className='underline text-sm'>Details</p></Link>
        </div>


     
      </div>
       {/* owned Vans */}
       <div className='bg-[#FFEAD0] p-6'>
          <div id="income" className='flex flex-col gap-5'>
              <div className='flex justify-between text-black'>
                <h1 className='text-xl font-bold'>Your listed vans</h1>
                <Link to="vans"><p className='underline text-sm'>View all</p></Link>
              </div>
              <div className="vanlist lg:grid lg:grid-cols-3 gap-4">
                {hostVans.length && hostVans.map(van => {
                  return (<>
              
                      <Link to={`vans/${van.id}`}>
                        <div className='flex p-4 bg-white w-full items-center rounded justify-between hover:scale-105 hover:shadow-md transition-transform my-5 md:my-0'>
                          <div className='flex items-center '>

                            <img className="w-1/5 rounded" src={van.img} alt={van.model} />
                            <div className="">
                              <p className="text-md font-bold flex flex-col px-4">
                                <span className="">{van.model}</span> <span>${van.price}/day</span>
                              </p>
                            </div>

                          </div>
                         
                          <Link to="income"><p className='hover:underline text-md font-bold px-4'>Edit</p></Link>

                        </div>
                        
                      </Link>
                  </>)
                })}
              </div>
          </div>
      </div>
    
    </>
    
  )
}

export default Dashboard
