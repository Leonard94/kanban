import * as Icon from '../../../../../../../assets/icons/index'
import styles from './styles.module.scss'

export const Details = () => {
  const handleDelete = () => {}

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
