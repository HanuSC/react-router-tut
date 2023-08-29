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
    <div className="flex justify-between mb-5 md:justify-start md:gap-3 items-center">
        <button className={`filter ${activeFilters.includes('simple') ? 'border-black border-solid border-2' : 'border-[#FFEAD0] border-solid border-2'}`} 
          onClick={handleClick}
        >Simple</button>
        <button className={`filter ${activeFilters.includes('rugged') ? 'border-black border-solid border-2' : 'border-[#FFEAD0] border-solid border-2'}`}
        onClick={handleClick}>Rugged</button>
        <button className={`filter ${activeFilters.includes('luxury') ? 'border-black border-solid border-2' : 'border-[#FFEAD0] border-solid border-2'}`}
        onClick={handleClick}>Luxury</button>
        <span className="hover:underline cursor-pointer"
        onClick={clearFilters}>Clear Filters</span>
    </div>
  )
}

export default Filters