import { Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import TodoProperties from './TodoProperties';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#dfeef3',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  userSelect: "none",
  '&:hover': {
    background: "#a97f7f47",
 },
}));

interface ITodoList {
  todos: TodoType[],
  toggleTodo: ToggleFn
  deleteTodo: DeleteFn
  setupdateTodoInfo: any,
  callSnackbar: any,
  updateTodoInfo:TodoType
}

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, deleteTodo, setupdateTodoInfo, callSnackbar,updateTodoInfo }) => {

  const progressTodos = todos.filter(item => !item.isDone)
  const completedTodos = todos.filter(item => item.isDone)

  const sortingTodo = (item: any) => {
    item.sort(function (a: any, b: any) {
      return a.priority.localeCompare(b.priority);
    });
  }

  sortingTodo(progressTodos)
  sortingTodo(completedTodos)

  return (
    <div>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent={"center"} >
        <Grid item xs={12} sm={6} md={4}>
          <Typography color="secondary" align="center" variant="h4">
            InProgress Todos
          </Typography>
          {progressTodos?.map((item) => (
            <Item sx={{ m: 1 }} key={item.id}>
              <Typography sx={{ display: "inline", cursor: 'pointer', p: 2 }} onDoubleClick={() => toggleTodo(item, callSnackbar)} >{item.todo}</Typography>
              <TodoProperties id={item.id} priority={item.priority} deleteTodo={deleteTodo} isDone={item.isDone} setupdateTodoInfo={setupdateTodoInfo} item={item} callSnackbar={callSnackbar} />
            </Item>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography sx={{ color: "green" }} align="center" variant="h4">
            Completed Todos
          </Typography>
          {completedTodos?.map((item) => (
            <Item sx={{ m: 1 }} key={item.id}>
              <Typography sx={{ display: "inline", cursor: 'pointer', p: 2 }} onDoubleClick={() => toggleTodo(item, callSnackbar)} >{item.todo}</Typography>
              <TodoProperties id={item.id} priority={item.priority} deleteTodo={deleteTodo} isDone={item.isDone} setupdateTodoInfo={setupdateTodoInfo} item={item} callSnackbar={callSnackbar} />
            </Item>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default TodoList;

