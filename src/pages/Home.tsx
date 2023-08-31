import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';

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

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
      <Navbar/>
      <TodoList todos={todos} toggleTodo={toogleTodos}/>
      <Footer/>

    </div>
  )
}

export default Home