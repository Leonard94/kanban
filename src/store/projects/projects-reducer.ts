import { TAction, TProjectsInitial } from '../../types/types'
import { ADD_PROJECT, REMOVE_PROJECT, SET_PROJECTS } from './projects-actions'

const initialState: TProjectsInitial = {
  projects: [
    {
      id: 1,
      title: 'Первый Project',
    },
    {
      id: 2,
      title: 'Второй Project',
    },
    {
      id: 3,
      title: '3 проект',
    },
  ],
}

export const projectsReducer = (
  state = initialState,
  { type, payload }: TAction
): TProjectsInitial => {
  switch (type) {
    case SET_PROJECTS: {
      return payload.projects
    }
    case ADD_PROJECT: {
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            id: Date.now(),
            title: payload.title,
          },
        ],
      }
    }
    case REMOVE_PROJECT: {
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== payload),
      }
    }
    default: {
      return state
    }
  }
}
