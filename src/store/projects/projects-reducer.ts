import { ADD_PROJECT, REMOVE_PROJECT, SET_PROJECTS } from './projects-actions'

type TTask = {
  id: number
  board: 'Queue' | 'Development' | 'Done'
  title: string
  timeCreate: number
  description?: string
  important?: boolean
  child: TChildTasks[] | null
}

type TChildTasks = {
  id: number
  title: string
  completed: boolean
}

type TProject = {
  id: number
  title: string
}

type TProjectsInitial = {
  projects: TProject[]
}

type TAction = {
  type: string
  payload?: any
}

const initialState: TProjectsInitial = {
  projects: [
    {
      id: 1,
      title: 'Первый Project',
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
