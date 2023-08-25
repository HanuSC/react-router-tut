import { useParams } from "react-router-dom"

const Van = () => {
  const id = useParams()
  return (
    <div>{id}</div>
  )
}

export default Van