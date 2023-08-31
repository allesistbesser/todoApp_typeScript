import React from 'react'
import AddTodo from './AddTodo'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
}

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo }) => {
  const progressTodos = todos.filter(item => !item.isDone)
  const completedTodos = todos.filter(item => item.isDone)
  return (
    <div>
      <AddTodo />

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent={"center"} >

        <Grid item xs={12} sm={6} md={4}>
          <Typography color="secondary" align="center" variant="h4">
            InProgress Todos
          </Typography>
          {progressTodos.map((item) => (
            <Item onClick={() => toggleTodo(item)} sx={{ m: 1, cursor: 'pointer' }} key={item.id}>{item.todo}
            </Item>
          ))}

        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography sx={{ color: "green" }} align="center" variant="h4">
            Completed Todos
          </Typography>
          {completedTodos.map((item) => (
            <Item onClick={() => toggleTodo(item)} sx={{ m: 1, cursor: "pointer" }} key={item.id}>{item.todo}
              <DeleteForeverIcon sx={{ float: "right" }} fontSize='small' color='error' />
            </Item>
          ))}

        </Grid>

      </Grid>

    </div>
  )
}

export default TodoList