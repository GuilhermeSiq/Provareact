
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <main>
        <h1>Home</h1>
        <div>
            <Link to='/cadastrar'>Cadastrar </Link>
        </div>
        <div>
        <Link to='/consultar'>Consultar</Link>
        </div>
        </main>
    )
}