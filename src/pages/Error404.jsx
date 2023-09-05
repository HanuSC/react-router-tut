import { Link } from "react-router-dom"
const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10">

      <h1 className="text-4xl font-semibold text-left">Sorry, the page you were looking for was not found.</h1>

      <Link to='/' className="bg-black rounded-md m-6 text-white transform font-bold w-full text-center transition duration-500 py-5 hover:scale-105 text-xl">Return to home</Link>

    </div>
  )
}

export default Error404