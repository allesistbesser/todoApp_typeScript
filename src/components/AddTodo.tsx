import { useState, useEffect } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

interface IAddTodoComp {
  addTodo: AddFn,
  updateTodoInfo: any,
  updateTodo: UpdtFn
}

const AddTodo: React.FC<IAddTodoComp> = ({ addTodo, updateTodoInfo, updateTodo }) => {
  const [todo, settodo] = useState<string>('')
  const [priority, setpriority] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    if (updateTodoInfo) {
      updateTodo({ id: updateTodoInfo?.id, todo: todo, priority: priority, isDone: updateTodoInfo?.isDone })
      settodo('')
    } else if (todo != "") {
      addTodo({ todo: todo, priority: priority, isDone: false })
        .then(() => { settodo(''); setpriority('') })
    }

  }
  useEffect(() => {
    settodo(updateTodoInfo?.todo)
    setpriority(updateTodoInfo?.priority)
  }, [updateTodoInfo])

  return (

    <Container component="main" maxWidth="xl" sx={{ border: "red 0px solid" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

        }}
      >

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, border: "red 0px solid", minWidth: "70%" }}>
          <Grid container spacing={2}  >

            <Grid item xs={8} lg={10} >
              <TextField
                required
                fullWidth
                id="todo"
                label="todo"
                name="todo"
                autoComplete="todo"
                value={todo}
                onChange={(e) => settodo(e.target.value)}
              />
            </Grid>
            <Grid item xs={1} lg={2}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priority || ''}
                    label="priority"
                    onChange={(e) => setpriority(e.target.value)}
                    defaultValue={''}
                  >
                    <MenuItem value={'a_high'}>High</MenuItem>
                    <MenuItem value={'b_middle'}>Middle</MenuItem>
                    <MenuItem value={'c_low'}>Low</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, maxWidth: 150, ml: "40%" }}
          >
            {updateTodoInfo ? 'Update' : 'Add Todo'}
          </Button>

        </Box>
      </Box>

    </Container>

  )
}

export default AddTodo