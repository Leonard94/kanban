import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { TChildTasks } from '../../../../../types/types'

import { TaskSettings } from './components/TaskSettings/TaskSettings'
import { Modal } from '../../../../../components/Modal/Modal'

import * as Icon from '../../../../../assets/icons/index'
import styles from './styles.module.scss'
import { TaskFooter } from './components/TaskFooter/TaskFooter'

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
  const { index, id, title, important, child } = props

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
          style={{
            userSelect: 'none',
            backgroundColor: snapshot.isDragging ? '#f5f5f5' : '#fff',
            ...provided.draggableProps.style,
          }}
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
          <TaskFooter child={child} />
          <Modal isOpen={isOpenSettings} onClose={toggleOpenSettings}>
            <TaskSettings {...props} />
          </Modal>
        </div>
      )}
    </Draggable>
  )
}
