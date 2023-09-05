import { useState } from "react"
import { AlertColor } from '@mui/material';


const useSnackbar = () =>{
  const [open, setOpen] = useState<boolean>(false);
  const [color, setcolor] = useState<AlertColor>()
  const [message, setmessage] = useState<string>()

  const callSnackbar = (color:AlertColor,message:string) =>{
    setcolor(color)
    setmessage(message)
    setOpen(true)
    console.log(message);
  }
return {
  callSnackbar,
  setOpen,
  open,
  color,
  message
}
}

export default useSnackbar;

