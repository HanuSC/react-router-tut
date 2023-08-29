
import { Link, useOutletContext } from "react-router-dom"
import Loading from "../../components/Loading"
const HostVans = () => {

  const [hostVans] = useOutletContext()

  return (
    <>
        { hostVans ? 
            <div className="flex flex-col p-6">
              {
                  hostVans.map(van => {
                    return ( /* TODO refactor this to a smaller component */
                      <Link key={van.id} to={`${van.id}`}>
                      <div className="bg-white p-2 m-1 flex my-3 hover:shadow-md transition-transform hover:scale-105">
                          <img src={van.img} alt={van.model} className="max-w-sm w-1/4 rounded" />
                          <div className="flex flex-col p-3 justify-center">
                            <h1 className="font-bold">{van.model}</h1>
                            <p><span className="font-semibold">${van.price}</span>/day</p>
                          </div>
                      </div>
                      </Link>
                    )
                  })



              }



            </div>




            : <Loading />
      
      }
      
      
      </>
  )
}

export default HostVans