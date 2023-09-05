

interface TodoType {
  todo: string,
  isDone: boolean,
  priority: 'a_high' | 'b_middle' | 'c_low',
  id: string | number
}


type ToggleFn = (todo:TodoType, callSnackbar:any) => Promise<void> 
type DeleteFn = (id: string | number, callSnackbar:any) => Promise<void>
type AddFn = ({todo: string,isDone:boolean,priority:string},callSnackbar:any) => Promise<void>;
type UpdtFn = ({id:string ,todo: string,isDone:boolean,priority:string}) => Promise<void>;
type SnackbarFn = (color:any,message:string) => Promise<void>