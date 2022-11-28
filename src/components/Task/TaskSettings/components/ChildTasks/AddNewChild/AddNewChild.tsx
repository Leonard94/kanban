import { useState } from 'react'
import { Button } from '../../../../../Button/Button'

import { Input } from '../../../../../Input/Input'

import styles from './styles.module.scss'

type TProps = {
  toggleEditMode: () => void
}

// todo
// OnFocus при монитровании компонента

export const AddNewChild: React.FC<TProps> = ({ toggleEditMode }) => {
  const [title, setTitle] = useState('')

  return (
    <>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Введите название...'
      />
      <Button type='default' onClick={toggleEditMode}>
        Отменить
      </Button>
      <Button type='primary'>Сохранить</Button>
    </>
  )
}