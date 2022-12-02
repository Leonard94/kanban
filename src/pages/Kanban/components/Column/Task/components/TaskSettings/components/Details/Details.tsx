import { useDispatch } from 'react-redux'
import * as Icon from '../../../../../../../../../assets/icons/index'
import { deleteTask } from '../../../../../../../../../store/projects/projects-actions'
import styles from './styles.module.scss'

type TProps = {
  id: number
}

export const Details: React.FC<TProps> = ({ id }) => {
  // !
  const projectId = 2

  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteTask(projectId, id))
  }

  return (
    <div className={styles.details}>
      <div className={styles.delete} onClick={handleDelete}>
        <Icon.Delete />
        <span>Удалить задачу</span>
      </div>
      <div className={styles.created}>Создано 8 часов назад</div>
    </div>
  )
}
