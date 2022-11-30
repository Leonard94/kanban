import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

type TProps = {
  id: number
  title: string
}

export const Project: React.FC<TProps> = ({ id, title }) => {
  return (
    <Link to={`/kanban/${id}`} className={styles.project}>
      {title}
    </Link>
  )
}
