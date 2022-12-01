import { useState } from 'react'

import { Button } from '../../../../../../../../../components/Button/Button'

import { TChildTasks } from '../../../../../../../../../types/types'
import { AddNewChild } from './AddNewChild/AddNewChild'

import styles from './styles.module.scss'

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
