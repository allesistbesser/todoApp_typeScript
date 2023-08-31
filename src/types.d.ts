interface TodoType {
  todo: string,
  isDone: boolean,
  priority: 'high' | 'middle' | 'low',
  id: string | number
}

type ToggleFn = (todo:TodoType) => Promise<void> 