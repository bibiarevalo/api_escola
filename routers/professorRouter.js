import express from "express"
import {criarProfessor,listarProfessor,editarProfessor,removerProfessor} from "../controllers/professorController.js"
const router = express.Router();

router.post('/criar', criarProfessor);
router.get('/listar', listarProfessor);
router.put('/atualizar/:id', editarProfessor);
router.delete('/remover/:id', removerProfessor);

export default router; 