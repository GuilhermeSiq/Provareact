import { Router } from "express";
const server = Router();
import {AdicionarVilao, ListarTodos} from '../vilaoRepository/vilaoRepository.js';


server.post('/vilao', async (req, resp) => {
    try {
        const vilao = req.body;
    if(!vilao.nome){
        throw new Error('Nome do vilão obrigatório')
    }
    if(!vilao.maldades){
        throw new Error('Maldades do vilão obrigatória')
    }
   
    const inserirVilao = await AdicionarVilao(vilao);
    resp.send(inserirVilao)
    } catch (err) {
        resp.send({
            erro:err.message
        })
    }
})

server.get('/vilao', async (req,resp) => {
    try {
        const resposta = await ListarTodos()
        resp.send(resposta)
    } catch (err) {
        resp.send({
            erro:err.message
        })
    }
    
})

export default server;