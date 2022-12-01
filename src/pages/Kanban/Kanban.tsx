import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DragDropContext } from 'react-beautiful-dnd'

import { useAppSelector } from '../../store/hooks'
import { dragEnd } from '../../utils/helpers/dragAndDrop.helpers'

import { Column } from './components/Column/Column'
import { AddNewTask } from './components/AddNewTask/AddNewTask'

import styles from './styles.module.scss'

export const Kanban = () => {
  const projectId = Number(useParams().id)
  const dispatch = useDispatch()

  const project = useAppSelector((state) =>
    state.projects.projects.find((projects) => projects.id === projectId)
  )

  const handleDrag = (result: any) => {
    if (project) {
      dragEnd(result, project.columns, dispatch, projectId)
    }
  }

  if (!project) {
    return <div>Такого проекта не существует</div>
  }

  return (
    <>
      <div className={styles.head}>
        <h1>{project.title}</h1>
        <AddNewTask projectId={projectId} />
      </div>
      <div className={styles.kanban}>
        <DragDropContext onDragEnd={handleDrag}>
          {Object.entries(project.columns).map(([columnId, column]) => (
            <Column key={columnId} columnId={columnId} {...column} />
          ))}
        </DragDropContext>
      </div>
    </>
  )
}
