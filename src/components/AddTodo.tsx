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
  updateTodo: UpdtFn,
  setupdateTodoInfo: any,
  callSnackbar: any
}

const AddTodo: React.FC<IAddTodoComp> = ({ addTodo, updateTodoInfo, updateTodo, setupdateTodoInfo, callSnackbar }) => {

  const [todo, settodo] = useState<string>('')
  const [priority, setpriority] = useState<string>('a_high');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (updateTodoInfo) {
      updateTodo({ id: updateTodoInfo?.id, todo: todo, priority: priority, isDone: updateTodoInfo?.isDone })
        .then(() => setupdateTodoInfo(''))
      settodo('')
      callSnackbar("success", "todo uptated")
    } else if (todo && priority != undefined) {
      addTodo({ todo: todo, priority: priority, isDone: false }, callSnackbar)
        .then(() => { settodo(''); setpriority('a_high') })
    } else {
      callSnackbar("warning", "todo or priority must not be empty")
    }
  }

  const resetForm = () => {
    settodo('');
    setpriority('a_high');
    setupdateTodoInfo('')
  }

  useEffect(() => {
    settodo(updateTodoInfo?.todo)
    setpriority(updateTodoInfo?.priority || 'a_high')
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
              sx={{backgroundColor:"white"}}
                fullWidth
                id="todo"
                label="todo"
                name="todo"
                autoComplete="todo"
                value={todo || ''}
                onChange={(e) => settodo(e.target.value)}
              />
            </Grid>
            <Grid item xs={1} lg={2}>
              <Box sx={{ minWidth: 120 , backgroundColor:"white", padding:"5px", borderRadius:"5px"}}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priority}
                    label="priority"
                    onChange={(e) => setpriority(e.target.value)}
                    required
                    color='primary'
                  >
                    <MenuItem value={'a_high'}>High</MenuItem>
                    <MenuItem value={'b_middle'}>Middle</MenuItem>
                    <MenuItem value={'c_low'}>Low</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "center", p: 2 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ m: 2, maxWidth: "10rem" }}
            >
              {updateTodoInfo ? 'Update' : 'Add Todo'}
            </Button>
            {updateTodoInfo ? <Button
              onClick={resetForm}
              fullWidth
              variant="contained" color="error"
              sx={{ m: 2, maxWidth: "10rem" }}
            >
              Reset
            </Button> : null}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
export default AddTodo