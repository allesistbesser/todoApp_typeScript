import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface ITodoProperties {
  id: string | number,
  priority: 'high' | 'middle' | 'low',
  deleteTodo : DeleteFn,
  isDone: boolean
}

const TodoProperties: React.FC<ITodoProperties> = ({id,priority,deleteTodo,isDone}) => {

  const getPriority = (pr: string) => {
    console.log(pr);
    switch (pr) {
      case "high":
        return "error"
      case "middle":
        return "warning"
      case "low":
        return "info"

    }
  }
 
  return (
    <>
    {isDone ? <DeleteForeverIcon onClick={() => deleteTodo(id)} sx={{ float: "right" , cursor:"pointer"}} fontSize='small' color='error' />: null}
      
      <Tooltip title={`Ptiority ${priority}`}>
        {priority == "high" ? <ArrowUpwardIcon color={getPriority(priority)} sx={{ float: "right" }} /> : priority == "middle" ? <ArrowForwardIcon color={getPriority(priority)} sx={{ float: "right" }} /> : <ArrowDownwardIcon color={getPriority(priority)} sx={{ float: "right" }} />}
      </Tooltip>
    </>
  )
}

export default TodoProperties;