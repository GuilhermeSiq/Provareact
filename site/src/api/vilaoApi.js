import axios from 'axios'
const api = axios.create ({
    baseURL: 'http://localhost:5000'
})

export async function CadastrarVilao(nome, maldades, poderes){
    const resposta = await api.post('/vilao', {
        nome:nome,
        maldades:maldades,
        poderes:poderes
    })
    return resposta.data
}

export async function ConsultarVilao(){
    const resposta = await api.get('/vilao')
    return resposta.data;
}