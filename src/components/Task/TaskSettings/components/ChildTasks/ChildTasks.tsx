import { TChildTasks } from '../../../../../types/types'
import styles from './styles.module.scss'

type TProps = {
  child: TChildTasks[] | null
}

export const ChildTasks: React.FC<TProps> = ({ child }) => {
  return (
    <div className={styles.child}>
      <button>Добавить дочернюю задачу</button>
      {}
    </div>
  )
}
