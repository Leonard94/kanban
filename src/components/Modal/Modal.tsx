import { Portal } from './Portal/Portal'
import * as Icon from '../../assets/icons/index'
import styles from './styles.module.scss'

type TProps = {
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
}

export const Modal: React.FC<TProps> = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <div className={styles.modal}>
        <div className={styles.overlay} onClick={onClose} />
        <div className={styles.body}>
          <span className={styles.close} onClick={onClose}>
            <Icon.Close />
          </span>
          {children}
        </div>
      </div>
    </Portal>
  )
}
