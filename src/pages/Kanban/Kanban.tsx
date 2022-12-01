import { DragDropContext } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '../../store/hooks'
import { dragEnd } from './helpers'

import { Column } from './components/Column/Column'

import styles from './styles.module.scss'
import { AddNewTask } from './components/AddNewTask/AddNewTask'

export const Kanban = () => {
  const { id } = useParams()
  const { columns } = useAppSelector((state) => state.kanban)

  const dispatch = useDispatch()

  const handleDrag = (result: any) => {
    dragEnd(result, columns, dispatch)
  }

  return (
    <>
      <div className={styles.head}>
        <h1>Your tasks</h1>
        <AddNewTask projectId={id} />
      </div>
      <div className={styles.kanban}>
        <DragDropContext onDragEnd={handleDrag}>
          {Object.entries(columns).map(([columnId, column]) => (
            <Column key={columnId} columnId={columnId} {...column} />
          ))}
        </DragDropContext>
      </div>
    </>
  )
}
