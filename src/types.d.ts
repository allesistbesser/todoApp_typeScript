interface TodoType {
  todo: string,
  isDone: boolean,
  priority: 'a_high' | 'b_middle' | 'c_low',
  id: string | number
}


type ToggleFn = (todo:TodoType) => Promise<void> 
type DeleteFn = (id: string | number) => Promise<void>
type AddFn = ({todo: string,isDone:boolean,priority:string}) => Promise<void>;