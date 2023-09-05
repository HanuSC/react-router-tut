import { Navigate, useRouteError } from "react-router-dom"
const Error = () => {
    const error = useRouteError()
    
  return (
    <div className="flex flex-col justify-center mx-5">
        <h1 className="bg-red-300 p-5 rounded text-2xl font-semibold text-white text-center ">{error.message}</h1>
        <pre className="text-center pt-4 text-red-500">{error.status}: {error.statusText}</pre>
    </div>
    
  )
}

export default Error