import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface TodoType {
  todo: string,
  isDone: boolean,
  priority: 'high' | 'middle' | 'low',
  id: string | number
}
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

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home