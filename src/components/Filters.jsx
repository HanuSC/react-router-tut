
const Filters = () => {
    
  return (
    <div className="flex justify-between mb-5 mx-5 md:justify-start md:gap-x-7 items-center">
        <button className="filter">Simple</button>
        <button className="filter">Rugged</button>
        <button className="filter">Luxury</button>
        <span className="hover:underline cursor-pointer">Clear Filters</span>
    </div>
  )
}

export default Filters