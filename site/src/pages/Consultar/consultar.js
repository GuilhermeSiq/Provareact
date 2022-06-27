import {ConsultarVilao} from '../../api/vilaoApi.js'
import { useEffect, useState } from 'react'

export default function Consultar(){
    const [vilao, setVilao] = useState ([]);

    async function CarregarTodos(){
        const resposta = await ConsultarVilao()
        setVilao(resposta)
    }


    useEffect(() => {
        CarregarTodos();
    }, [])

    return(
        <main>
            <h1>Consultar</h1>

            <div>
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>Maldades</th>
                        <th>Poderes</th>
                    </tr>
                    {vilao.map(item =>
                        <tr>
                        <td>{item.nome}</td>
                        <td>{item.maldades}</td>
                        <td>{item.poderes ? 'Sim' :'Não'}</td>
                    </tr>
                        )}

                    
                    
                </table>
            </div>
        </main>
    )
}