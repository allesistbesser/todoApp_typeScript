import { useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface IAddTodoComp {
  addTodo: AddFn
}

const AddTodo: React.FC<IAddTodoComp> = ({ addTodo }) => {

  const [priority, setpriority] = useState<any>();

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('todo') != ""){
       addTodo({todo:data.get('todo') as string , priority:data.get('priority'),isDone:false})
    }
   
  }

  return (
    
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} >

              <Grid item xs={6} lg={6}>
                <TextField
                  required
                  fullWidth
                  id="todo"
                  label="todo"
                  name="todo"
                  autoComplete="todo"
                />
              </Grid>
              <Grid item xs={6} lg={6}>
                <Select sx={{ minWidth: 320 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={priority}
                  label="priority"
                  onChange={(e)=>setpriority(e.target.value)}
                >
                  <MenuItem value={'high'}>High</MenuItem>
                  <MenuItem value={'middle'}>Middle</MenuItem>
                  <MenuItem value={'low'}>Low</MenuItem>
                </Select>
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, maxWidth: 150 }}
            >
              Add Todo
            </Button>

          </Box>
        </Box>

      </Container>
    
  )
}

export default AddTodo