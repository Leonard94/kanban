import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addNewTask } from '../../../../store/projects/projects-actions'

import { Button } from '../../../../components/Button/Button'
import { Input } from '../../../../components/Input/Input'
import { Modal } from '../../../../components/Modal/Modal'

import { ReactComponent as IconAdd } from '../../../../assets/icons/add.svg'
import styles from './styles.module.scss'

export const AddNewTask = ({ projectId }: any) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState<null | string>(null)
  const [isOpenModal, setOpenModal] = useState(false)

  const toggleOpenModal = () => setOpenModal(!isOpenModal)
  const dispatch = useDispatch()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const title = value.trim()

    if (title.length < 3) {
      return setError('Поле должно содержать не менее 3 символов')
    }

    dispatch(addNewTask(projectId, title))
    reset()
    toggleOpenModal()
  }

  const reset = () => {
    setValue('')
    setError(null)
  }

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  return (
    <>
      <div className={styles.add} onClick={toggleOpenModal}>
        <IconAdd />
      </div>
      <Modal isOpen={isOpenModal} onClose={toggleOpenModal} small>
        <form onSubmit={handleSubmit} noValidate>
          <h2>Добавление новой задачи</h2>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Введите название'
            error={error}
            onFocus={() => setError(null)}
            style={{ margin: '20px 0' }}
          />
          <Button type='default' onClick={toggleOpenModal}>
            Отменить
          </Button>
          <Button type='primary' disabled={!value.length} isSubmitType>
            Добавить
          </Button>
        </form>
      </Modal>
    </>
  )
}
