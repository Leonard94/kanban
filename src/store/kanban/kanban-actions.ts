export const SET_COLUMNS = '@@kanban/SET_COLUMNS'
export const ADD_NEW_TASK = '@@kanban/ADD_NEW_TASK'
export const DELETE_TASK = '@@kanban/DELETE_TASK'

export const setColumns = (data: any) => ({
  type: SET_COLUMNS,
  payload: data,
})

export const addNewTask = (title: string) => ({
  type: ADD_NEW_TASK,
  payload: title,
})

export const deleteTask = (taskId: number) => ({
  type: ADD_NEW_TASK,
  payload: taskId,
})
