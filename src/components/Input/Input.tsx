import React from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

type TProps = {
  name?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  label?: string
  error?: string | null
  onFocus?: () => void
  isTitle?: boolean
  style?: React.CSSProperties
}

export const Input: React.FC<TProps> = (props) => {
  const {
    name,
    value,
    onChange,
    placeholder,
    label,
    error,
    onFocus,
    isTitle,
    style,
  } = props

  const inputClass = cn(styles.input, {
    [styles.input_invalid]: error,
    [styles.input_title]: isTitle,
  })

  return (
    <div className={styles.row} style={style}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type='text'
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
        onFocus={onFocus}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
