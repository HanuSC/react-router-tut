import { Link, useLoaderData, Form, useNavigate, useActionData, redirect, useNavigation } from "react-router-dom"
import { loginUser } from "../../utils/api"

export function loader ({request}) {
 return new URL(request.url).searchParams.get('message')
}

export async function action ({ request }) {
  const previousLocation = new URL(request.url).searchParams.get('from') || '/host'
  console.log(previousLocation)
  const formData = await request.formData()
  const creds = {
                 email: formData.get('email'), 
                 password: formData.get('password')
                }
try {
  const userData = await loginUser(creds)
  localStorage.setItem('isLogged', 'true')
  return redirect(previousLocation)

} catch (error) {
    return error.message
}

}

const Login = () => {
  const message = useLoaderData()
  const { state } = useNavigation()
  const error = useActionData()

  return (

    <div className="flex flex-col p-7 h-full justify-center items-center lg:w-1/2 mx-auto">

      { message && <div className="flex flex-col justify-center mx-5 w-full">
        <h1 className="bg-red-300 p-5 rounded text-2xl font-semibold text-white text-center ">{message}</h1>
        </div>
        
      }

      { error && <div className="flex flex-col justify-center mx-5 w-full">
        <h1 className="bg-red-300 p-5 rounded text-2xl font-semibold text-white text-center ">{error}</h1>
        </div>
      } 

      <h1 className="text-4xl font-semibold m-5">Sign in to your account</h1>

      <Form
        method= 'post'
        className="flex flex-col w-full  my-4"
        replace
        >

        <input type="text" name="email" placeholder='Email address (admin@admin)' className="text-xl px-3 py-4 text-gray-500 rounded-t-lg border" value='admin@admin' />

        <input type='password' name="password" placeholder='Password (admin)' className="text-xl px-3 py-4 border text-gray-500 rounded-b-lg" value='admin' />

        <button
          disabled={state === 'submitting'}
          type="submit" className={`bg-orange-400 rounded-md p-5 mt-7 text-white transform font-bold w-full text-center transition duration-500 hover:scale-105 text-xl `}>
            {state === 'submitting' ? 'Logging in' : 'Log in'}</button>

      </Form>

      <p className="text-2xl text-gray-700">Don't have an account? <span className="font-semibold text-orange-400 hover:underline"><Link>Create one now</Link></span></p>

    </div>
  )
}

export default Login