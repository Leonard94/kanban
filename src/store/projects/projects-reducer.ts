import Time from '../../utils/helpers/time.helpers'

import { TAction, TProject, TProjectsInitial } from '../../types/types'
import {
  ADD_NEW_TASK,
  ADD_PROJECT,
  DELETE_TASK,
  REMOVE_PROJECT,
  SET_COLUMNS,
  SET_PROJECTS,
} from './projects-actions'

const initialState: TProjectsInitial = {
  projects: [
    {
      id: 1,
      title: 'Первый Project',
      columns: {
        queue: {
          name: 'Queue',
          tasks: [
            {
              id: 1,
              title: 'Первая задача',
              description: 'Описание',
              timeCreate: 1668767058,
              child: null,
            },
            {
              id: 2,
              title: 'Вторая задача',
              description: 'Описание второй задачи',
              timeCreate: 1668767058,
              important: true,
              child: null,
            },
            {
              id: 3,
              title: '3 задача',
              description: 'Описание второй задачи',
              timeCreate: 1668767058,
              important: true,
              child: [
                {
                  id: 1,
                  title: 'Подзадача номер 1',
                  completed: false,
                },
                {
                  id: 2,
                  title: 'Подзадача номер 2',
                  completed: false,
                },
              ],
            },
            {
              id: 4,
              title: '4 задача',
              description: 'Описание второй задачи',
              timeCreate: 1668767058,
              important: true,
              child: null,
            },
            {
              id: 5,
              title: '5 задача',
              description: 'Описание второй задачи',
              timeCreate: 1668767058,
              important: true,
              child: null,
            },
          ],
        },
        development: {
          name: 'Development',
          tasks: [],
        },
        done: {
          name: 'Done',
          tasks: [],
        },
      },
    },
    {
      id: 2,
      title: 'Второй Project',
      columns: {
        queue: {
          name: 'Queue',
          tasks: [
            {
              id: 1,
              title: 'Первая задача',
              description: 'Описание',
              timeCreate: 1668767058,
              child: null,
            },
          ],
        },
        development: {
          name: 'Development',
          tasks: [],
        },
        done: {
          name: 'Done',
          tasks: [],
        },
      },
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
            columns: {
              queue: { name: 'queue', tasks: [] },
              development: { name: 'development', tasks: [] },
              done: { name: 'done', tasks: [] },
            },
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
    case SET_COLUMNS: {
      const newData = state.projects.map((project) => {
        if (project.id === payload.projectId) {
          return { ...project, columns: payload.data }
        }
        return project
      })
      return {
        ...state,
        projects: newData,
      }
    }
    case ADD_NEW_TASK: {
      const currentDateAsTimestamp = Time.getCurrentDateAsTimestamp()
      const newTask = {
        id: currentDateAsTimestamp,
        title: payload.title,
        description: 'description',
        timeCreate: currentDateAsTimestamp,
        child: null,
      }

      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project.id === payload.projectId) {
            return {
              ...project,
              columns: {
                ...project.columns,
                queue: {
                  ...project.columns.queue,
                  tasks: [...project.columns.queue.tasks, newTask],
                },
              },
            }
          }
          return project
        }),
      }
    }
    default: {
      return state
    }
  }
}
