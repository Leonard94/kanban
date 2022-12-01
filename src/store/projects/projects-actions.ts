import { TActionAddProject } from '../../types/types'

export const SET_PROJECTS = '@@projects/SET_PROJECTS'
export const ADD_PROJECT = '@@projects/ADD_PROJECTS'
export const REMOVE_PROJECT = '@@projects/REMOVE_PROJECT'

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
