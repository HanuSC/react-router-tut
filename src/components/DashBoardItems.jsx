import { Link } from "react-router-dom"
import { Star } from './Icons'
import Loading from "./Loading"
import { VanItem } from './HostVan'
const IncomeSection = () => {
    return (
    <>
        <section id="income" className='flex flex-col gap-5'>
            <div className='flex justify-between text-gray-800'>
                <p className='text-sm'>Income last <span className='underline font-semibold'>30 days</span></p>
                <Link to="income"><p className='underline text-sm'>Details</p></Link>
            </div>
            <h1 className='text-4xl font-extrabold'>${2260}</h1>
        </section>
    </>
    )
}

const ReviewSection = () => {
    return (
    <>
        <section id='reviews' className='bg-[#fcd4a0] flex justify-between p-6'>
        <div className=' flex gap-6'>
        <h1 className='font-bold text-lg'>Review score</h1>
          <div className='flex'>
            <Star/><span><span className='font-bold'>5.5</span>/5</span>
          </div>
          
        </div>
        <div>
          <Link to="reviews"><p className='underline text-sm'>Details</p></Link>
        </div>

      </section>
    
    </>
    )
}

const OwnedVansSection = ({vans}) => {
    return (
    <>
        <section className='bg-[#FFEAD0] p-6'>
          <div id="income" className='flex flex-col gap-5'>
              <div className='flex justify-between text-black'>
                <h1 className='text-xl font-bold'>Your listed vans</h1>
                <Link to="vans"><p className='underline text-sm'>View all</p></Link>
              </div>
              <div className="vanlist lg:grid lg:grid-cols-3 gap-4">
                {vans.length ? vans.map(van => {
                  return <VanItem key={van.id} van={van} edit />
                })
                : <Loading />
            
            }
              </div>
          </div>
      </section>
    
    
    </>    
    )
}


export {
    IncomeSection, ReviewSection, OwnedVansSection
}