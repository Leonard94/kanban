import { useState } from 'react'

import { TTask } from '../../types/types'

import * as Icon from '../../assets/icons/index'

import styles from './styles.module.scss'
import { Modal } from '../Modal/Modal'
import { TaskSettings } from './TaskSettings/TaskSettings'

// todo
/*
  Если задача в приоритете и выполнена - цвет огня серый
*/

export const Task: React.FC<TTask> = (props) => {
  const { id, title, description, important } = props
  const [isOpenSettings, setOpenSettings] = useState(false)
  const toggleOpenSettings = () => setOpenSettings(!isOpenSettings)

  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <div className={styles.settings} onClick={toggleOpenSettings}>
          <Icon.Dots />
        </div>
        <div className={styles.title}>{title}</div>
        {important && (
          <div className={styles.important}>
            <Icon.Fire />
            <span>High</span>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.info_item}>
          <Icon.Comments />
          <span>3</span>
        </div>
        <div className={styles.info_item}>
          <Icon.Subtasks />
          <span>0</span>
        </div>
        <div className={styles.info_item}>
          <Icon.Time />
          <span>01:32</span>
        </div>
      </div>
      <Modal isOpen={isOpenSettings} onClose={toggleOpenSettings}>
        <TaskSettings {...props} />
      </Modal>
    </div>
  )
}
