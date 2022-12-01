import { Droppable } from 'react-beautiful-dnd'

import { TTask } from '../../../../types/types'
import { Task } from './Task/Task'

import styles from './styles.module.scss'

type TProps = {
  columnId: string
  name: string
  tasks: TTask[]
}

export const Column: React.FC<TProps> = ({ columnId, name, tasks }) => {
  return (
    <div className={styles.column}>
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.quantity}>{tasks.length}</div>
      </div>
      <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              borderRadius: '10px',
              background: snapshot.isDraggingOver ? '#8AABF9' : '#f9f9f9',
            }}
          >
            <div className={styles.tasks}>
              {tasks.map((task, index) => (
                <Task key={task.id} index={index} {...task} />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
