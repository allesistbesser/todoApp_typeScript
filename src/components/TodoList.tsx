import { Grid, Paper, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import TodoProperties from './TodoProperties';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

interface ITodoList {
  todos: TodoType[],
  toggleTodo: ToggleFn
  deleteTodo: DeleteFn
}

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, deleteTodo }) => {
  const progressTodos = todos.filter(item => !item.isDone)
  const completedTodos = todos.filter(item => item.isDone)
  return (
    <div>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent={"center"} >
        <Grid item xs={12} sm={6} md={4}>
          <Typography color="secondary" align="center" variant="h4">
            InProgress Todos
          </Typography>
          {progressTodos.map((item) => (
            <Item sx={{ m: 1 }} key={item.id}>
              <Typography sx={{ display: "inline", cursor: 'pointer', p: 2 }} onClick={() => toggleTodo(item)}>{item.todo}</Typography>
              <TodoProperties id={item.id} priority={item.priority} deleteTodo={deleteTodo} isDone={item.isDone} />
            </Item>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography sx={{ color: "green" }} align="center" variant="h4">
            Completed Todos
          </Typography>
          {completedTodos.map((item) => (
            <Item sx={{ m: 1 }} key={item.id}>
            <Typography sx={{ display: "inline", cursor: 'pointer', p: 2 }} onClick={() => toggleTodo(item)}>{item.todo}</Typography>
            <TodoProperties id={item.id} priority={item.priority} deleteTodo={deleteTodo} isDone={item.isDone} />
          </Item>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default TodoList;

