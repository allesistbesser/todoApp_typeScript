import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface INotifyBar {
  color: AlertColor,
  message: string,
  open: boolean,
  setOpen: any
}
const NotifyBar: React.FC<INotifyBar> = ({ color, message, open, setOpen }) => {

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color} sx={{ width: '30%', position: "fixed", top: 20, right: 20 }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
export default NotifyBar;