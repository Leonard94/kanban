import { ADD_NEW_TASK, SET_COLUMNS } from './kanban-actions'

import Time from '../../utils/helpers/time.helpers'

import { TTask } from '../../types/types'

type TKanbanInitial = {
  columns: {
    queue: {
      name: string
      tasks: TTask[]
    }
    development: {
      name: string
      tasks: TTask[]
    }
    done: {
      name: string
      tasks: TTask[]
    }
  }
}

type TAction = {
  type: string
  payload?: any
}

const initialState: TKanbanInitial = {
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
}

export const kanbanReducer = (
  state = initialState,
  { type, payload }: TAction
): TKanbanInitial => {
  switch (type) {
    case SET_COLUMNS:
      return {
        ...state,
        columns: payload,
      }
    case ADD_NEW_TASK:
      const currentDateAsTimestamp = Time.getCurrentDateAsTimestamp()
      const newTask = {
        id: currentDateAsTimestamp,
        title: payload,
        description: 'description',
        timeCreate: currentDateAsTimestamp,
        child: null,
      }

      return {
        ...state,
        columns: {
          ...state.columns,
          queue: {
            ...state.columns.queue,
            tasks: [...state.columns.queue.tasks, newTask],
          },
        },
      }

    default: {
      return state
    }
  }
}
