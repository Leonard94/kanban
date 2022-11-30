export const SET_PROJECTS = '@@projects/SET_PROJECTS'
export const ADD_PROJECT = '@@projects/ADD_PROJECTS'
export const REMOVE_PROJECT = '@@projects/REMOVE_PROJECT'

export const setProjects = (projects: any) => ({
  type: SET_PROJECTS,
  payload: projects,
})

type TData = {
  id: number
  title: string
}
export const addProject = (data: TData) => ({
  type: ADD_PROJECT,
  id: data.id,
  title: data.title,
})

export const removeProject = (id: number) => ({
  type: REMOVE_PROJECT,
  payload: id,
})
