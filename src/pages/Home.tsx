import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo'

const url: string = import.meta.env.VITE_BASE_URL;
const Home = () => {
  const [todos, settodos] = useState<TodoType[]>([])
 
  const getTodos = async () => {
    try {
      const { data } = await axios<TodoType[]>(url);
      settodos(data)
    } catch (error) {
      console.log(error);
    }
  }
  const addTodo : AddFn = async (todo) =>{
    try {
      await axios.post(url, todo);
      // notify("The todo was created successfully!", "success");
    } catch (error) {
      console.log(error);
      // notify("The todo was not created successfully!", "error");
    } finally {
      getTodos();
    }
  };
  
  const toogleTodos : ToggleFn = async (todo) =>{
    try {
      await axios.put(`${url}/${todo.id}/`,
      {...todo , isDone:!todo.isDone})
    } catch (error) {
      console.log(error);
    } finally {
      getTodos()
    }
  }

  const deleteTodo: DeleteFn = async (id) =>{
    try {
      await axios.delete(`${url}/${id}`);
      // notify
    } catch (error) {
      console.log(error);
    } finally{
      getTodos()
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
      <Navbar/>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toogleTodos} deleteTodo={deleteTodo}/>
      <Footer/>

    </div>
  )
}

export default Home