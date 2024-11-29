import express from "express"
import {criarAluno,listarAluno,editarAluno,removerAluno} from "../controllers/alunoController.js"
const router = express.Router();

router.post('/criar', criarAluno);
router.get('/listar', listarAluno);
router.put('/atualizar/:id', editarAluno);
router.delete('/remover/:id', removerAluno);

export default router; 