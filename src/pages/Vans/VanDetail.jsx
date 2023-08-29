import { useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import getData from "../../utils/getData"
import Van from "../../components/Van"


const VanDetail = () => {
  const { id } = useParams()
  const [van, setVan] = useState(null)
  
  useEffect(() => {
    const fetching = async () => {
      const vanTest = await getData(`/api/vans/${id}`, true)
      setVan(vanTest)
      
    }

    fetching()

  }, [])

  return (
   <>
   { van ?
    <Van van={van} />
    : <h1 className="text-5xl text-center font-extrabold">Loading...</h1>
}
   </>
  )
}

export default VanDetail