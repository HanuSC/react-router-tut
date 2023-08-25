import VanList from "../components/VanList"
import Filters from "../components/Filters"
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

  if (activeFilters === []) {
    setFilteredVans(vans)
    
  } else {
    setFilteredVans([...vans.filter(item => activeFilters.includes(item.category.toLowerCase()))])
  }

}, [activeFilters])
  return (
    <>
        <main className="mb-auto overflow-auto px-6  flex flex-col">

            <h1 className="text-3xl font-bold text-black m-10">
                Explore our van options
            </h1>


  
            <Filters activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>
            <div className="">
            <VanList vans={filteredVans} />
            </div>
            

        </main>
    </>
  )
}

export default Vans