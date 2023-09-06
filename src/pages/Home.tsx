import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo'
import useFunctions from '../Hooks/useFunctions'
import NotifyBar from '../components/NotifyBar';
import useSnackbar from '../Hooks/useSnackbar';
import { styled } from '@mui/material/styles';

const MyDiv = styled('div')(({ id }) => ({
  backgroundImage: `url(https://picsum.photos/id/${id}/800/1200)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vmax"
}));

const Home = () => {
  const { getTodos, addTodo, updateTodo, deleteTodo, toogleTodos, todos, updateTodoInfo, setupdateTodoInfo } = useFunctions()

  const { callSnackbar, setOpen, open, color, message } = useSnackbar()

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <MyDiv id='337'>
      <NotifyBar open={open} setOpen={setOpen} color={color} message={message} />
      <Navbar />
      <AddTodo addTodo={addTodo} updateTodoInfo={updateTodoInfo} updateTodo={updateTodo} setupdateTodoInfo={setupdateTodoInfo} callSnackbar={callSnackbar} />
      <TodoList todos={todos} toggleTodo={toogleTodos} deleteTodo={deleteTodo} setupdateTodoInfo={setupdateTodoInfo} callSnackbar={callSnackbar} updateTodoInfo={updateTodoInfo} />
      <Footer />
    </MyDiv>
  )
}
export default Home