import { TActionAddProject, TProjectId } from '../../types/types'

export const SET_PROJECTS = '@@projects/SET_PROJECTS'
export const ADD_PROJECT = '@@projects/ADD_PROJECTS'
export const REMOVE_PROJECT = '@@projects/REMOVE_PROJECT'

export const SET_COLUMNS = '@@projects/SET_COLUMNS'
export const ADD_NEW_TASK = '@@projects/ADD_NEW_TASK'
export const DELETE_TASK = '@@projects/DELETE_TASK'

export const setProjects = (projects: any) => ({
  type: SET_PROJECTS,
  payload: projects,
})

export const addProject = (data: TActionAddProject) => ({
  type: ADD_PROJECT,
  id: data.id,
  title: data.title,
})

export const removeProject = (id: number) => ({
  type: REMOVE_PROJECT,
  payload: id,
})

export const setColumns = (projectId: TProjectId, data: any) => ({
  type: SET_COLUMNS,
  payload: { data, projectId },
})

export const addNewTask = (projectId: TProjectId, title: string) => ({
  type: ADD_NEW_TASK,
  payload: { projectId, title },
})

export const deleteTask = (taskId: number) => ({
  type: ADD_NEW_TASK,
  payload: taskId,
})
