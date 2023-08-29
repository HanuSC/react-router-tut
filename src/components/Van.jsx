import {Link} from 'react-router-dom'
import filters from '../utils/filters'


const Van = ({van}) => {
  return (
    <>
    <main className="overflow-auto h-full  bg-white p-5 flex gap-5 flex-col md:flex-row">
    <img src={van.img} alt={van.model} className="rounded-md"/>

    <section className="flex flex-col px-2 gap-4 justify-around">
      <Link className="text-gray-600 flex gap-1 hover:underline" to='/vans'>&larr; return to all vans</Link>
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-3xl md:text-6xl">{van.model}</h1>
        <span
          className={`${filters[van.category]} rounded-sm flex w-fit items-center py-1 text-lg font-semibold text-white px-2`}
        >{van.category}</span>
        <i className="text-xl">${van.price} / <span className="font-semibold">day</span></i>
      </div>
      <p className="text-gray-700 col-span-3 text-justify">
      {van.content}
    </p>

    <Link to='/vans' className='bg-orange-400 rounded p-5 font-bold w-full text-center text-xl transition duration-500 hover:scale-105 text-white md:w:fit self-end'>
        Rent this van
      </Link>
    </section>
    
    </main>

    </>
  )
}

export default Van