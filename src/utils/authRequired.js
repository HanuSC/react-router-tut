import { redirect } from "react-router-dom";

export default function AuthRequired(request) {
    const isLogged = localStorage.getItem('isLogged')
    const pathname = new URL(request.url).pathname
    if (!isLogged) {
      throw redirect(`/login?message=Login Required&from=${pathname}`)
    } 
    return null
    
}