import { useState } from 'react'

import { Input } from '../../../../Input/Input'

import styles from './styles.module.scss'

type TProps = {
  title: string
  description: string | undefined
}

export const TitleSection: React.FC<TProps> = ({ title, description }) => {
  const [values, setValues] = useState({
    title: title,
    description: description || '',
  })

  const handleOnChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className={styles.title_section}>
      <Input
        value={values.title}
        onChange={handleOnChangeValues}
        placeholder='Введите название задачи'
        name='title'
        isTitle
      />
      <Input
        value={values.description}
        onChange={handleOnChangeValues}
        placeholder='Добавить описание...'
        name='description'
      />
    </div>
  )
}
