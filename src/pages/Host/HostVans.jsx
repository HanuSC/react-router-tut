
import {  useOutletContext } from "react-router-dom"
import Loading from "../../components/Loading"
import { VanItem } from "../../components/HostVan"
const HostVans = () => {

  const hostVans = useOutletContext()

  return (
    <>
        { hostVans ? 
            <div className="flex flex-col p-6">
              {
                  hostVans.map(van => {
                    return <VanItem key={van.id} van={van}/>
                  })
              }
            </div>

            : <Loading />
      }
      
      
      </>
  )
}

export default HostVans