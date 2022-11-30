import { combineReducers } from 'redux'

import { kanbanReducer } from './kanban/kanban-reducer'
import { projectsReducer } from './projects/projects-reducer'

export const rootReducer = combineReducers({
  projects: projectsReducer,
  kanban: kanbanReducer,
})

export type RootState = ReturnType<typeof rootReducer>
