import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo'
import useFunctions from '../Hooks/apiFunctions'
import NotifyBar from '../components/NotifyBar';
import useSnackbar from '../Hooks/useSnackbar';

const Home = () => {

  const { getTodos, addTodo, updateTodo, deleteTodo, toogleTodos, todos, updateTodoInfo, setupdateTodoInfo } = useFunctions()

  const { callSnackbar, setOpen, open, color, message } = useSnackbar()

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
      <NotifyBar open={open} setOpen={setOpen} color={color} message={message} />
      <Navbar />
      <AddTodo addTodo={addTodo} updateTodoInfo={updateTodoInfo} updateTodo={updateTodo} setupdateTodoInfo={setupdateTodoInfo} callSnackbar={callSnackbar} />
      <TodoList todos={todos} toggleTodo={toogleTodos} deleteTodo={deleteTodo} setupdateTodoInfo={setupdateTodoInfo} callSnackbar={callSnackbar} updateTodoInfo={updateTodoInfo}/>
      <Footer />
    </div>
  )
}
export default Home