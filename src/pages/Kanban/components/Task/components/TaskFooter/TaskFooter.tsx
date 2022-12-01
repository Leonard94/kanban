import * as Icon from '../../../../../../assets/icons/index'
import styles from './styles.module.scss'

export const TaskFooter = ({ child }: any) => {
  return (
    <div className={styles.info}>
      <div className={styles.info_item}>
        <Icon.Comments />
        <span>3</span>
      </div>
      <div className={styles.info_item}>
        <Icon.Subtasks />
        <span>{child?.length || 0}</span>
      </div>
      <div className={styles.info_item}>
        <Icon.Time />
        <span>01:32</span>
      </div>
    </div>
  )
}
