import { Todo } from '../models/Todo.js';

export const createTodo = async (req, res) => {
  try {
    const { content, createBy } = req.body;
    const todo = await Todo.create({ content, createBy });
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().populate('subTodos');
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
