import { Task } from '../../../../components/Task/Task'
import { TTask } from '../../../../types/types'

import styles from './styles.module.scss'

type TProps = {
  id: number
  tasks: TTask[]
  title: string
}

export const Board: React.FC<TProps> = ({ tasks, title }) => {
  return (
    <div className={styles.board}>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.quantity}>{tasks.length}</div>
      </div>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </div>
  )
}
