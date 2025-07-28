import express from 'express';
import { createTodo, getTodos, deleteTodo } from '../controllers/todoController.js';

const router = express.Router();

router.post('/', createTodo);        
router.get('/', getTodos);          
router.delete('/:id', deleteTodo);   

export default router;
