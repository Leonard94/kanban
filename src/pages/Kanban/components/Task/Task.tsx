import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { TChildTasks } from '../../../../types/types'

import { TaskSettings } from './TaskSettings/TaskSettings'
import { Modal } from '../../../../components/Modal/Modal'

import * as Icon from '../../../../assets/icons/index'
import styles from './styles.module.scss'

// @duplicate
type TProps = {
  index: number
  id: number
  title: string
  timeCreate: number
  description?: string
  important?: boolean
  child: TChildTasks[] | null
}

export const Task: React.FC<TProps> = (props) => {
  const { index, id, title, description, important, child } = props

  const [isOpenSettings, setOpenSettings] = useState(false)
  const toggleOpenSettings = () => setOpenSettings(!isOpenSettings)

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className={styles.task}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
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
              <span>{child?.length || 0}</span>
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
      )}
    </Draggable>
  )
}
