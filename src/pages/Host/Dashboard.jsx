/* Dashboard*/
import { useOutletContext } from 'react-router-dom'

import { IncomeSection, OwnedVansSection, ReviewSection } from '../../components/DashBoardItems'
const Dashboard = () => {
  const hostVans = useOutletContext()
  
  return (
    <>
      <section className='bg-[#FFEAD0] p-6'>
          <h1 className="text-2xl font-bold mb-3">Welcome!</h1>

          <IncomeSection />
      </section>

      <ReviewSection />

      <OwnedVansSection vans={hostVans} />
    
    </>
    
  )
}

export default Dashboard
