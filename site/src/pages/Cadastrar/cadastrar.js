
import {useState} from 'react'
import {CadastrarVilao} from '../../api/vilaoApi.js'
export default function Cadastrar(){

    const [nome, setNome] = useState('');
    const [maldades, setMaldades] = useState('');
    const [poderes, setPoderes] = useState(false);

    async function SalvarClick(){
        try {
            if(!nome || !maldades){
                alert('Preencha todos os campos')
            }
            else{
                const resposta = await CadastrarVilao(nome, maldades, poderes)
                console.log(resposta)
                alert('Vilão cadastrado com sucesso')
        } 
    }
        catch (err) {
            alert(err.message)
            
        }
    }
    return(
        <main>
            <div>
                <h1>Cadastrar</h1>
                
            </div>
            <div>
                <label>Nome do vilão</label> &nbsp;
                <input type='text' value={nome} onChange={e => setNome(e.target.value)}></input>
            </div>
            <div>
                <label>Maldades</label> &nbsp;
                <input type='text' value={maldades} onChange={e => setMaldades(e.target.value)}></input>
            </div>
            <div>
                <label>Tem poder ?</label> &nbsp;
                <input type='checkbox' checked={poderes} onChange={e => setPoderes(e.target.checked)}></input>
            </div>
            <div>
                <button onClick={SalvarClick}>Cadastrar</button>
            </div>
        </main>
    )
}