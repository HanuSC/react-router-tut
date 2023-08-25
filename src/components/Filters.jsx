
const Filters = ({setActiveFilters, activeFilters}) => {

const handleClick = (e) => {
  const key =  e.target.innerText.toLowerCase();
  if (activeFilters.find(value => value === key)) {
    setActiveFilters([...activeFilters.filter(value => value !== key)])
  } else {
    setActiveFilters([...activeFilters, key])
  }
  
}

const clearFilters = () => setActiveFilters([]);
    
  return (
    <div className="flex justify-between mb-5 mx-5 md:justify-start md:gap-3 items-center">
        <button className={activeFilters.includes('simple') ? `bg-black text-white filter` : 'bg-[#FFEAD0] filter'} 
          onClick={handleClick}
        >Simple</button>
        <button className={activeFilters.includes('rugged') ? `bg-black text-white filter` : 'bg-[#FFEAD0] filter'}
        onClick={handleClick}>Rugged</button>
        <button className={activeFilters.includes('luxury') ? `bg-black text-white filter` : 'bg-[#FFEAD0] filter'}
        onClick={handleClick}>Luxury</button>
        <span className="hover:underline cursor-pointer"
        onClick={clearFilters}>Clear Filters</span>
    </div>
  )
}

export default Filters