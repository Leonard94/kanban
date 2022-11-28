import { useState } from 'react'

import { Button } from '../../../../Button/Button'

import { TChildTasks } from '../../../../../types/types'

import styles from './styles.module.scss'
import { AddNewChild } from './AddNewChild/AddNewChild'

type TProps = {
  child: TChildTasks[] | null
}

export const ChildTasks: React.FC<TProps> = ({ child }) => {
  const [childTasks, setChildTasks] = useState(child)

  const [addedMode, setAddedMode] = useState(false)

  const addNewChildTask = () => {
    // setNewChildValue()
  }
  const toggleEditMode = () => {
    setAddedMode(!addedMode)
  }

  return (
    <div className={styles.child}>
      {child?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      {addedMode ? (
        <AddNewChild toggleEditMode={toggleEditMode} />
      ) : (
        <Button type='primary' onClick={toggleEditMode}>
          Добавить подзадачу
        </Button>
      )}
    </div>
  )
}
