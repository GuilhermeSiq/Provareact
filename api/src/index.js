import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import vilaoController from './vilaoController/vilaoController.js'
const server = express();

server.use(cors());
server.use(express.json());

server.use(vilaoController)

server.listen(process.env.PORT, () => console.log(`Api conectada na porta ${process.env.PORT}`))