import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

interface ITodoProperties {
  id: string | number,
  priority: 'a_high' | 'b_middle' | 'c_low',
  deleteTodo: DeleteFn,
  isDone: boolean,
  setupdateTodoInfo: any,
  item: TodoType,
  callSnackbar: any
}

const TodoProperties: React.FC<ITodoProperties> = ({ id, priority, deleteTodo, isDone, setupdateTodoInfo, item, callSnackbar }) => {

  const getPriority = (pr: string) => {
    switch (pr) {
      case "a_high":
        return "error"
      case "b_middle":
        return "warning"
      case "c_low":
        return "info"
    }
  }

  return (
    <>
      {isDone ?
        <DeleteForeverIcon onClick={() => deleteTodo(id, callSnackbar)} sx={{ float: "right", cursor: "pointer" }} fontSize='small' color='error' />
        : null}
      <EditNoteOutlinedIcon onClick={() => setupdateTodoInfo(item)} sx={{ float: "right", cursor: "pointer" }} />
      <Tooltip title={`Ptiority ${priority}`}>
        {priority == "a_high" ?
          <ArrowUpwardIcon color={getPriority(priority)} sx={{ float: "left" }} />
          : priority == "b_middle" ?
            <ArrowForwardIcon color={getPriority(priority)} sx={{ float: "left" }} />
            : <ArrowDownwardIcon color={getPriority(priority)} sx={{ float: "left" }} />}
      </Tooltip>
    </>
  )
}

export default TodoProperties;