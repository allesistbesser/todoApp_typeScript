import axios from 'axios'
import { useState } from 'react';
// import useSnackbar from './useSnackbar';

const url: string = import.meta.env.VITE_BASE_URL;

const useFunctions = () => {
  // const {callSnackbar} = useSnackbar()
  const [todos, settodos] = useState<TodoType[]>([])
  const [updateTodoInfo, setupdateTodoInfo] = useState<TodoType>()

  const getTodos = async () => {
    try {
      const { data } = await axios<TodoType[]>(url);
      settodos(data)
      return data
    } catch (error) {
      console.log(error);
    }
  }
  const addTodo: AddFn = async (todo, callSnackbar) => {
    try {
      await axios.post(url, todo);
      callSnackbar('success', 'todo added')
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };

  const updateTodo: UpdtFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}/`,
        { ...todo, todo: todo.todo, priority: todo.priority, isDone: todo.isDone })
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
      setupdateTodoInfo('')
    }
  };

  const toogleTodos: ToggleFn = async (todo, callSnackbar) => {
    try {
      await axios.put(`${url}/${todo.id}/`,
        { ...todo, isDone: !todo.isDone })
      callSnackbar('success', 'todo toggle uptdated')
    } catch (error) {
      console.log(error);
    } finally {
      getTodos()
    }
  }

  const deleteTodo: DeleteFn = async (id, callSnackbar) => {
    try {
      await axios.delete(`${url}/${id}`);
      callSnackbar('success', 'todo deleted')
    } catch (error) {
      console.log(error);
    } finally {
      getTodos()
    }
  }
  return {
    getTodos,
    addTodo,
    updateTodo,
    toogleTodos,
    deleteTodo,
    todos,
    updateTodoInfo,
    setupdateTodoInfo
  }
}
export default useFunctions;

