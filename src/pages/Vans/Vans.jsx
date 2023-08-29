import VanList from "../../components/VanList"
import Filters from "../../components/Filters"
import { useEffect, useState } from "react"

const Vans = () => {
  const [vans, setVans] = useState([])
  const [activeFilters, setActiveFilters] = useState([])
  const [filteredVans, setFilteredVans] = useState([])


 useEffect(
  () => {
    const fetchVans = async () => {
      const response = await fetch('/api/vans')
      const result = await response.json()
      setVans(result.vans)
      setFilteredVans(result.vans)

    }
    fetchVans()
    
  }
, [])

useEffect(() => {

  if (activeFilters.length === 0) {
    setFilteredVans(vans)
    
  } else {
    setFilteredVans([...vans.filter(item => activeFilters.includes(item.category.toLowerCase()))])
  }

}, [activeFilters])
  return (
    <>
        <main className="mb-auto overflow-auto px-6 h-full flex flex-col">

            <h1 className="text-3xl font-bold text-black my-5">
                Explore our van options
            </h1>
  
            <Filters activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>
      
            <VanList vans={filteredVans} />

            

        </main>
    </>
  )
}

export default Vans