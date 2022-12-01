import cn from 'classnames'

import { Portal } from './Portal/Portal'

import * as Icon from '../../assets/icons/index'
import styles from './styles.module.scss'

type TProps = {
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
  small?: boolean
}

export const Modal: React.FC<TProps> = ({
  isOpen,
  children,
  onClose,
  small,
}) => {
  if (!isOpen) {
    return null
  }

  const style = cn(styles.body, { [styles.body_small]: small })

  return (
    <Portal>
      <div className={styles.modal}>
        <div className={styles.overlay} onClick={onClose} />
        <div className={style}>
          <span className={styles.close} onClick={onClose}>
            <Icon.Close />
          </span>
          {children}
        </div>
      </div>
    </Portal>
  )
}
