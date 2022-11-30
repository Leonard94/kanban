import { ADD_PROJECT, REMOVE_PROJECT, SET_PROJECTS } from './projects-actions'

const initialState = [
  {
    id: 1,
    title: 'Первый Project',
  },
  {
    id: 2,
    title: 'Second Project',
  },
  {
    id: 3,
    title: 'Third Project',
  },
]

export const projectsReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case SET_PROJECTS: {
      return payload.projects
    }
    case ADD_PROJECT: {
      return [
        state,
        {
          id: Date.now(),
          title: payload.title,
        },
      ]
    }
    case REMOVE_PROJECT: {
      return state.filter((item) => item.id !== payload)
    }
    default: {
      return state
    }
  }
}
